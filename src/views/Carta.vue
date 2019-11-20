<template>
  <v-container v-if="local" class="pt-0">
    <!--Encabezado-->
    <v-row class="relative mb-7 mt-n6">
      <v-col class="pa-0">
        <v-card class="p-0 b-0" :class="{classA: scrollPosition < 100, classB: scrollPosition > 100}">
          <v-img :src="local.Portada" height="280">
            <div class="gradient-carta" v-scr>
            <v-card-actions class="mt-5 hola">
              <v-icon @click="$router.back()" color="#fff">mdi-chevron-left</v-icon>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon color="#fff">mdi-heart-outline</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon color="#fff">mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
            <v-col class="py-0 pt-3 hola">
              <v-list-item-avatar tile size="70" color="shadow-xs border-radius-10">
                <v-img class="mr-2" :src="local.Logo"></v-img>
              </v-list-item-avatar>
            </v-col>
            <div class="nombre">
              <v-col class="pt-1">
                <h2 class="title white--text">{{ local.Nombre }}</h2>
                <v-list-item-subtitle class="white--text">{{ local.Direccion }}</v-list-item-subtitle>
              </v-col>
            </div>
            </div>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
    <!--Categorias-->
    <v-row :class="{hola1: scrollPosition < 100, hola2: scrollPosition > 100}">
      <v-col class="pb-0 absolute category-overlay border-radius-tx" >
        <h2 class="title mt-5">Categorias</h2>
      </v-col>
      <v-col class="mt-n5">
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
                  <v-dialog
        v-model="dialog"
        max-width="290"
      >
        <v-card>
          <v-card-title class="headline">Use Google's location service?</v-card-title>
  
          <v-card-text>
            Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
          </v-card-text>
  
          <v-card-actions>
            <v-spacer></v-spacer>
  
            <v-btn
              color="green darken-1"
              text
              @click="dialog = false"
            >
              Disagree
            </v-btn>
  
            <v-btn
              color="green darken-1"
              text
              @click="dialog = false"
            >
              Agree
            </v-btn>
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
  data () {
    return {
      dialog: false,
       scrollPosition: null
    }
  },
  mounted () {
    this.$store.dispatch('locales/ver', this.$route.params.id)
    this.$store.dispatch('pedidos/localActual', this.$route.params.id)
    setTimeout(this.verificar, 1000)
    window.addEventListener('scroll', this.updateScroll);
  },
  computed: {
    local () {
      return this.$store.getters['locales/local']
    },
    pedido () {
      return this.$store.getters['pedidos/pedido']
    },
    pedidos () {
      return this.$store.getters['pedidos/pedido'].items
    }
  },
  methods: {
    verificar () {
      if (this.pedido.local) {
        this.dialog = !(this.pedido.local === this.$route.params.id)
      } else {
        this.dialog = false
      }
      
    },
   updateScroll() {
      this.scrollPosition = window.scrollY
    }
  }
};
</script>

<style scoped>
.classA {
  transition: all ease .5s;
  
}
.classB {
  transition: all ease .5s;
  position:fixed;
    z-index: 100;
    border-radius: 0 0 50px 50px;
    height: 100px;
    overflow: hidden;
}
.classB .hola{
  display: none
}
.classB .hola{
  display: none
}
.classB .nombre{
  margin-top:40px
}
.hola2{
  margin-top:240px
}
</style>