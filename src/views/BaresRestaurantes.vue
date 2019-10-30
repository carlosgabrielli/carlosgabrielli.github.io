<template>
  <v-container>
    <atras />
    <!--Titulo-->
    <v-row>
      <v-col>
        <h2 class="title">Restaurantes</h2>
      </v-col>
    </v-row>
    <!--Campo de busqueda-->
    <v-row>
      <v-col cols="11" sm="6">
        <v-text-field v-model="buscador" filled label="Buscar restaurantes..." clearable></v-text-field>
      </v-col>
      <v-icon class="mb-5">mdi-tune</v-icon>
    </v-row>
    <!--Promociones-->
    <promos-principales />
    <!--Categorias-->
    <h2 class="title">Categorias</h2>
    <v-row>
      <v-col>
        <categorias></categorias>
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
      buscador: null
    };
  },
  watch: {
    buscador(val) {
      let valores = val.split(" ");
      this.resultados = this.locales.filter(function(item) {
        let busqueda = [];
        let respuesta = null;
        for (let res of valores) {
          busqueda.push(
            item.Nombre.indexOf(res) > -1 ||
              item.Direccion.indexOf(res) > -1 ||
              item.Categoria.indexOf(res) > -1
          );
        }

        for (let i = 0; i < busqueda.length; i++) {
          if (i == 0) {
            respuesta = busqueda[i];
          } else {
            respuesta = respuesta && busqueda[i];
          }
        }
        return respuesta;
      });
    }
  }
};
</script>
