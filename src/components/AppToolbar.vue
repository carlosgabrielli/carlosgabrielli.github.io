<template>
  <div>
    <v-dialog v-model="dialog" hide-overlay transition="dialog-bottom-transition" fullscreen>
      <v-toolbar fixed-header dark color="primary" height="40px">
        <v-btn icon dark @click="dialog = false">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card class="mx-auto box-shadow-none border-0" max-width="400">
        <div class="bg-primary white--text align-end border-radius-bx text-center">
          <v-avatar v-if="user" class="profile" color="grey" size="100">
            <v-img :src="user.photoURL" width="100"></v-img>
          </v-avatar>
          <v-card-title class="d-flex justify-center" v-if="user">{{ user.displayName }}</v-card-title>
        </div>
        <v-card-text class="text--primary pa-0">
          <v-form>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6">
                  <h3 class="mb-5">Mis datos</h3>
                  <v-text-field label="Nombre" outlined></v-text-field>
                  <v-text-field label="Apellido" outlined></v-text-field>
                  <div class="pb-5">
                    <a href="" v-if="user" @click="logout" >Cerrar sesion</a>
                  </div>
                  <h3 class="border-top pt-5">Mis pedidos</h3>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn color="orange" text>Share</v-btn>
          <v-btn color="orange" text>Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-app-bar absolute class="justify-space-between" color="primary">
      <v-row justify="space-between" align="center">
        <v-btn icon @click.stop="dialog = true">
          <v-icon>mdi-account-outline</v-icon>
        </v-btn>

        <v-avatar>
          <img src="@/assets/icon-definitivo.png" alt />
        </v-avatar>

        <v-btn icon fab>
          <v-icon>mdi-bell-outline</v-icon>
        </v-btn>
      </v-row>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  props: {
    source: String
  },
  data() {
    return {
      dialog: false
    };
  },
  computed: {
    user() {
      return this.$store.getters["auth/getUser"];
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("auth/logout").then(
        result => {
          this.$router.replace("/login");
          console.log();
        },
        error => {
          //cartel
        }
      );
    }
  }
};
</script>
