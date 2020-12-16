<template>
  <v-container class="mt-2">
    <v-row justify="center" class="mb-3">
      <v-col cols="1">
        <v-icon @click="$router.back()" color="#000" class="ml-n2"
          >mdi-chevron-left</v-icon
        >
      </v-col>
      <v-col md="auto" class="px-0">
        <h3>Método de pago</h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p class="f-16 mb-0">Selecciona un método de pago</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="py-0">
        <v-radio-group>
          <v-radio
            label="Tarjeta de crédito o débito"
            value="tarjeta"
          ></v-radio>
          <span class="f-12 mb-6 pl-8 color-grey">Pago instantaneo</span>
          <v-radio label="Efectivo" value="efectivo"></v-radio>
          <span class="f-12 pl-8 color-grey">Pagas al recibir la cuenta</span>
        </v-radio-group>
      </v-col>
    </v-row>
    <!--Boton confirmar-->
    <div class="mt-12">
      <v-col class="fixed-bottom-button border-top bg-app">
        <v-btn block color="#FFB74F" @click="$router.push('/efectivo')">Continuar</v-btn>
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