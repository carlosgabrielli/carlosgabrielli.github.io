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
              <v-text-field
                label="Nombre del local"
                outlined
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
                outlined
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
                outlined
              ></v-text-field>
              <v-autocomplete
                name="Categorias"
                id="Categorias"
                v-model="local.Categorias"
                label="Categorias"
                :items="components"
                outlined
                chips
                small-chips
                multiple
              ></v-autocomplete>
              <image-uploader
                :preview="true"
                :debug="1"
                :maxWidth="512"
                :quality="0.85"
                :autoRotate="true"
                doNotResize="['gif']"
                @input="setImage"
              ></image-uploader>
              <v-text-field
                color="#2B5E7C"
                id="password"
                label="Contraseña"
                outlined
                v-model="local.Clave"
                name="password"
                prepend-icon
                type="password"
              ></v-text-field>
            </v-form>
            <v-btn class="mb-2 bg-primary" @click="guardar" block>Registrar local</v-btn>
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
      imageUrl: null,
      hasImage: null,
      image: null,
      local: {
        Nombre: null,
        Direccion: null,
        Categorias: null,
        Logo: null,
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
      components: ["Milanesas", "Empanadas", "Pastas", "Ensaladas"]
    };
  },
  methods: {
    setImage: function(output) {
      var imageResize = this.image;
      this.hasImage = true;
      this.image = output;
      this.local.Logo = this.image;
      console.log(this.image);
    },
    guardar() {
      this.$store.dispatch("locales/guardar", this.local).then(result => {});
    },
    crear({ commit }, local) {
      return new promise((resolve, reject) => {
        if (local.imagen.type === "image/jpeg") {
          extension = "jpg";
        }
        if (local.imagen.type === "image/png") {
          extension = "png";
        }
        if (local.imagen.type === "image/gif") {
          extension = "gif";
        }

        let imageRef = firebase
          .storage()
          .ref()
          .child("logoLocales/");
        imagenRef.put(local.Logo).then(function(snapshot) {
          snapshot.ref.getDowloandURL().then(function(url) {
            //console.log(url)
            local.Logo = url;
            firebase
              .firestore()
              .collection("locales")
              .add(local);
            //console.log(Locales)
            resolve("Enviado");
          });
        });
      });
    }
  }
};
</script>