 <template>
  <div v-if="ingredientes && ilocal.length > 1">
    <v-row>
      <v-col cols="12">
        <v-divider class="mt-3"></v-divider>
      </v-col>
      <v-col class="pt-0">
        <v-list-item-title class="headline mb-1 subtitle-1">Personaliza tu pedido</v-list-item-title>
        <v-divider class="mt-3"></v-divider>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        v-for="ingrediente in ingredientes"
        :key="ingrediente.Nombre"
        class="pt-0 pb-0"
      >
        <v-checkbox :label="ingrediente.Nombre" class="mt-1"></v-checkbox>
        <v-divider></v-divider>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Ingredientes",
  props: {
    ilocal: Array
  },
  mounted() {
      this.$store.dispatch("ingredientes/listar");
  },
  computed: {
    ingredientes() {
      return this.$store.getters["ingredientes/ingredientes"];
    }
  }
};
</script>