<template>
  <v-container class="mt-2">
    <v-row justify="center" class="mb-3">
      <v-col cols="1">
        <v-icon @click="$router.back()" color="#000" class="ml-n2"
          >mdi-chevron-left</v-icon
        >
      </v-col>
      <v-col md="auto" class="px-0">
        <h3>Escanear</h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p class="f-16">
          Escanea el codigo QR de tu mesa para realizar tu pedido
        </p>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row>
      <v-col>
        <p class="f-16">Acerca la cámara al codigo</p>
      </v-col>
      <v-col cols="2" class="text-right">
        <v-icon>mdi-camera</v-icon>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <img src="../assets/img/escanear.png" class="w-100" @click="$router.push('/metodopago')" />
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