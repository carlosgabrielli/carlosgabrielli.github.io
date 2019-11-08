<template>
  <div v-if="categorias && clocal.length > 0">
        <v-slide-group class="mx-n3">
          <v-slide-item v-for="categoria in filtrado()" :key="categoria.Nombre">
            <v-card class="categorias mr-4 mb-4 shadow-md" height="100" width="100">
              <v-img :src="categoria.Foto">
                <v-card-title class="title-categorias pt-1 pl-1">{{ categoria.Nombre }}</v-card-title>
              </v-img>
            </v-card>
          </v-slide-item>
        </v-slide-group>
  </div>
</template>

<script>
export default {
  name: "Categorias",
  props: {
    clocal: Array
  },
  mounted() {
    this.$store.dispatch("categorias/listar");
  },
  computed: {
    categorias() {
      return this.$store.getters["categorias/categorias"];
    }    
  },
  methods:{
    filtrado () {
      let clocal = this.clocal
      return this.categorias.filter(function(item) {
          let busqueda = [];
          let respuesta = null;
          for (let res of clocal) {
            busqueda.push(
              item.Nombre.toLowerCase().indexOf(res.toLowerCase()) > -1);
          }
          for (let i = 0; i < busqueda.length; i++) {
            if (i == 0) {
              respuesta = busqueda[i];
            } else {
              respuesta = respuesta || busqueda[i];
            }
          }
          return respuesta
        })
    }    
  }
};
</script>