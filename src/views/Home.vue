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
        <card-local/>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>

import CardLocal from '@/components/CardLocal'

export default {
  name: "Home",
  components: {
    CardLocal
  }
};
</script>
