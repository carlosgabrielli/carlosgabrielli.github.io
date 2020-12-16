<template >
  <v-app id="inspire">
    <v-content class="bg-login">
      <v-container>
        <v-layout justify-center>
          <v-flex xs12 sm8 md4 class="py-5" style="padding-top: 130px !important">
            <v-row class="mb-5">
              <v-col class="pt-0">
                <h1>¡Bievenido!</h1>
                <h3>Inicia sesión para continuar</h3>
              </v-col>
            </v-row>
            <v-form>
              <v-text-field
                label="Correo electrónico"
                outlined
                name="login"
                v-model="usuario.email"
                type="email"
              ></v-text-field>
              <v-text-field
                label="Contraseña"
                outlined
                name="password"
                v-model="usuario.password"
                id="password"
                type="password"
              ></v-text-field>
            </v-form>
            <v-row>
              <v-col cols="5" class="remember">
                <v-checkbox label="Recordarme" class="mt-0 pt-0" value="Recordarme"></v-checkbox>
              </v-col>
              <v-col cols="7" class="text-right forgot-password">
                <a>¿Olvidaste tu contraseña?</a>
              </v-col>
            </v-row>
            <v-btn block @click="login" class="mb-2 bg-primary">Ingresar</v-btn>
            <v-btn block color="#FFFFFF" class="mt-6" @click="LoginGoogle" :loading="carga">
              <v-img src="../assets/img/google_logo.png" max-width="28px" class="mr-3"></v-img>Ingresar con Google
            </v-btn>
            <v-row class="mt-4">
              <v-col class="text-center">
                <p>¿Aún no tienes una cuenta?</p>
                <a class="mb-2 font-weight-bold">Crear una cuenta</a>
              </v-col>
            </v-row>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
import firebase from "firebase";
import { mapState, mapActions } from "vuex";
export default {
  name: "Inicio",
  components: {},
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    carga: false,
    usuario: {
      email: null,
      password: null,
      show1: false
    }
  }),

  created() {
    this.carga = true;
    this.$store.dispatch("auth/verify").then(
      result => {
        this.carga = false;
        this.$router.replace("/");
        console.log(result);
      },
      error => {
        this.carga = false;
      }
    );
  },
  methods: {
    LoginGoogle() {
      this.$store.dispatch("auth/login");
    },
    login() {
      this.$store.dispatch("auth/loginWithEmail", this.usuario).then(
        result => {
          if (result.rol == "resto") {
            this.$router.push("/restohome");
          } else {
            this.$router.push("/home");
          }
        },
        error => {}
      );
    }
  }
};
</script>