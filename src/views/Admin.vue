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
              src="../assets/logo-definitivo.svg"
              aspect-ratio="1"
            ></v-img>
            <v-card class="elevation-2">
              <v-card-text>
                <v-form>
                  <v-text-field label="Nombre de local" name="nombre-local" prepend-icon type="text"></v-text-field>
                    <v-checkbox v-model="checkbox1" :label="`Milanesas`"></v-checkbox>
                    <v-checkbox v-model="checkbox1" :label="`Ensaladas`"></v-checkbox>
                    <v-checkbox v-model="checkbox1" :label="`Hamburguesas`"></v-checkbox>
                    <v-checkbox v-model="checkbox1" :label="`Guarnicion`"></v-checkbox>
                </v-form>
                <v-btn block dark color="#2F617E" class="mb-2">Entrar</v-btn>
                <v-btn class="mb-2" block dark color="#2F617E">Registrarse</v-btn>
                <v-btn block dark color="red" @click="LoginGoogle" :loading="carga">
                  <v-icon>mdi-google</v-icon>Ingresar con Google
                </v-btn>
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
  name: "Home",
  components: {}
};
</script>