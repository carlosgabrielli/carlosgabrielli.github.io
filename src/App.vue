<template>

  <v-app>
        <v-app-bar app class="justify-space-between" color="#FFD800">
            <AppToolbar/>
            
    </v-app-bar>
    <v-content>
    <router-view/>
    </v-content>
    <Footer/>
  </v-app>
  
</template>

<script>
import AppToolbar from "./components/AppToolbar"
import Footer from "./components/Footer"

export default {
  name: 'App',
  components: {
    AppToolbar,
    Footer,
  }
};
</script>
