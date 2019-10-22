<template>
<<<<<<< HEAD
  <v-app>
    <AppToolbar v-if="$route.meta.menu"/>
     <v-content>
     <router-view/>
    </v-content>

   
  </v-app>
</template>

<script>

import AppToolbar from './components/AppToolbar.vue';


export default {
  name: 'app',
  components: {
    AppToolbar
  },
  data() {
    return {
      showNav: false,
      items: [
        {
          icon: 'home',
          title: 'Inicio',
          href: '/'
        },
        {
          icon: 'logout',
          title: 'Salir',
          href: 'contacto'
        }
      ]
    }
  },
  computed: {
    login () {
      return this.$store.getters['auth/getLogin']
    }
  },
  methods: {
    ir (href) {
      this.$router.replace(href)
    },
    logoutGoogle () {
      this.$store.dispatch('auth/logout').then(result => {
        this.$router.replace('/')
      })
    }
  }
}
=======

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
>>>>>>> 8144f179c22b4746a773804167526bfd0d713082
</script>
