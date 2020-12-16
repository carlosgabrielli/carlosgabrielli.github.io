<template>
  <v-container>
    <!-- Dialog pedido finalizado -->
    <v-dialog
      v-model="dialogPedidoFinalizado"
      hide-overlay
      transition="dialog-bottom-transition"
      fullscreen
    >
      <v-card class="mx-auto box-shadow-none border-0 bg-app">
        <v-toolbar dark color="primary" class="box-shadow-none">
          <v-btn
            icon
            dark
            @click="dialogPedidoFinalizado = false"
            absolute
            fab
            small
            top
            left
            class="mt-6 w-0"
          >
            <v-icon class="mt-2">mdi-chevron-left</v-icon>
          </v-btn>
          <h2 class="title ml-7">Resumen de pedido</h2>
        </v-toolbar>
        <v-container>
          <PedidoFinalizado />
        </v-container>
      </v-card>
    </v-dialog>
    <v-row>
      <v-col class="py-0">
        <img src="../assets/img/exito.png" class="w-100" />
      </v-col>
    </v-row>
    <v-row>
      <v-col class="py-0">
        <h3 class="text-center">Tu pedido ha sido enviado</h3>
      </v-col>
    </v-row>
    <!--Boton confirmar-->
    <div class="mt-12">
      <v-col class="fixed-bottom-button border-top bg-app">
        <v-btn
          block
          color="#FFB74F"
          class="mb-5"
          @click.stop="dialogPedidoFinalizado = true"
          >Ver pedido</v-btn
        >
        <v-btn outlined block color="#FFB74F" @click="$router.push('/home')"
          >Volver al inicio</v-btn
        >
      </v-col>
    </div>
  </v-container>
</template>

<script>
import PedidoFinalizado from "@/components/PedidoFinalizado";

export default {
  components: {
    PedidoFinalizado,
  },
  data() {
    return {
      dialogPedidoFinalizado: false,
    };
  },
};
</script>