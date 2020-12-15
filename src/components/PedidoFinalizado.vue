<template>
  <div>
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
        <v-timeline align-top dense>
          <v-timeline-item icon="mdi-clock-start" color="#29CC97" fill-dot>
            <v-row class="pt-1">
              <v-col cols="3">
                <strong class="f-13">21:00hs</strong>
              </v-col>
              <v-col>
                <strong>Pedido realizado</strong>
                <div class="caption">El local recibe tu pedido</div>
              </v-col>
            </v-row>
          </v-timeline-item>

          <v-timeline-item icon="mdi-microwave" color="#29CC97" fill-dot>
            <v-row class="pt-1">
              <v-col cols="3">
                <strong class="f-13">21:05hs</strong>
              </v-col>
              <v-col>
                <strong>Pedido en preparación</strong>
                <div class="caption mb-2">
                  El local comienza a preparar tu pedido
                </div>
              </v-col>
            </v-row>
          </v-timeline-item>

          <v-timeline-item
            icon="mdi-silverware-fork-knife"
            color="#C9C9C9"
            fill-dot
          >
            <v-row class="pt-1">
              <v-col cols="3">
                <strong class="color-disabled f-13">21:35hs</strong>
              </v-col>
              <v-col>
                <strong class="color-disabled">Pedido entregado</strong>
                <div class="caption color-disabled mb-2">¡Listo!</div>
              </v-col>
            </v-row>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row>
      <v-col class="d-flex my-1">
        <v-icon class="mr-1" color="#000000de">mdi-cash-multiple</v-icon>
        <h4 class="mr-1">Método de pago:</h4>
        <p class="mb-0">Efectivo</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex my-1">
        <v-icon class="mr-1" color="#000000de">mdi-clock-outline</v-icon>
        <h4 class="mr-1">Demora:</h4>
        <p class="mb-0">25 minutos apróximadamente</p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "PedidoFinalizado",
};
</script>