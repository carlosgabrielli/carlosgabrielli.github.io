<template>
  <div>
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
    <!-- Card de resumenes de pedidos -->
    <v-row>
      <v-col>
        <v-card
          @click.stop="dialogPedidoFinalizado = true"
          class="lista-locales mb-4"
          outlined
        >
          <v-list-item three-line>
            <v-list-item-avatar
              tile
              size="70"
              color="shadow-xs border-radius-10"
            >
              <v-img
                class="mr-2"
                src="../assets/img/logo_club_milanesa.png"
              ></v-img>
            </v-list-item-avatar>
            <v-btn icon class="pos-left-card">
              <h3>$375</h3>
            </v-btn>
            <v-list-item-content class="mr-4 ml-n2">
              <v-list-item-title
                class="headline mb-1 subtitle-1 font-weight-bold"
                >El Club de la Milanesa</v-list-item-title
              >
              <v-list-item-subtitle class="subtitle-2 font-weight-regular"
                >Milanesa de la casa</v-list-item-subtitle
              >
              <v-card-subtitle class="caption pa-0"
                >25 de noviembre a las 22:13hs</v-card-subtitle
              >
              <v-card-actions class="pl-0">
                <v-chip color="#FF8F43" class="color-white"
                  >En preparación</v-chip
                >
              </v-card-actions>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card class="lista-locales mb-4" outlined>
          <v-list-item three-line>
            <v-list-item-avatar
              tile
              size="70"
              color="shadow-xs border-radius-10"
            >
              <v-img
                class="mr-2"
                src="../assets/img/logo_club_milanesa.png"
              ></v-img>
            </v-list-item-avatar>
            <v-btn icon class="pos-left-card">
              <h3>$405</h3>
            </v-btn>
            <v-list-item-content class="mr-4 ml-n2">
              <v-list-item-title
                class="headline mb-1 subtitle-1 font-weight-bold"
                >El Club de la Milanesa</v-list-item-title
              >
              <v-list-item-subtitle class="subtitle-2 font-weight-regular"
                >La revoltosa</v-list-item-subtitle
              >
              <v-card-subtitle class="caption pa-0"
                >17 de noviembre a las 21:00hs</v-card-subtitle
              >
              <v-card-actions class="pl-0">
                <v-chip color="#29CC97" class="color-white">Entregado</v-chip>
              </v-card-actions>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PedidoFinalizado from "@/components/PedidoFinalizado";

export default {
  name: "CardPedidos",
    components: {
    PedidoFinalizado
  },
  data() {
    return {
      dialogPedidoFinalizado: false,
    };
  },
};
</script>