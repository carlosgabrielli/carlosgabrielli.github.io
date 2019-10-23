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
          <v-avatar class="profile" color="grey" size="100">
            <v-img :src="user.photoURL" width="100"></v-img>
          </v-avatar>
          <v-card-title class="d-flex justify-center" v-if="user">{{ user.displayName }}</v-card-title>
        </div>
        <v-card-text class="text--primary pa-0">
          <v-form>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6">
                  
      <v-list two-line subheader flat> 
      <v-subheader>MI CUENTA</v-subheader>
    <v-list-item>
      <v-list-item-group v-model="item">
        <v-list-item-title>Editar perfil</v-list-item-title>
                <v-list-item-title>Tarjetas</v-list-item-title>
                        <v-list-item-title>Notificaciones</v-list-item-title>
                                <v-list-item-title>Mis pedidos</v-list-item-title>



      </v-list-item-group>
    </v-list-item>

     </v-list>

    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title>Two-line item</v-list-item-title>
        <v-list-item-subtitle>Secondary text</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>


                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>

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
 <v-badge 
         color="red"
 left>
      <template v-slot:badge>2</template>
          <v-icon 
          @mouseover="show = true"
          @mouseout="show = false"
          >mdi-bell-outline</v-icon>
              </v-badge>
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

      return {
        show: false,
      }
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
