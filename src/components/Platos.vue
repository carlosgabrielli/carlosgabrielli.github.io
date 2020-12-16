<template>
  <div v-if="platos">
    <v-row>
      <v-col>
        <v-card v-for="plato in platos" :key="plato.Nombre" class="lista-locales mb-4" outlined>
          <div @click="$router.push('/Producto/' + plato.Id)">

          <v-list-item three-line>
            <v-list-item-avatar tile size="78" color="grey lighten-3 shadow-xs border-radius-10">
              <v-img :src="plato.Foto"></v-img>
            </v-list-item-avatar>
            <v-btn icon class="btn-heart">
              <v-icon size="16">mdi-heart-outline</v-icon>
            </v-btn>
            <v-list-item-content class="mr-4 ml-n2">
              <v-list-item-title
                class="headline mb-1 subtitle-1 font-weight-bold"
              >{{ plato.Nombre }}</v-list-item-title>
              <v-list-item-subtitle
                class="subtitle-2 font-weight-regular"
              >{{ plato.Descripcion }}</v-list-item-subtitle>
              <v-card-subtitle class="pa-0 color-primary f-16 f-semibold">${{ plato.Precio }}</v-card-subtitle>
            </v-list-item-content>
          </v-list-item>
                    </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "platos",
  props: {
    local: String
  },
  mounted() {
    if(this.local) {
      this.$store.dispatch("platos/listarLocal", this.local);
    } else {
      this.$store.dispatch("platos/listar");
    }
    
  },
  computed: {
    platos() {
      return this.$store.getters["platos/platos"];
    }
  }
};
</script>