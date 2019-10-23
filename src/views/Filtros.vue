<template>
    <v-container>
        <!--Boton atras-->
            <v-row>
                <v-col class="pb-0">
                    <v-icon >mdi-chevron-left</v-icon>
                </v-col>
            </v-row>
        <!--Categorias-->
            <v-row>
                <v-col>
                    <h2 class="title">Categorias</h2>
                </v-col>
                <v-col>
                    <v-slide-group >
                        <v-slide-item>
                            <v-card class="mr-2" @click="toggle" max-height="90" max-width="90">
                            <v-img src="../assets/img/carnes.png" class="pl-8">
                                <v-card-title class="black--text pl-1 " >Carnes</v-card-title>
                            </v-img>
                            </v-card>
                        </v-slide-item>
                        <v-slide-item>
                            <v-card class="mx-2" @click="toggle" max-height="90" max-width="90">
                            <v-img src="../assets/img/ensalada.png">
                                <v-card-title class="black--text pt-1 pl-2 f-18">Ensaladas</v-card-title>
                            </v-img>
                            </v-card>
                        </v-slide-item>
                        <v-slide-item>
                            <v-card class="mx-2" @click="toggle" max-height="90" max-width="90">
                            <v-img src="../assets/img/empanada.png">
                                <v-card-title class="black--text pt-1 pl-2 f-18">Empanadas</v-card-title>
                            </v-img>
                            </v-card>
                        </v-slide-item>
                        <v-slide-item>
                            <v-card class="mx-2" @click="toggle" max-height="90" max-width="90">
                            <v-img src="../assets/img/hambur.png">
                                <v-card-title class="black--text pt-1 pl-2 f-18">Hamburguesas</v-card-title>
                            </v-img>
                            </v-card>
                        </v-slide-item>
                    </v-slide-group>
                </v-col>
            </v-row>
        <!--Filtro Lugar-->
            <v-row>
                <v-col>
                    <h2 class="title">Lugar</h2>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="5" class="pb-0 pt-0">
                    <v-checkbox v-model="checkbox1" :label="`Restaurantes`" color="#FFB74F">
                    </v-checkbox>
                    </v-col>
                    <v-col cols="5" class="pb-0 pt-0">
                    <v-checkbox v-model="checkbox2" :label="`Bares`" color="#FFB74F">
                    </v-checkbox>
                    </v-col>
                    <v-col cols="5" class="pb-0 pt-0">
                    <v-checkbox v-model="checkbox3" :label="`Cafeterias`" color="#FFB74F">
                    </v-checkbox>
                </v-col>
            </v-row>
        <!--Formas de pago-->
            <v-row>
                <v-col>
                    <h2 class="title">Formas de pago</h2>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="7" class="pb-0 pt-0">
                    <v-checkbox v-model="checkbox4" :label="`Pago con tarjeta`" color="#FFB74F">
                    </v-checkbox>
                </v-col>
                <v-col cols="5" class="pb-0 pt-0">
                    <v-checkbox v-model="checkbo5" :label="`Efectivo`" color="#FFB74F">
                    </v-checkbox>
                </v-col>
            </v-row>
        <!--Rango de precio-->
            <v-row>
                <v-col>
                    <h2 class="title">Rango de precio</h2>
                </v-col>
            </v-row>
            <v-row class="mb-10 mt-0">
                <v-col>
                    <v-text-field :rules="rules" class="pt-0 mt-0" label="$0"></v-text-field>
                </v-col>
                <v-col>
                    <v-text-field :rules="rules" class="pt-0 mt-0" label="$0"></v-text-field>
                </v-col>
            </v-row>
        <!--Boton confirmar-->
            <v-row>
                <v-col>
                    <v-btn class="mb-12 mt-0" block color="#FFB74F">Aplicar</v-btn>
                </v-col>
            </v-row>
    </v-container>
</template>
<
<script>
export default {
    data () {
        
      return {
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
        checkbox4: false,
        checkbox5: false,
      }
    },
  name: "Filtros",
  components: {}
};
</script>
