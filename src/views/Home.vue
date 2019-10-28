<template>
  <v-container>
    <v-row>
      <v-col>
        <slider-locales></slider-locales>
      </v-col>
    </v-row>
    <h2 class="title">Promociones</h2>
    <v-row>
      <v-col>
        <promos-principales/>
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
import PromosPrincipales from '@/components/PromosPrincipales'
import SliderLocales from '@/components/SliderLocales'

export default {
  name: "Home",
  components: {
    CardLocal,
    PromosPrincipales,
    SliderLocales
  }
};
</script>
