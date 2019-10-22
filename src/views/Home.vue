<template>
  <v-container>
    <v-row>
      <v-col>
        <v-slide-group class="mt-10">
          <v-slide-item>
            <v-card class="mr-2" @click="toggle">
              <v-img src="../assets/img/restaurantes.jpg">
                <v-card-title class="white--text pt-1 pl-1 f-18">Restaurantes</v-card-title>
              </v-img>
            </v-card>
          </v-slide-item>
          <v-slide-item>
            <v-card class="mx-2" @click="toggle">
              <v-img src="../assets/img/bares.jpg">
                <v-card-title class="white--text pt-1 pl-2 f-18">Bares</v-card-title>
              </v-img>
            </v-card>
          </v-slide-item>
          <v-slide-item>
            <v-card class="mx-2" @click="toggle">
              <v-img src="../assets/img/cafeterias.jpg">
                <v-card-title class="white--text pt-1 pl-2 f-18">Cafeterias</v-card-title>
              </v-img>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-col>
    </v-row>
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
  name: "Home",
  components: {}
};
</script>
