<template>
    <v-container>
        <!--Boton atras-->
            <v-row>
                <v-col>
                    <v-icon>mdi-chevron-left</v-icon>
                </v-col>
            </v-row>
        <!--Titulo-->
            <v-row>
                <v-col>
                    <h2 class="title">Restaurantes</h2>
                </v-col>
            </v-row>
        <!--Campo de busqueda-->
            <v-row>
                <v-col cols="11" sm="6">
                    <v-text-field
                        v-model="buscador"
                        filled
                        label="Buscar..."
                        clearable
                    ></v-text-field>
                </v-col>
                    <v-icon class="mb-5">mdi-playlist-edit</v-icon>
            </v-row>
            <v-card-local>  
            </v-card-local>

        <!--Promociones-->
            <h2 class="title">Promociones</h2>
            <v-row>
                <v-col>
                    <v-slide-group>
                        <v-slide-item>
                            <v-img class="mr-2" src="../assets/img/promoHamburguesa.jpg"></v-img>
                        </v-slide-item>
                        <v-slide-item>
                            <v-img class="ml-2" src="../assets/img/promoCerveza.jpg"></v-img>
                        </v-slide-item>
                    </v-slide-group>
                </v-col>
            </v-row>
        <!--Categorias-->
            <v-row>
                <v-col>
                    <categorias></categorias>
                </v-col>
            </v-row>
        <!--Cartas-->
            <v-row>
                <v-col>
                    <CardLocal></CardLocal>
                </v-col>
            </v-row>
    </v-container>
</template>




<script>
import Categorias from '@/components/Categorias'
import CardLocal from '@/components/CardLocal'

export default {
  name: "BaresRestaurantes",
  components: {
      Categorias,
      CardLocal
  },
  data() {
      return {
          resultados: [],
          buscador: null
      }
  },
  watch: {
  	buscador (val) {
       let valores = val.split(' ')       
    	 this.resultados = this.locales.filter(function(item) {
       		let busqueda = []
       		let respuesta = null
       		for(let res of valores) {
             busqueda.push(item.Nombre.indexOf(res) > -1 || 
       			item.Direccion.indexOf(res) > -1 ||
       			item.Categoria.indexOf(res) > -1 )
          }
          
          for(let i = 0; i < busqueda.length; i++) {
          	if(i == 0) {
            	respuesta = busqueda[i]
            } else {
            	respuesta = (respuesta && busqueda[i])
            }
          }
          return respuesta
       })
    }
  }
};
</script>
