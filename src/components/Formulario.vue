<template>
    <div> 
        <v-col lg="3">
        <v-text-field v-model="nombre" label="Nombre"></v-text-field>
        </v-col>
        <v-col lg="3">
        <v-text-field v-model="apellido" label="Apellido"></v-text-field>
        </v-col>
        <v-col lg="3">
        <v-text-field v-model="edad" label="Edad"></v-text-field>
        </v-col>
        <v-btn color="green" @click="guardar">Enviar</v-btn>
        <v-col lg="12">
            <li>
                <ul v-for="persona in personas" :key="persona.nombre">
                    <li>
                        <ul>
                            Nombre: {{ persona.nombre }}
                        </ul>
                        <ul>
                            Apellido {{ persona.apellido }}
                        </ul>
                        <ul>
                            Edad: {{ persona.edad }}
                        </ul>
                    </li>
                 </ul>
            </li>
        </v-col>
    </div>
    
</template>

<script>

import firebase from 'firebase'

export default {
    data: () => ({  
        nombre: null,
        apellido: null,
        edad: null,
        database: null,
        personas: null,
    }),
    mounted(){
        this.database = firebase.database();
        this.leer().then(resultado =>{
            this.personas = resultado
            console.log(this.personas)
        })
    },
    methods: {
        guardar(){
            this.database.ref('Personas').push({
                nombre: this.nombre,
                apellido : this.apellido,
                edad: this.edad,
                
            })
        },
        leer (){
            return new Promise((resolve, reject) => {
                let personas = []
                let self = this
                this.database.ref('Personas/').orderByChild('nombre').on('child_added', function(snapshot){
                    personas.push(snapshot.val())
                })
                resolve(personas)
            })
        }
    }
    
}
</script>>