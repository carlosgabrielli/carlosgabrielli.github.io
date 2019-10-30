<template>
  <div v-if="categorias">
        <v-slide-group class="mx-n3">
          <v-slide-item v-for="categoria in categorias" :key="categoria.Nombre">
            <v-card class="categorias mr-4 mb-4 shadow-md" height="100" width="100">
              <v-img :src="categoria.Foto">
                <v-card-title class="title-categorias pt-1 pl-1">{{ categoria.Nombre }}</v-card-title>
              </v-img>
            </v-card>
          </v-slide-item>
        </v-slide-group>
  </div>
</template>

<script>
export default {
  name: "Categorias",
  mounted() {
    this.$store.dispatch("categorias/listar");
  },
  computed: {
    categorias() {
      return this.$store.getters["categorias/categorias"];
    }
  }
};
</script>