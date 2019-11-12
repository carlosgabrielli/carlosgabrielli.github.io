<template>
  <v-container v-if="plato" class="pt-0">
    <!--Encabezado-->
    <v-row class="relative mb-7 mt-n5">
      <v-col class="pa-0">
        <v-card class="p-0 b-0">
          <v-img src="../assets/img/image.png" height="280">
          <div class="gradient-producto"></div>
            <v-card-actions class="mt-neg-64">
              <v-icon @click="$router.push('/baresRestaurantes')" color="#fff">mdi-chevron-left</v-icon>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon color="#fff">mdi-heart-outline</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon color="#fff">mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
    <!--Descripcion-->
    <v-row>
      <v-col class="pb-0 absolute category-overlay border-radius-tx">
        <v-list-item-content class="pt-0 pb-0">
          <h2 class="title mt-5">{{ plato.Nombre }}</h2>
          <v-list-item-subtitle
            class="subtitle-2 font-weight-regular"
          >{{ plato.Descripcion }}</v-list-item-subtitle>
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
          placeholder="1"
          precision="1"
          align="center"
          :min="1"
          :max="20"
        ></vue-numeric-input>
      </v-col>
    </v-row>
    <!--Personalizar-->
    <v-row>
      <v-col cols="12">
        <v-divider class="mt-3"></v-divider>
      </v-col>
      <v-col class="pt-0">
        <v-list-item-title class="headline mb-1 subtitle-1">Personalizar tu pedido</v-list-item-title>
        <v-divider class="mt-3"></v-divider>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pt-0 pb-0">
        <v-checkbox :label="`Salsa de tomate`" class="mt-1"></v-checkbox>
        <v-divider></v-divider>
        <v-checkbox :label="`Queso`" class="mt-4"></v-checkbox>
        <v-divider></v-divider>
        <v-checkbox :label="`Extra cheddar`" class="mt-4"></v-checkbox>
        <v-divider></v-divider>
      </v-col>
    </v-row>
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
        <v-btn block color="#FFB74F">Continuar</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VueNumericInput from "vue-numeric-input";
export default {
  name: "Producto",
  components: {
    VueNumericInput
  },
  mounted () {
    this.$store.dispatch('platos/ver', this.$route.params.id)
  },
  computed: {
    plato () {
      return this.$store.getters['platos/plato']
    }
  }
};
</script>
