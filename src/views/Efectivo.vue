<template>
  <v-container class="mt-2">
    <v-row justify="center" class="mb-3">
      <v-col cols="1">
        <v-icon @click="$router.back()" color="#000" class="ml-n2"
          >mdi-chevron-left</v-icon
        >
      </v-col>
      <v-col md="auto" class="px-0">
        <h3>Efectivo</h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p class="f-16">Ingresa el monto a pagar</p>
        <p class="f-12 color-grey">
          Recordá que el valor del pedido es de $240
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="py-0">
        <v-text-field
          label="Monto"
          prepend-inner-icon="mdi-currency-usd"
          outlined
        ></v-text-field>
      </v-col>
    </v-row>
    <!--Boton confirmar-->
    <div class="mt-12">
      <v-col class="fixed-bottom-button border-top bg-app">
        <v-btn block color="#FFB74F" @click="$router.push('/exito')"
          >Continuar</v-btn
        >
      </v-col>
    </div>
  </v-container>
</template>

<script>
import Atras from "@/components/Atras";

export default {
  components: {
    Atras,
  },
};
</script>