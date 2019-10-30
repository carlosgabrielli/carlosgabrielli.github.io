<template>
  <v-container>
    <atras @click="$router.push('/Home')"/>
    <!--Titulo-->
    <v-row>
      <v-col>
        <h2 class="title">Restaurantes</h2>
      </v-col>
    </v-row>
    <!--Campo de busqueda-->
    <v-row>
      <v-col cols="11" sm="6">
        <v-text-field v-on:click:clear="clearFiltro" v-model="filtro" filled label="Buscar restaurantes..." clearable></v-text-field>
      </v-col>
      <v-icon @click="$router.push('/Filtros')" class="mb-5" >mdi-tune</v-icon>
    </v-row>
    <!--Promociones-->
    <promos-principales v-if="!filtro" />
    <!--Categorias-->
    <h2 class="title" v-if="!filtro">Categorias</h2>
    <v-row v-if="!filtro">
      <v-col>
        <categorias/>
      </v-col>
    </v-row>
    <!--Cartas-->
    <CardLocal></CardLocal>
  </v-container>
</template>

<script>
import Categorias from "@/components/Categorias";
import PromosPrincipales from "@/components/PromosPrincipales";
import CardLocal from "@/components/CardLocal";
import Atras from "@/components/Atras";

export default {
  name: "BaresRestaurantes",
  components: {
    Categorias,
    PromosPrincipales,
    CardLocal,
    Atras
  },
  data() {
    return {
      resultados: [],
      filtro: ''
    };
  },
  watch: {
    filtro (val) {
      this.buscador()
    }
  },
  methods: {
    buscador() {
      console.log(this.filtro)
      this.$store.dispatch('locales/buscador', this.filtro)
    },
    clearFiltro () {
      this.filtro = ''
    }
  }
};
</script>
