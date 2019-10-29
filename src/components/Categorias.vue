<template>
  <div v-if="categorias">
    <v-row>
      <v-col>
        <v-slide-group>
          <v-slide-item v-for="categoria in categorias" :key="categoria.Nombre">
            <v-card class="mr-2 mb-4 shadow-md" height="100" width="100">
              <v-img :src="categoria.Foto">
                <v-card-title class="title-categorias">{{ categoria.Nombre }}</v-card-title>
              </v-img>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-col>
    </v-row>
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