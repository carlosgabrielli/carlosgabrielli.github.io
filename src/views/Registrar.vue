<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height class="fondo">
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-img
              class="mx-auto mb-10"
              width="150px"
              height="150px"
              src="../assets/icon-definitivo.png"
              aspect-ratio="1"
            ></v-img>
            <v-card class="elevation-2">
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Nombre y apellido"
                    name="login"
                    prepend-icon
                    type="text"
                    v-model="usuario.Nombre"
                    :rules="[rules.required]"
                  ></v-text-field>
                  <v-text-field
                    color="#2B5E7C"
                    id="Email"
                    v-model="usuario.Email"
                    :rules="[rules.required, rules.email]"
                    label="E-mail"
                  ></v-text-field>
                  <v-text-field
                    color="#2B5E7C"
                    id="password"
                    label="Contraseña"
                    v-model="usuario.Clave"
                    name="password"
                    prepend-icon
                    type="password"
                  ></v-text-field>
                </v-form>
                <v-btn class="mb-2" @click="guardar" block dark color="#2F617E">Registrar local</v-btn>
              </v-card-text>
            </v-card>
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
      usuario: {
        Nombre: null,
        Email: null,
        Clave: null
      },
      title: "Preliminary report",
      email: "",
      rules: {
        required: value => !!value || "Requerido.",
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Email invalido.";
        }
      },
    };
  },
  methods: {
    guardar() {
      this.$store.dispatch("usuarios/guardar", this.local);
    }
  }
};
</script>