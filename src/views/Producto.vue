<template>
  <v-container v-if="plato" class="pt-0">
    <!--Encabezado-->
    <v-row class="relative mb-7 mt-n6">
      <v-col class="pa-0">
        <v-card class="p-0 b-0">
          <v-img :src="plato.Foto" height="280">
            <div class="gradient-producto">
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
            </div>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
    <!--Descripcion-->
    <v-row>
      <v-col class="pb-0 absolute category-overlay border-radius-tx">
        <v-list-item-content class="pt-0 pb-0">
          <h2 class="title mt-5">{{ plato.Nombre }}</h2>
          <v-list-item-subtitle class="subtitle-2 font-weight-regular">{{ plato.Descripcion }}</v-list-item-subtitle>
          <v-list-item-title class="mb-1 subtitle-1">{{ plato.Precio }}</v-list-item-title>
        </v-list-item-content>
      </v-col>
    </v-row>
    <!--Unidades-->
    <v-row class="mt-12">
      <v-col>
        <v-list-item-title class="headline mb-1 subtitle-1">Unidades</v-list-item-title>
        <v-divider class="mt-3"></v-divider>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-center pb-1">
        <vue-numeric-input
          class="numeric-input"
          align="center"
          v-model="value"
          :min="1"
          :max="20"
          :step="1"
        ></vue-numeric-input>
      </v-col>
    </v-row>
    <!--Personalizar-->
    <ingredientes :ilocal="plato.Ingredientes"></ingredientes>
    <v-row>
      <v-col>
        <v-list-item-title class="headline mb-1 subtitle-1">Aclaraciones</v-list-item-title>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" class="py-0">
        <v-textarea filled auto-grow label="Notas al producto..." rows="2" row-height="20"></v-textarea>
      </v-col>
    </v-row>
    <!--Boton continuar-->
    <v-row>
      <v-col class="pt-0">
        <v-btn @click="$router.push('/CarritoEditar')" block color="#FFB74F">Continuar</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VueNumericInput from "vue-numeric-input";
import Ingredientes from "@/components/Ingredientes";
export default {
  data() {
    return {
      value: 1
    };
  },
  name: "Producto",
  components: {
    VueNumericInput,
    Ingredientes
  },
  mounted() {
    this.$store.dispatch("platos/ver", this.$route.params.id);
  },
  computed: {
    plato() {
      return this.$store.getters["platos/plato"];
    },
        local () {
      return this.$store.getters['locales/local']
    }
  }
};
</script>
