<template>
  <div>
    <!-- Card de locales favoritos -->
    <h3>Locales favoritos</h3>
    <v-row>
      <v-col>
        <v-card class="lista-locales mb-4" outlined>
          <v-list-item three-line>
            <v-list-item-avatar
              tile
              size="70"
              color="shadow-xs border-radius-10"
            >
              <v-img src="../assets/img/logo_club_milanesa.png"></v-img>
            </v-list-item-avatar>
            <v-btn icon class="btn-heart">
              <v-icon size="16" color="#FF6555">mdi-heart</v-icon>
            </v-btn>
            <v-list-item-content class="mr-4 ml-n2">
              <v-list-item-title
                class="headline mb-1 subtitle-1 font-weight-bold"
                >El Club de la Milanesa</v-list-item-title
              >
              <v-list-item-subtitle class="subtitle-2 font-weight-regular"
                >Milanesas, ensaladas</v-list-item-subtitle
              >
              <v-card-subtitle class="caption pa-0"
                >Av. Rafael Nuñez 4802 - 8km</v-card-subtitle
              >
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
              <v-img src="../assets/img/logo_polser.png"></v-img>
            </v-list-item-avatar>
            <v-btn icon class="btn-heart">
              <v-icon size="16" color="#FF6555">mdi-heart</v-icon>
            </v-btn>
            <v-list-item-content class="mr-4 ml-n2">
              <v-list-item-title
                class="headline mb-1 subtitle-1 font-weight-bold"
                >Polser hot dogs</v-list-item-title
              >
              <v-list-item-subtitle class="subtitle-2 font-weight-regular"
                >Hamburguesas, Panchos</v-list-item-subtitle
              >
              <v-card-subtitle class="caption pa-0"
                >Fructuoso Rivera 164 - 6km</v-card-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
    <!-- Card de pedidos favoritos -->
    <h3 class="mt-8">Pedidos favoritos</h3>
    <v-row>
      <v-col>
        <v-card class="lista-locales mb-4" outlined>
          <v-list-item three-line>
            <v-list-item-avatar
              tile
              size="70"
              color="shadow-xs border-radius-10"
            >
              <v-img src="../assets/img/milanesa.jpg"></v-img>
            </v-list-item-avatar>
            <v-btn icon class="btn-heart">
              <v-icon size="16" color="#FF6555">mdi-heart</v-icon>
            </v-btn>
            <v-list-item-content class="mr-4 ml-n2">
              <v-list-item-title
                class="headline mb-1 subtitle-1 font-weight-bold"
                >Milanesa de la casa</v-list-item-title
              >
              <v-list-item-subtitle class="subtitle-2 font-weight-regular"
                >Muzzarella, jamón cocido, rodajas de tomate fresco, huevo frito y perejil.</v-list-item-subtitle
              >
              <v-card-subtitle class="pa-0 color-primary f-16 f-semibold">$375</v-card-subtitle>
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
    PedidoFinalizado,
  },
  data() {
    return {
      dialogPedidoFinalizado: false,
    };
  },
};
</script>