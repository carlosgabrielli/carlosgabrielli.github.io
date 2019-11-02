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
                    label="Nombre del local"
                    name="login"
                    prepend-icon
                    type="text"
                    v-model="local.Nombre"
                    :rules="[rules.required]"
                  ></v-text-field>

                  <v-text-field
                    color="#2B5E7C"
                    id="Direccion"
                    label="Dirección Fisica"
                    name="Direccion"
                    prepend-icon
                    v-model="local.Direccion"
                    type="text"
                    :rules="[rules.required]"
                  ></v-text-field>
                  <v-text-field
                    color="#2B5E7C"
                    id="Email"
                    v-model="local.Email"
                    :rules="[rules.required, rules.email]"
                    label="E-mail"
                  ></v-text-field>
                  <v-autocomplete
                    name="Categorias"
                    id="Categorias"
                    v-model="local.Categorias"
                    label="Categorias"
                    :items="components"
                    dense
                    chips
                    small-chips
                    multiple
                  ></v-autocomplete>
                  <v-file-input placeholder="La imagen de tu local" multiple>
                    <template v-slot:selection="{ text }">
                      <v-chip small label color="primary">{{ text }}</v-chip>
                    </template>
                  </v-file-input>
                  <v-text-field
                    color="#2B5E7C"
                    id="password"
                    label="Contraseña"
                    v-model="local.Clave"
                    name="password"
                    prepend-icon
                    type="password"
                  ></v-text-field>
                </v-form>
                <v-btn class="mb-2" @click="guardar" block dark>Registrar local</v-btn>
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
      local: {
        Nombre: null,
        Direccion: null,
        Categorias: null,
        Fotolocal: null,
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
      components: [
        "Milanesas",
        "Empanadas",
        "Pastas",
        "Ensaladas"
      ]
    };
  },
  methods: {
    guardar() {
      this.$store.dispatch("locales/guardar", this.local);
    }
  }
};
</script>