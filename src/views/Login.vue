<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        fluid
        fill-height
        class="fondo"
      >
        <v-layout
          align-center
          justify-center
        >
          <v-flex
            xs12
            sm8
            md4
          >
          <v-img class="mx-auto mb-10" width="150px" height="150px" src="../assets/icon-definitivo.png" aspect-ratio="1"></v-img>
            <v-card class="elevation-2">
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Usuario"
                    name="login"
                    prepend-icon=""
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    color="#2B5E7C"
                    id="password"
                    label="Contraseña"
                    name="password"
                    prepend-icon=""
                    type="password"
                  ></v-text-field>
                </v-form>
                 <v-btn block dark color="#2F617E" class="mb-2">Entrar</v-btn>
                <v-btn class="mb-2" block dark color="#2F617E">Registrarse</v-btn>
                <v-btn block dark color="red"  @click="LoginGoogle" :loading="carga"><v-icon>mdi-google</v-icon> Ingresar con Google</v-btn>

              </v-card-text>
            
              
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
    import firebase from 'firebase'
    import {
      mapState,
      mapActions
  } from 'vuex';
  export default {
    name: 'Inicio',
  components: {
  },
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      carga: false
    }),
  
    created () {
    this.carga = true
    this.$store.dispatch('auth/verify').then(result => {
      this.carga = false
      this.$router.replace('/')
      console.log(result)
    }, error => {
      this.carga = false
    })
  },
  methods: {
    LoginGoogle() {
      this.$store.dispatch('auth/login')
    }
  }
}
</script>
<style>
.fondo {
  background-color:#FFB74F
  }
</style>