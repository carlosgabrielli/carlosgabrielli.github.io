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
                <v-col class="pb-0">
                    <h2 class="title">Categorias</h2>
                </v-col>
                <v-col>
                    <v-slide-group>
                        <v-slide-item>
                            <v-card class="mr-2 p-0" @click="toggle" height="100" width="100">
                            <v-img src="../assets/img/Carnes.png">
                                <v-card-title class="title-categorias">Carnes</v-card-title>
                            </v-img>
                            </v-card>
                        </v-slide-item>
                        <v-slide-item>
                            <v-card class="mx-2" @click="toggle" height="100" width="100">
                            <v-img src="../assets/img/Ensaladas.png">
                                <v-card-title class="title-categorias">Ensaladas</v-card-title>
                            </v-img>
                            </v-card>
                        </v-slide-item>
                        <v-slide-item>
                            <v-card class="mx-2" @click="toggle" height="100" width="100">
                            <v-img src="../assets/img/Empanadas.png">
                                <v-card-title class="title-categorias">Empanadas</v-card-title>
                            </v-img>
                            </v-card>
                        </v-slide-item>
                        <v-slide-item>
                            <v-card class="mx-2" @click="toggle" height="100" width="100">
                            <v-img src="../assets/img/Hamburguesa.png">
                                <v-card-title class="title-categorias">Hamburguesas</v-card-title>
                            </v-img>
                            </v-card>
                        </v-slide-item>
                    </v-slide-group>
                </v-col>
            </v-row>
        <!--Cartas-->
            <v-row>
                <v-col>
                    <v-card class="mb-4" max-width="380" outlined>
                    <v-list-item three-line>
                        <v-list-item-avatar tile size="70" color="grey lighten-5">
                            <v-img class="mr-2" src="../assets/img/LogoJohnny.png"></v-img>
                        </v-list-item-avatar>
                        <v-btn icon class="btn-heart">
                        <v-icon size="16">mdi-heart-outline</v-icon>
                        </v-btn>
                        <v-list-item-content class="mr-4 ml-n2">
                        <v-list-item-title
                            class="headline mb-1 subtitle-1 font-weight-bold"
                        >El club de la milanesa</v-list-item-title>
                        <v-list-item-subtitle class="subtitle-2 font-weight-regular">Ensaladas, Hamburguesas</v-list-item-subtitle>
                        <v-card-subtitle class="caption pa-0">Av. Hipolito Yrigoyen 320 - 2km</v-card-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    </v-card>
                </v-col>
                <v-col>
                    <v-card class="mb-4" max-width="380" outlined>
                        <v-list-item three-line>
                            <v-list-item-avatar tile size="70" color="grey"></v-list-item-avatar>
                                <v-btn icon class="btn-heart">
                                    <v-icon size="16">mdi-heart-outline</v-icon>
                                </v-btn>
                            <v-list-item-content class="mr-4 ml-n2">
                            <v-list-item-title
                                class="headline mb-1 subtitle-1 font-weight-bold"
                            >El club de la milanesa</v-list-item-title>
                            <v-list-item-subtitle class="subtitle-2 font-weight-regular">Ensaladas, Hamburguesas</v-list-item-subtitle>
                            <v-card-subtitle class="caption pa-0">Av. Hipolito Yrigoyen 320 - 2km</v-card-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-card>
                </v-col>
                <v-col>
                    <v-card class="mb-4" max-width="380" outlined>
                        <v-list-item three-line>
                            <v-list-item-avatar tile size="70" color="grey"></v-list-item-avatar>
                            <v-btn icon class="btn-heart">
                                <v-icon size="16">mdi-heart-outline</v-icon>
                            </v-btn>
                            <v-list-item-content class="mr-4 ml-n2">
                            <v-list-item-title
                                class="headline mb-1 subtitle-1 font-weight-bold"
                            >El club de la milanesa
                            </v-list-item-title>
                            <v-list-item-subtitle class="subtitle-2 font-weight-regular">Ensaladas, Hamburguesas</v-list-item-subtitle>
                            <v-card-subtitle class="caption pa-0">Av. Hipolito Yrigoyen 320 - 2km</v-card-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-card>
                </v-col>
                <v-col>
                    <v-card class="mb-4" max-width="380" outlined>
                        <v-list-item three-line>
                            <v-list-item-avatar tile size="70" color="grey"></v-list-item-avatar>
                                <v-btn icon class="btn-heart">
                                    <v-icon size="16">mdi-heart-outline</v-icon>
                                </v-btn>
                            <v-list-item-content class="mr-4 ml-n2">
                            <v-list-item-title
                                class="headline mb-1 subtitle-1 font-weight-bold"
                            >El club de la milanesa</v-list-item-title>
                            <v-list-item-subtitle class="subtitle-2 font-weight-regular">Ensaladas, Hamburguesas</v-list-item-subtitle>
                            <v-card-subtitle class="caption pa-0">Av. Hipolito Yrigoyen 320 - 2km</v-card-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-card>
                </v-col>
            </v-row>
    </v-container>
</template>




<script>
export default {
  name: "BaresRestaurantes",
  components: {},
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
