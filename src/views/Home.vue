<template>
  <div>
    <!-- Dialog promociones -->
    <v-dialog
      v-model="dialogPromociones"
      hide-overlay
      transition="dialog-bottom-transition"
      fullscreen
    >
      <v-card class="mx-auto box-shadow-none border-0 bg-app">
        <v-toolbar dark color="primary" class="box-shadow-none">
          <v-btn
            icon
            dark
            @click="dialogPromociones = false"
            absolute
            fab
            small
            top
            left
            class="mt-6 w-0"
          >
            <v-icon class="mt-2">mdi-chevron-left</v-icon>
          </v-btn>
          <h2 class="title ml-7">Todas las promociones</h2>
        </v-toolbar>
        <v-container>
          <Promociones />
        </v-container>
      </v-card>
    </v-dialog>
    <v-container>
      <!--Slider-->
      <v-row>
        <v-col class="px-0">
          <slider-locales></slider-locales>
        </v-col>
      </v-row>
      <!--Promociones-->
      <promos-principales />
      <div class="mb-4 mt-n1">
        <a @click.stop="dialogPromociones = true" class="f-bold">Ver otras promociones</a>
      </div>
      <!--Locales-->
      <v-row>
        <v-col>
          <card-local />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CardLocal from "@/components/CardLocal";
import PromosPrincipales from "@/components/PromosPrincipales";
import SliderLocales from "@/components/SliderLocales";
import Promociones from "@/components/Promociones";

export default {
  name: "Home",
  components: {
    CardLocal,
    PromosPrincipales,
    SliderLocales,
    Promociones
  },
    data() {
    return {
      dialogPromociones: false,
    };
  },
};
</script>
