<template>
  <v-container>
    <!--Slider-->
    <v-row>
      <v-col>
        <slider-locales></slider-locales>
      </v-col>
    </v-row>
    <!--Promociones-->
    <promos-principales />
    <!--Locales-->
    <v-row>
      <v-col>
        <card-local />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardLocal from "@/components/CardLocal";
import PromosPrincipales from "@/components/PromosPrincipales";
import SliderLocales from "@/components/SliderLocales";

export default {
  name: "Home",
  components: {
    CardLocal,
    PromosPrincipales,
    SliderLocales
  }
};
</script>
