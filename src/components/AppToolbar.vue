<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      left
      color="#2A5D7C"
      dark
    >
    <v-card
    class="mx-auto"
    max-width="434"
    tile
    color="#033655"
  >
      <v-row
        align="end"
        class="fill-height"
        no-gutters
      >
        <v-col
          align-self="middle"
          class="pa-0"
          cols="2"
        >
        <v-avatar>
           <v-icon>mdi-account-circle</v-icon>
        </v-avatar>
        </v-col>
        <v-col class="pa-0" align-self="middle"
           cols="10">
          <v-list-item
            color="#2A5D7C"
          >
            <v-list-item-content>
              <v-list-item-title v-if="user" class="title">{{ user.displayName }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>

  </v-card>
      <v-list dense>
        <v-list-item @click="$router.push('/')">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Inicio</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="$router.push('/pelus')">
          <v-list-item-action>
            <v-icon>mdi-cards-heart</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Favoritos</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-map-marker-radius</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Ver mapa</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Ajustes</v-list-item-title>
          </v-list-item-content>
        </v-list-item>  
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-file-question-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Preguntas Frecuentes</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="logout">
          <v-list-item-action>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Salir</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="#2A5D7C"
      dark
    >
      <div></div>
      <v-toolbar-title></v-toolbar-title>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

   
  
  </div>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
    computed: {
      user () {
        return this.$store.getters['auth/getUser']
      }
    },
    methods: {
    logout () {
      this.$store.dispatch('auth/logout').then(result => {
        this.$router.replace('/login')
        console.log()
    }, error => {
      //cartel
      })
    }
    }
  }
</script>
