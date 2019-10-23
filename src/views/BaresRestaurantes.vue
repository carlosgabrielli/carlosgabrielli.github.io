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
                        v-model="message3"
                        filled
                        label="Buscar..."
                        clearable
                    ></v-text-field>
                </v-col>
                    <v-icon class="mb-5">mdi-playlist-edit</v-icon>
            </v-row>
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
        <v-row>
            <v-col>
                <h2 class="title">Categorias</h2>
            </v-col>
            <v-col>
                <v-slide-group class="mt-10">
                    <v-slide-item>
                        <v-card class="mr-2" @click="toggle" max-height="90">
                        <v-img src="../assets/img/carnes.png" class="pl-8">
                            <v-card-title class="black--text pl-1 " >Carnes</v-card-title>
                        </v-img>
                        </v-card>
                    </v-slide-item>
                    <v-slide-item>
                        <v-card class="mx-2" @click="toggle">
                        <v-img src="../assets/img/ensalada.png">
                            <v-card-title class="black--text pt-1 pl-2 f-18">Ensaladas</v-card-title>
                        </v-img>
                        </v-card>
                    </v-slide-item>
                    <v-slide-item>
                        <v-card class="mx-2" @click="toggle">
                        <v-img src="../assets/img/empanada.png">
                            <v-card-title class="black--text pt-1 pl-2 f-18">Empanadas</v-card-title>
                        </v-img>
                        </v-card>
                    </v-slide-item>
                    <v-slide-item>
                        <v-card class="mx-2" @click="toggle">
                        <v-img src="../assets/img/hambur.png">
                            <v-card-title class="black--text pt-1 pl-2 f-18">Hamburguesas</v-card-title>
                        </v-img>
                        </v-card>
                    </v-slide-item>
                </v-slide-group>
            </v-col>
        </v-row>
        
    </v-container>
</template>
<script>
export default {
  name: "BaresRestaurantes",
  components: {}
};
</script>
