<template>
  <v-container v-if="local" class="pt-0">
    <div
      class="sub-header-local shado-md"
      :class="{ 'sub-header-local--hidden': !showHeaderLocal }"
    >
      <v-card-actions class="mt-6 ml-2">
        <v-icon @click="$router.back()" color="#000">mdi-chevron-left</v-icon>
        <h2 class="title ml-1">{{ local.Nombre }}</h2>
      </v-card-actions>
    </div>
    <!--Encabezado-->
    <v-row class="relative mb-7 mt-n6">
      <v-col class="pa-0">
        <v-card class="p-0 b-0">
          <v-img :src="local.Portada" height="280">
            <div class="gradient-carta">
              <v-card-actions class="mt-5">
                <v-icon @click="$router.back()" color="#fff">mdi-chevron-left</v-icon>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon color="#fff">mdi-heart-outline</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon color="#fff">mdi-share-variant</v-icon>
                </v-btn>
              </v-card-actions>
              <v-col class="py-0 pt-3">
                <v-list-item-avatar tile size="70" color="shadow-xs border-radius-10">
                  <v-img :src="local.Logo"></v-img>
                </v-list-item-avatar>
              </v-col>
              <div class="px-5">
                <v-row>
                  <v-col cols="1" class="pt-2 d-none">
                    <v-icon @click="$router.back()" color="#000" class="ml-n2">mdi-chevron-left</v-icon>
                  </v-col>
                  <v-col class="pt-1">
                    <h2 class="title white--text">{{ local.Nombre }}</h2>
                    <v-list-item-subtitle class="white--text">{{ local.Direccion }}</v-list-item-subtitle>
                  </v-col>
                </v-row>
              </div>
            </div>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
    <!--Categorias-->
    <v-row :class="{hola1: scrollPosition < 100, hola2: scrollPosition > 100}">
      <v-col class="pb-0 absolute category-overlay border-radius-tx">
        <h2 class="title mt-5">Categorías</h2>
      </v-col>
      <v-col class="mt-n5 px-0">
        <categorias :clocal="local.Categorias"></categorias>
      </v-col>
    </v-row>
    <!--Productos-->
    <v-row>
      <v-col class="pt-1">
        <h2 class="title">Menú</h2>
      </v-col>
    </v-row>
    <platos :local="$route.params.id"></platos>
    <v-btn
      v-if="pedidos.length > 0"
      fixed
      fab
      bottom
      right
      color="#ffb74b"
      class="mb-12"
      @click="$router.push('/CarritoEditar')"
    >
      <v-icon>mdi-cart-outline</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline">Ya tienes un pedido <br> en otro local</v-card-title>
        <v-card-text>No es posible hacer un pedido en dos lugares al mismo tiempo.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="darken-1" text @click="dialog = false">Ver carta</v-btn>
          <v-btn color="primary darken-1" text @click="$router.back()">Volver</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import Categorias from "@/components/Categorias";
import Platos from "@/components/Platos";

export default {
  name: "Carta",
  components: {
    Categorias,
    Platos
  },
  data() {
    return {
      dialog: false,
      showHeaderLocal: true,
      lastScrollPosition: 0,
      scrollPosition: 0
    };
  },
  mounted() {
    this.$store.dispatch("locales/ver", this.$route.params.id);
    this.$store.dispatch("pedidos/localActual", this.$route.params.id);
    setTimeout(this.verificar, 1000);
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  computed: {
    local() {
      return this.$store.getters["locales/local"];
    },
    pedido() {
      return this.$store.getters["pedidos/pedido"];
    },
    pedidos() {
      return this.$store.getters["pedidos/pedido"].items;
    }
  },
  methods: {
    verificar() {
      if (this.pedido.local) {
        this.dialog = !(this.pedido.local === this.$route.params.id);
      } else {
        this.dialog = false;
      }
    },
    onScroll() {
       // Obtiene la posición de desplazamiento actual 
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition < 0) {
        return;
      }
      // Deja de ejecutar esta función si la diferencia entre
      // la posición de desplazamiento actual y la última posición de desplazamiento es menor que algún desplazamiento
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 260) {
        return;
      }
      this.showHeaderLocal = currentScrollPosition < this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
    }
  }
};
</script>