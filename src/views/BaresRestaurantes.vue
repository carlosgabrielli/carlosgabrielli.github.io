<template>
  <v-container>
    <atras></atras>
    <!--Titulo-->
    <v-row>
      <v-col>
        <h2 class="title">Restaurantes</h2>
      </v-col>
    </v-row>
    <!--Campo de busqueda-->
    <v-row>
      <v-col cols="11" sm="6">
        <v-text-field
          v-on:click:clear="clearFiltro"
          v-model="filtro"
          filled
          label="Buscar restaurantes..."
          clearable
        ></v-text-field>
      </v-col>
      <v-icon @click.stop="Filtros = true" class="mb-5">mdi-tune</v-icon>
    </v-row>
    <!--Promociones-->
    <promos-principales v-if="!filtro" />
    <!--Categorias-->
    <h2 class="title" v-if="!filtro">Categorias</h2>
    <v-row v-if="!filtro">
      <v-col>
        <categoriastodas></categoriastodas>
      </v-col>
    </v-row>
    <!--Cartas-->
    <CardLocal />
    <!--Modal filtros-->
    <v-dialog v-model="Filtros" hide-overlay transition="dialog-bottom-transition" fullscreen>
      <v-card class="mx-auto box-shadow-none border-0">
        <v-toolbar dark color="primary" class="box-shadow-none">
          <v-btn icon dark @click="dialogList = false" absolute fab small top left class="mt-7 w-0">
            <v-icon @click="Filtros = false">mdi-chevron-left</v-icon>
          </v-btn>
          <v-toolbar-title>Filtros</v-toolbar-title>
        </v-toolbar>
        <v-list flat class="bg-app">
          <v-container>
            <v-row class="mb-3">
              <v-col>
                <h2 class="title">Categorias</h2>
                <v-btn-toggle class="mr-4 mt-4" color="#FFB74F" multiple>
                  <v-btn>Carnes</v-btn>
                </v-btn-toggle>
                <v-btn-toggle class="mr-4 mt-4" color="#FFB74F" multiple>
                  <v-btn>Ensaladas</v-btn>
                </v-btn-toggle>

                <v-btn-toggle class="mr-4 mt-4" color="#FFB74F" multiple>
                  <v-btn>Hamburguesas</v-btn>
                </v-btn-toggle>
                <v-btn-toggle class="mr-4 mt-4" color="#FFB74F" multiple>
                  <v-btn>Empanadas</v-btn>
                </v-btn-toggle>
              </v-col>
            </v-row>
            <!--Filtro Lugar-->
            <v-row class="mb-3">
              <v-col>
                <h2 class="title">Lugar</h2>
                <v-btn-toggle class="mr-4 mt-4" color="#FFB74F" multiple>
                  <v-btn>Restaurantes</v-btn>
                </v-btn-toggle>
                <v-btn-toggle class="mr-4 mt-4" color="#FFB74F" multiple>
                  <v-btn>Bares</v-btn>
                </v-btn-toggle>
                <v-btn-toggle class="mr-4 mt-4" color="#FFB74F" multiple>
                  <v-btn>Cafeterias</v-btn>
                </v-btn-toggle>
              </v-col>
            </v-row>
            <!--Formas de pago-->
            <v-row class="mb-3">
              <v-col>
                <h2 class="title">Formas de pago</h2>
                <v-btn-toggle class="mr-4 mt-4" color="#FFB74F" multiple>
                  <v-btn>Tarjeta de credito</v-btn>
                </v-btn-toggle>
                <v-btn-toggle class="mr-4 mt-4" color="#FFB74F" multiple>
                  <v-btn>Efectivo</v-btn>
                </v-btn-toggle>
              </v-col>
            </v-row>
            <!--Rango de precio-->
            <v-row>
              <v-col>
                <h2 class="title">Rango de precio</h2>
              </v-col>
            </v-row>
            <v-row class="mb-3">
              <v-col class="p-0">
                <v-text-field class="pt-0 mt-0" label="$0 Minimo"></v-text-field>
              </v-col>
              <v-col>
                <v-text-field class="pt-0 mt-0" label="$0 Maximo"></v-text-field>
              </v-col>
            </v-row>
            <!--Boton confirmar-->
            <v-row>
              <div class="mt-12">
                <v-col class="fixed-bottom border-top bg-app">
                  <v-btn block color="#FFB74F">Aplicar</v-btn>
                </v-col>
              </div>
            </v-row>
          </v-container>
        </v-list>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import Categorias from "@/components/Categorias";
import Categoriastodas from "@/components/Categoriastodas";
import PromosPrincipales from "@/components/PromosPrincipales";
import CardLocal from "@/components/CardLocal";
import Atras from "@/components/Atras";

export default {
  name: "BaresRestaurantes",
  components: {
    Categorias,
    Categoriastodas,
    PromosPrincipales,
    CardLocal,
    Atras
  },
  data() {
    return {
      Filtros: false,
      resultados: [],
      filtro: ""
    };
  },
  watch: {
    filtro(val) {
      this.buscador();
    }
  },
  methods: {
    buscador() {
      console.log(this.filtro);
      this.$store.dispatch("locales/buscador", this.filtro);
    },
    clearFiltro() {
      this.filtro = "";
    }
  }
};
</script>
