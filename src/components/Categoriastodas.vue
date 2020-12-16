<template>
  <div v-if="categoriastodas">
        <v-slide-group>
          <v-slide-item v-for="categoriastoda in categoriastodas" :key="categoriastoda.Nombre">
            <v-card class="categorias mr-4 mb-4 shadow-md" height="100" width="100">
              <v-img :src="categoriastoda.Foto">
                <v-card-title class="title-categorias pt-1 pl-1">{{ categoriastoda.Nombre }}</v-card-title>
              </v-img>
            </v-card>
          </v-slide-item>
        </v-slide-group>
  </div>
</template>

<script>
export default {
  name: "Categoriastodas",
  mounted() {
    this.$store.dispatch("categoriastodas/listar");
  },
  computed: {
    categoriastodas() {
      return this.$store.getters["categoriastodas/categoriastodas"];
    }
  }
};
</script>