<template>
  <v-app>
    <AppToolbar/>
    <Rubros/>
    <Footer/>
  </v-app>
</template>

<script>
import AppToolbar from "./components/AppToolbar"
import Rubros from "./components/Rubros"
import Footer from "./components/Footer"

export default {
  name: 'App',
  components: {
    AppToolbar,
    Rubros,
    Footer,
  }
};
</script>
