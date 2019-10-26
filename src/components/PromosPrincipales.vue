<template>
  <div v-if="promos">
    <v-slide-group multiple>
      <v-slide-item v-for="promo in promos" :key="promo.Nombre">
        <v-card class="promos-principales mr-4 mb-4 border-radius-10" height width="317" @click="toggle">
          <v-img :src="promo.Foto"></v-img>
        </v-card>
      </v-slide-item>
    </v-slide-group>
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