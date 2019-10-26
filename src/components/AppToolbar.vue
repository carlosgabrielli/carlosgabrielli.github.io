<template>
  <div>
    <!-- Dialog list -->
    <v-dialog v-model="dialogList" hide-overlay transition="dialog-bottom-transition" fullscreen>
      <v-card class="mx-auto box-shadow-none border-0">
        <v-toolbar dark color="primary" class="box-shadow-none">
          <v-btn icon dark @click="dialogList = false" absolute fab small top left class="mt-6 w-0">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-toolbar>
        <div v-if="user" class="bg-primary mt-negative-40 white--text align-end border-radius-bx text-center">
          <v-avatar v-if="user" class="profile" color="grey" size="100">
            <v-img :src="user.photoURL" width="100"></v-img>
          </v-avatar>
          <v-card-title class="d-flex justify-center" v-if="user">{{ user.displayName }}</v-card-title>
        </div>
        <v-card-text class="text--primary pa-0">
          <v-list flat>
            <v-subheader>Mi cuenta</v-subheader>
            <v-list-item-group v-model="item" color="primary">
              <v-list-item @click.stop="dialogUser = true">
                <v-list-item-icon class="mr-2">
                  <v-icon>mdi-account-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Editar perfil</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn icon>
                    <v-icon color="grey lighten-1">mdi-chevron-right</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon class="mr-2">
                  <v-icon>mdi-credit-card-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Tarjetas</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn icon>
                    <v-icon color="grey lighten-1">mdi-chevron-right</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon class="mr-2">
                  <v-icon>mdi-bell-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Ajustes de notificaciones</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn icon>
                    <v-icon color="grey lighten-1">mdi-chevron-right</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon class="mr-2">
                  <v-icon>mdi-clipboard-text-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Mis pedidos</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn icon>
                    <v-icon color="grey lighten-1">mdi-chevron-right</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon class="mr-2">
                  <v-icon>mdi-logout-variant</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title @click="logout">Cerrar sesion</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn icon>
                    <v-icon color="grey lighten-1">mdi-chevron-right</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card-text>
      </v-card>
    </v-dialog>
    <!-- Dialog user -->
    <v-dialog v-model="dialogUser" hide-overlay transition="dialog-bottom-transition" fullscreen>
      <v-card class="mx-auto box-shadow-none border-0">
        <v-toolbar dark color="primary" class="box-shadow-none">
          <v-btn icon dark @click="dialogList = false" absolute fab small top left class="mt-6 w-0">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-toolbar>
        <div v-if="user" class="bg-primary mt-negative-40 white--text align-end border-radius-bx text-center">
          <v-avatar v-if="user" class="profile" color="grey" size="100">
            <v-img :src="user.photoURL" width="100"></v-img>
          </v-avatar>
          <v-card-title class="d-flex justify-center" v-if="user">{{ user.displayName }}</v-card-title>
        </div>
        <v-card-text class="text--primary pa-0">
          <v-list flat>
            <v-subheader>Mi cuenta</v-subheader>
            <v-list-item-group v-model="item" color="primary">
              <v-list-item @click.stop="dialogUser = true">
                <v-list-item-icon class="mr-2">
                  <v-icon>mdi-account-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Editar perfil</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn icon>
                    <v-icon color="grey lighten-1">mdi-chevron-right</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card-text>
        </v-card>
    </v-dialog>
    <!-- App bar -->
    <v-app-bar app class="justify-space-between" color="primary">
      <v-row justify="space-between" align="center">
        <v-btn icon @click.stop="dialogList = true">
          <v-icon>mdi-account-outline</v-icon>
        </v-btn>

        <v-avatar>
          <img src="@/assets/icon-definitivo.png" alt />
        </v-avatar>

        <v-btn icon fab>
          <v-badge color="red" left>
            <template v-slot:badge>2</template>
            <v-icon @mouseover="show = true" @mouseout="show = false">mdi-bell-outline</v-icon>
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
      dialogList: false,
      dialogUser: false
    };

    return {
      show: false
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
