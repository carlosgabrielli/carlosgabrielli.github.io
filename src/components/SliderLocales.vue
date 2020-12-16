<template>
  <div v-if="sliderlocales">
    <v-slide-group>
      <v-slide-item v-for="sliderlocal in sliderlocales" :key="sliderlocal.Tipo">
        <v-card @click="$router.push('/BaresRestaurantes')" class="slider-locales mr-4 mb-4 shadow-md">
          <v-img :src="sliderlocal.Foto">
            <v-card-title class="white--text pt-1 pl-1 f-17">{{ sliderlocal.Tipo }}</v-card-title>
          </v-img>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </div>
</template>

<script>
export default {
  name: "SliderLocales",
  mounted() {
    this.$store.dispatch("sliderlocales/listar");
  },
  computed: {
    sliderlocales() {
      return this.$store.getters["sliderlocales/sliderlocales"];
    }
  }
};
</script>