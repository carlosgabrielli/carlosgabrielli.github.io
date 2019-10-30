<template>
    <v-container>
        <!--Boton atras-->
            <v-row>
                <v-col class="pb-0">
                    <v-icon @click="$router.push('/BaresRestaurantes')">mdi-chevron-left</v-icon>
                </v-col>
            </v-row>
        <!--Categorias-->
            <v-row>
                <v-col>
                    <categorias></categorias>
                </v-col>
            </v-row>
        <!--Filtro Lugar-->
            <v-row>
                <v-col>
                    <h2 class="title">Lugar</h2>
                </v-col>
            </v-row>
            <v-row>
                <v-col  cols="6">
                    <v-btn-toggle
                    outlined
                    color="#FFB74F"
                    multiple
                    >
                    <v-btn                    
                     >Restaurantes</v-btn>
                    </v-btn-toggle>
                </v-col>
                <v-col  cols="5" >
                    <v-btn-toggle
                    outlined
                    color="#FFB74F"
                    multiple>
                        <v-btn>Bares</v-btn>
                    </v-btn-toggle>
                </v-col>
                <v-col  cols="5">
                    <v-btn-toggle
                    outlined
                    color="#FFB74F"
                    multiple>
                        <v-btn>Cafeterias</v-btn>
                    </v-btn-toggle>
                </v-col>
            </v-row>
        <!--Formas de pago-->
            <v-row>
                <v-col>
                    <h2 class="title">Formas de pago</h2>
                </v-col>
            </v-row>
            <v-row>
                <v-col  cols="7">
                    <v-btn-toggle
                    outlined
                    color="#FFB74F"
                    multiple>
                        <v-btn>Tarjeta de credito</v-btn>
                    </v-btn-toggle>
                </v-col>
                <v-col  cols="5">
                    <v-btn-toggle
                    outlined
                    color="#FFB74F"
                    multiple>
                        <v-btn>Efectivo</v-btn>
                    </v-btn-toggle>
                </v-col>
            </v-row>
        <!--Rango de precio-->
            <v-row>
                <v-col>
                    <h2 class="title">Rango de precio</h2>
                </v-col>
            </v-row>
            <v-row class="mb-10 mt-0">
                <v-col class="p-0">
                    <v-text-field :rules="rules" class="pt-0 mt-0" label="$0"></v-text-field>
                </v-col>
                <v-col>
                    <v-text-field :rules="rules" class="pt-0 mt-0" label="$0"></v-text-field>
                </v-col>
            </v-row>
        <!--Boton confirmar-->
            <v-row>
                <v-col>
                    <v-btn block color="#FFB74F">Aplicar</v-btn>
                </v-col>
            </v-row>
            
    </v-container>
</template>
<
<script>
import Categorias from '@/components/Categorias'

export default {
    data () {
      return {
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
        checkbox4: false,
        checkbox5: false,
        toggle_exclusive: [],
      }
    },
  name: "Filtros",
  components: {
      Categorias
  }
};
</script>
