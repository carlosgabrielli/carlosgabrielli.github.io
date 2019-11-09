<template>
  <v-container v-if="local" class="pt-0">
    <!--Encabezado-->
    <v-row class="relative mb-7 mt-n5">
      <v-col class="pa-0">
        <v-card class="p-0 b-0">
          <v-img :src="local.Portada" height="280">
            <div class="gradient-carta">
            <v-card-actions class="mt-5">
              <v-icon @click="$router.push('/baresRestaurantes')" color="#fff">mdi-chevron-left</v-icon>
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
                <v-img class="mr-2" :src="local.Logo"></v-img>
              </v-list-item-avatar>
            </v-col>
            <div>
              <v-col class="pt-1">
                <h2 class="title white--text">{{ local.Nombre }}</h2>
                <v-list-item-subtitle class="white--text">{{ local.Direccion }}</v-list-item-subtitle>
              </v-col>
            </div>
            </div>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
    <!--Categorias-->
    <v-row>
      <v-col class="pb-0 absolute category-overlay border-radius-tx">
        <h2 class="title mt-5">Categorias</h2>
      </v-col>
      <v-col class="mt-n5">
        <categorias :clocal="local.Categorias"></categorias>
      </v-col>
    </v-row>
    <!--Productos-->
    <v-row>
      <v-col class="pt-1">
        <h2 class="title">Menú</h2>
      </v-col>
    </v-row>
    <platos :local="$route.params.id"></platos>
  </v-container>
</template>

<script>
import Categorias from "@/components/Categorias";
import Platos from "@/components/Platos";

export default {
  name: "Carta",
  components: {
    Categorias,
    Platos
  },
  mounted () {
    this.$store.dispatch('locales/ver', this.$route.params.id)
  },
  computed: {
    local () {
      return this.$store.getters['locales/local']
    }
  }
};
</script>