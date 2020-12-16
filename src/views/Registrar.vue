<template>
  <v-app id="inspire">
    <v-content class="bg-login">
      <v-container>
        <v-layout justify-center>
          <v-flex xs12 sm8 md4 style="padding-top: 130px !important">
            <v-row class="mb-5">
              <v-col class="pt-0">
                <h1>¡Bievenido!</h1>
                <h3>Registrate para continuar</h3>
              </v-col>
            </v-row>
            <v-form>
              <v-text-field
                outlined
                label="Nombre y apellido"
                name="login"
                prepend-icon
                type="text"
                v-model="usuario.Nombre"
                :rules="[rules.required]"
              ></v-text-field>
              <v-text-field
                outlined
                id="Email"
                v-model="usuario.Email"
                :rules="[rules.required, rules.email]"
                label="Correo electrónico"
              ></v-text-field>
              <v-text-field
                outlined
                id="password"
                label="Contraseña"
                v-model="usuario.Clave"
                name="password"
                prepend-icon
                type="password"
              ></v-text-field>
              <v-text-field
                outlined
                id="repitePassword"
                label="Repetir contraseña"
                v-model="usuario.Clave"
                name="repitePassword"
                prepend-icon
                type="repitePassword"
              ></v-text-field>
            </v-form>
            <v-btn block @click="guardar" class="mb-2 bg-primary">Registrarse</v-btn>
            <v-btn
              block
              color="#FFFFFF"
              class="mt-6"
              @click="LoginGoogle"
              :loading="carga"
            >
              <v-img
                src="../assets/img/google_logo.png"
                max-width="28px"
                class="mr-3"
              ></v-img
              >Registrarse con Google
            </v-btn>
            <v-row class="mt-4">
              <v-col class="text-center">
                <p>¿Ya tienes una cuenta?</p>
                <a
                  class="mb-2 font-weight-bold"
                  @click="$router.push('/login')"
                  >Iniciar sesión</a
                >
              </v-col>
            </v-row>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      carga: false,
      usuario: {
        Nombre: null,
        Email: null,
        Clave: null,
      },
      props: {
        source: String,
      },
      title: "Preliminary report",
      email: "",
      rules: {
        required: (value) => !!value || "Requerido.",
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Email invalido.";
        },
      },
    };
  },
    created() {
    this.carga = true;
    this.$store.dispatch("auth/verify").then(
      result => {
        this.carga = false;
        this.$router.replace("/home");
        console.log(result);
      },
      error => {
        this.carga = false;
      }
    );
  },
  methods: {
    guardar() {
      this.$store.dispatch("usuarios/guardar", this.local);
    },
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
  },
};
</script>