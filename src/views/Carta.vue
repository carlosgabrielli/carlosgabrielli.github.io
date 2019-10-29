<template>
  <v-container class="pt-0">
    <!--Encabezado-->
    <v-row class="relative mb-7 mt-n5">
      <v-col class="pa-0">
        <v-card class="p-0 b-0">
          <v-img src="../assets/img/PortadaRestaurante.png" height="280">
            <v-card-actions class="mt-5">
              <v-icon color="#fff">mdi-chevron-left</v-icon>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon color="#fff">mdi-heart-outline</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon color="#fff">mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
            <v-col class="py-0 pt-3">
              <v-list-item-avatar tile size="70" color="grey lighten-3 shadow-xs border-radius-10">
                <v-img class="mr-2" src="../assets/img/LogoJohnny.png"></v-img>
              </v-list-item-avatar>
            </v-col>
            <div class="gradient-carta">
              <v-col class="pt-1">
                <h2 class="title white--text">Johnny B.Good</h2>
                <v-list-item-subtitle class="white--text">24 de septiembre 150</v-list-item-subtitle>
              </v-col>
            </div>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
    <!--Categorias-->
    <v-row>
      <v-col class="pb-0 absolute category-overlay border-radius-tx">
        <h2 class="title mt-2">Categorias</h2>
      </v-col>
      <v-col class="mt-n5">
        <categorias></categorias>
      </v-col>
    </v-row>
    <!--Productos-->
    <v-row>
      <v-col class="pt-1">
        <h2 class="title">Carnes</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pt-0 pb-0">
        <v-card class="mb-4" outlined>
          <v-list-item three-line>
            <v-list-item-content class="mr-4 pt-2 pb-2">
              <v-list-item-title class="headline mb-1 subtitle-1 font-weight-bold">Milanesa vegana</v-list-item-title>
              <v-card-subtitle
                class="caption pa-0"
              >La mejor milanesa de ternera angus o suprema de pollo</v-card-subtitle>
              <v-card-subtitle class="caption pa-0">$200</v-card-subtitle>
            </v-list-item-content>
            <v-list-item-avatar tile size="70" color="grey lighten-3 shadow-xs border-radius-10">
              <v-img class="mr-2" src="../assets/img/LogoJohnny.png"></v-img>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pt-0 pb-0">
        <v-card class="mb-4" outlined>
          <v-list-item three-line>
            <v-list-item-content class="mr-4 pt-2 pb-2">
              <v-list-item-title class="headline mb-1 subtitle-1 font-weight-bold">Milanesa vegana</v-list-item-title>
              <v-card-subtitle
                class="caption pa-0"
              >La mejor milanesa de ternera angus o suprema de pollo</v-card-subtitle>
              <v-card-subtitle class="caption pa-0">$200</v-card-subtitle>
            </v-list-item-content>
            <v-list-item-avatar tile size="70" color="grey lighten-3 shadow-xs border-radius-10">
              <v-img class="mr-2" src="../assets/img/LogoJohnny.png"></v-img>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pt-0 pb-0">
        <v-card class="mb-4" outlined>
          <v-list-item three-line>
            <v-list-item-content class="mr-4 pt-2 pb-2">
              <v-list-item-title class="headline mb-1 subtitle-1 font-weight-bold">Milanesa vegana</v-list-item-title>
              <v-card-subtitle
                class="caption pa-0"
              >La mejor milanesa de ternera angus o suprema de pollo</v-card-subtitle>
              <v-card-subtitle class="caption pa-0">$200</v-card-subtitle>
            </v-list-item-content>
            <v-list-item-avatar tile size="70" color="grey lighten-3 shadow-xs border-radius-10">
              <v-img class="mr-2" src="../assets/img/LogoJohnny.png"></v-img>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Categorias from "@/components/Categorias";

export default {
  name: "Card",
  components: {
    Categorias
  }
};
</script>
