<template>
  <v-container>
    <v-dialog v-model="dialogEdit" transition="fade-transition" persistent fullscreen>
      <v-card class="bg-app">
        <v-container style="margin-top: 56px">
          <v-row justify="center" class="mb-3">
            <v-col cols="1">
              <v-icon
                @click="$router.back()"
                color="#000"
                class="ml-n2"
              >mdi-chevron-left</v-icon>
            </v-col>
            <v-col md="auto" class="px-0">
              <h3>Mi pedido</h3>
            </v-col>
            <v-col cols="4">
              <p @click.stop="dialogEdit = false" class="float-right">Cancelar</p>
            </v-col>
          </v-row>
          <div v-for="(pedido, index) in pedidos" :key="pedido.Nombre" class="border-bottom">
            <v-row>
              <v-col md="auto">
                <h4>{{ pedido.Nombre }}</h4>
                <p>
                  
                </p>
              </v-col>
              <v-col cols="1">
                <v-btn icon>
                  <v-icon color="rgba(0, 0, 0, 0.70)">mdi-pencil-outline</v-icon>
                </v-btn>
              </v-col>
              <v-col cols="1">
                <v-btn @click="eliminarPedido(index)" icon>
                  <v-icon color="rgba(0, 0, 0, 0.70)">mdi-close-circle-outline</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </div>
          <v-row>
            <v-col>
              <p>Subtotal</p>
            </v-col>
            <v-col>
              <p class="float-right">${{total}}</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="fixed-bottom border-top bg-app" style="margin-bottom:70px">
              <v-btn block color="#FFB74F">Aplicar</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
    <v-row justify="center" class="mb-3">
      <v-col cols="1">
        <v-icon
          @click="$router.back()"
          color="#000"
          class="ml-n2"
        >mdi-chevron-left</v-icon>
      </v-col>
      <v-col md="auto" class="px-0">
        <h3 v-if="pedidos.length === 1">Mi pedido</h3>
        <h3 v-if="pedidos.length > 1">Mis pedidos</h3>
      </v-col>
      <v-col cols="4">
        <p @click.stop="dialogEdit = true" class="float-right">Editar</p>
      </v-col>
    </v-row>
    <div v-for="pedido in pedidos" :key="pedido.Nombre" class="border-bottom">
      <v-row>
        <v-col cols="2" class="mr-n3">
          <p>x{{ pedido.cantidad }}</p>
        </v-col>
        <v-col md="auto" class="px-0">
          <h4>{{ pedido.Nombre }}</h4>
          <p v-for="ingrediente in pedido.Ingredientes" v-if="ingrediente.agregado" :key="ingrediente.Nombre">
            {{ ingrediente.Nombre }}
          </p>
        </v-col>
        <v-col cols="2">
          <p class="float-right">${{pedido.total}}</p>
        </v-col>
      </v-row>
    </div>
    <v-row>
      <v-col>
        <p>Subtotal</p>
      </v-col>
      <v-col>
        <p class="float-right">${{total}}</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="fixed-bottom border-top bg-app" style="margin-bottom:70px">
        <v-btn block color="#FFB74F">Aplicar</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Atras from "@/components/Atras";

export default {
  data: () => ({
    dialogEdit: false
  }),
  components: {
    Atras
  },
  watch: {
    pedidos (val) {
      if (val.length == 0) {
        this.$router.back()
      }
    }
  },
  computed: {
    pedidos () {
      return this.$store.getters['pedidos/pedido'].items
    },
    total () {
      let total = 0
      for (let pedido of this.pedidos) {
        total += pedido.total
      }

      return total
    }
  },
  methods: {
    eliminarPedido (i) {
      this.$store.dispatch('pedidos/eliminar', i)
    }
  }
};
</script>