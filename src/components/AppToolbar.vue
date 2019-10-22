<template>
  <div>
    <v-dialog v-model="dialog" hide-overlay transition="dialog-bottom-transition" fullscreen>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Mi cuenta</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items></v-toolbar-items>
        </v-toolbar>
        <v-card-title v-if="user">{{ user.displayName }}</v-card-title>
        <v-card-subtitle>{{user.email}}</v-card-subtitle>
        <v-row justify="center">
          <v-avatar class="profile" color="grey" size="120">
            <v-img :src="user.photoURL" width="100"></v-img>
          </v-avatar>
        </v-row>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="dialog = false">Disagree</v-btn>

          <v-btn color="green darken-1" text @click="dialog = false">Agree</v-btn>
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
