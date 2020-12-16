<template>
  <div v-if="promos">
    <h2 class="title">Promociones</h2>
    <v-row>
      <v-col class="px-0">
        <v-slide-group>
          <v-slide-item v-for="promo in promos" :key="promo.Nombre">
            <v-card
              class="promos-principales mr-4 mb-4 border-radius-10 shadow-md"
              height
              width="317"
            >
              <v-img :src="promo.Foto"></v-img>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "PromosPrincipales",
  mounted() {
    this.$store.dispatch("promos/listar");
  },
  computed: {
    promos() {
      return this.$store.getters["promos/promos"];
    }
  }
};
</script>