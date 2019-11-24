<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height class="pb-0">
        <v-layout justify-center>
          <v-flex xs12 sm8 md4>
            <v-img
              class="mx-auto mb-10"
              width="100px"
              height="100px"
              src="../assets/icon-definitivo.png"
              aspect-ratio="1"
            ></v-img>
            <v-form>
              <v-text-field label="Email" name="login" v-model="usuario.email" type="email"></v-text-field>
              <v-text-field
                label="Contraseña"
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
            <v-row>
              <v-col class="text-center">
                <p>¿Aún no tienes una cuenta?</p>
                <a class="mb-2 font-weight-bold">Crear una cuenta</a>
              </v-col>
            </v-row>
            <p class="text-center">O</p>
            <v-btn block color="#FFFFFF" @click="LoginGoogle" :loading="carga">
              <v-img src="../assets/img/google_logo.png" max-width="28px" class="mr-3"></v-img>Ingresar con Google
            </v-btn>
            <v-row>
              <v-col
                cols="12"
                class="px-0 py-0 d-flex justify-center mt-8 d-block d-sm-none"
                style="overflow-x: hidden;"
              >
                <v-img src="../assets/img/ilustracion_login_xs.png"></v-img>
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