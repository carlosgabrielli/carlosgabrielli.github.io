<template>
  <v-app>
        <v-app-bar absolute class="justify-space-between" color="#FFD800">
            <AppToolbar/>
    </v-app-bar>
    <v-content>
    <Rubros/>
    </v-content>
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
