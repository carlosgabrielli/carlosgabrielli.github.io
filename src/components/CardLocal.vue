<template>
  <div v-if="locales">
    <v-row>
      <v-col>
        <v-card @click="$router.push('/Carta/'+ local.Id)" v-for="local in locales" :key="local.Nombre" class="lista-locales mb-4" outlined>
          <v-list-item three-line>
            <v-list-item-avatar tile size="70" color="grey lighten-3 shadow-xs border-radius-10">
              <v-img class="mr-2" :src="local.Logo"></v-img>
            </v-list-item-avatar>
            <v-btn icon class="btn-heart">
              <v-icon size="16">mdi-heart-outline</v-icon>
            </v-btn>
            <v-list-item-content class="mr-4 ml-n2">
              <v-list-item-title
                class="headline mb-1 subtitle-1 font-weight-bold"
              >{{ local.Nombre }}</v-list-item-title>
              <v-list-item-subtitle
                class="subtitle-2 font-weight-regular"
              >{{ local.Categorias.join(', ') }}</v-list-item-subtitle>
              <v-card-subtitle class="caption pa-0">{{ local.Direccion }}</v-card-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "CardLocal",
  mounted() {
    this.$store.dispatch("locales/listar");
  },
  computed: {
    locales() {
      return this.$store.getters["locales/filtrado"];
    }
  }
};
</script>