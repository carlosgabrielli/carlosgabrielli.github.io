<template>
  <v-app>
    <AppToolbar class="z-index-201" v-if="$route.meta.menu"/>
     <v-content>
     <router-view/>
    </v-content>
   <Footer class="z-index-201" />
  </v-app>
</template>

<script>

import AppToolbar from './components/AppToolbar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'app',
  components: {
    AppToolbar,
    Footer
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
</script>
