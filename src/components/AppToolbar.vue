<template>
  <div>
    <!-- Dialog Mi cuenta -->
    <v-dialog
      v-model="dialogList"
      hide-overlay
      transition="dialog-bottom-transition"
      fullscreen
    >
      <v-card class="mx-auto box-shadow-none border-0 bg-app">
        <v-toolbar dark color="primary" class="box-shadow-none">
          <v-btn
            icon
            dark
            @click="dialogList = false"
            absolute
            fab
            small
            top
            left
            class="mt-6 w-0"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-toolbar>
        <div
          v-if="user"
          class="bg-primary mt-negative-40 white--text align-end border-radius-bx text-center"
        >
          <v-avatar v-if="user" class="profile" color="grey" size="100">
            <v-img :src="user.photoURL" width="100"></v-img>
          </v-avatar>
          <v-card-title class="d-flex justify-center" v-if="user">{{
            user.displayName
          }}</v-card-title>
          <v-card-subtitle v-if="user">{{ user.email }}</v-card-subtitle>
        </div>
        <v-card-text class="text--primary pa-0">
          <v-list flat class="bg-app">
            <v-subheader>
              <h3>Mi cuenta</h3>
            </v-subheader>
            <v-list-item-group color="primary">
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
              <v-list-item  @click.stop="dialogTarjetas = true">
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
              <v-list-item @click.stop="dialogNotifications = true">
                <v-list-item-icon class="mr-2">
                  <v-icon>mdi-bell-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title
                    >Ajustes de notificaciones</v-list-item-title
                  >
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn icon>
                    <v-icon color="grey lighten-1">mdi-chevron-right</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon class="mr-2">
                  <v-icon>mdi-heart-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Favoritos</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn icon>
                    <v-icon color="grey lighten-1">mdi-chevron-right</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
              <v-list-item @click.stop="dialogPedidos = true">
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
                  <v-list-item-title @click="logout"
                    >Cerrar sesion</v-list-item-title
                  >
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
    <!-- Dialog Editar perfil -->
    <v-dialog
      v-model="dialogUser"
      hide-overlay
      transition="dialog-bottom-transition"
      fullscreen
    >
      <v-card class="mx-auto box-shadow-none border-0 bg-app">
        <v-toolbar dark color="primary" class="box-shadow-none">
          <v-btn
            icon
            dark
            @click="dialogUser = false"
            absolute
            fab
            small
            top
            left
            class="mt-6 w-0"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-toolbar>
        <div
          v-if="user"
          class="bg-primary mt-negative-40 white--text align-end border-radius-bx text-center"
        >
          <v-avatar v-if="user" class="profile" color="grey" size="100">
            <v-img :src="user.photoURL" width="100"></v-img>
          </v-avatar>
          <v-card-title class="d-flex justify-center" v-if="user">{{
            user.displayName
          }}</v-card-title>
          <v-card-subtitle v-if="user">{{ user.email }}</v-card-subtitle>
        </div>
        <v-card-text class="text--primary pa-0">
          <v-list flat class="bg-app">
            <v-subheader>
              <h3>Mis datos</h3>
            </v-subheader>
            <v-col cols="12" sm="6">
              <v-text-field
                value="Carlos"
                label="Nombre"
                outlined
                required
              ></v-text-field>
              <v-text-field
                value="Gabrielli"
                label="Apellido"
                outlined
                required
              ></v-text-field>
              <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                :return-value.sync="date"
                transition="scale-transition"
                offset-y
                full-width
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    class="datepicker"
                    v-model="date"
                    label="Fecha de nacimiento"
                    outlined
                    required
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  ref="picker"
                  v-model="date"
                  :max="new Date().toISOString().substr(0, 10)"
                  min="1950-01-01"
                  @change="save"
                ></v-date-picker>
              </v-menu>
              <p>Género</p>
              <v-radio-group class="mb-6" v-model="radios" :mandatory="false">
                <v-radio label="Masculino" value="radio-1"></v-radio>
                <v-radio label="Femenino" value="radio-2"></v-radio>
                <v-radio label="Otro" value="radio-3"></v-radio>
              </v-radio-group>
            </v-col>
            <!--Boton confirmar-->
            <div class="mt-12">
              <v-col class="fixed-bottom border-top bg-app">
                <v-btn block color="#FFB74F">Aplicar</v-btn>
              </v-col>
            </div>
          </v-list>
        </v-card-text>
      </v-card>
    </v-dialog>
    <!-- Dialog Notificaciones -->
    <v-dialog
      v-model="dialogNotifications"
      hide-overlay
      transition="dialog-bottom-transition"
      fullscreen
    >
      <v-card class="mx-auto box-shadow-none border-0 bg-app">
        <v-toolbar dark color="primary" class="box-shadow-none">
          <v-btn
            icon
            dark
            @click="dialogNotifications = false"
            absolute
            fab
            small
            top
            left
            class="mt-6 w-0"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-toolbar>
        <div
          v-if="user"
          class="bg-primary mt-negative-40 white--text align-end border-radius-bx text-center"
        >
          <v-avatar v-if="user" class="profile" color="grey" size="100">
            <v-img :src="user.photoURL" width="100"></v-img>
          </v-avatar>
          <v-card-title class="d-flex justify-center" v-if="user">{{
            user.displayName
          }}</v-card-title>
          <v-card-subtitle v-if="user">{{ user.email }}</v-card-subtitle>
        </div>
        <v-card-text class="text--primary pa-0">
          <v-list flat class="bg-app">
            <v-subheader>
              <h3>Notificaciones</h3>
            </v-subheader>
            <v-col class="px-4 pb-0">
              <h3>Notificaciones en el celular</h3>
            </v-col>
            <v-list-item-group>
              <v-list-item class="border-bottom px-0 mx-4">
                <v-list-item-content>
                  <v-list-item-title>Descuentos/Promociones</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn icon>
                    <v-switch value="true"></v-switch>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list-item-group>
            <v-list-item-group>
              <v-list-item class="border-bottom px-0 mx-4">
                <v-list-item-content>
                  <v-list-item-title>Novedades</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn icon>
                    <v-switch value="true"></v-switch>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list-item-group>
            <v-col class="px-4 pb-0 mt-5">
              <h3>Notificaciones en el email</h3>
            </v-col>
            <v-list-item-group>
              <v-list-item class="border-bottom px-0 mx-4">
                <v-list-item-content>
                  <v-list-item-title>Resumen de pedido</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn icon>
                    <v-switch value="true"></v-switch>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list-item-group>
            <v-list-item-group>
              <v-list-item class="border-bottom px-0 mx-4">
                <v-list-item-content>
                  <v-list-item-title>Descuentos/Promociones</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn icon>
                    <v-switch value="true"></v-switch>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list-item-group>
            <v-list-item-group>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Novedades</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn icon>
                    <v-switch value="true"></v-switch>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list-item-group>
          </v-list>
          <!--Boton aplicar cambios -->
          <v-row>
            <v-col class="mt-8 px-6">
              <v-btn @click="dialogNotifications = false" block color="#FFB74F"
                >Aplicar cambios</v-btn
              >
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
    <!-- Dialog pedidos -->
    <v-dialog
      v-model="dialogPedidos"
      hide-overlay
      transition="dialog-bottom-transition"
      fullscreen
    >
      <v-card class="mx-auto box-shadow-none border-0 bg-app">
        <v-toolbar dark color="primary" class="box-shadow-none">
          <v-btn
            icon
            dark
            @click="dialogPedidos = false"
            absolute
            fab
            small
            top
            left
            class="mt-6 w-0"
          >
            <v-icon class="mt-2">mdi-chevron-left</v-icon>
          </v-btn>
          <h2 class="title ml-7">Pedidos</h2>
        </v-toolbar>
        <v-container>
          <CardPedidos />
        </v-container>
      </v-card>
    </v-dialog>
    <!-- Dialog tarjetas -->
    <v-dialog
      v-model="dialogTarjetas"
      hide-overlay
      transition="dialog-bottom-transition"
      fullscreen
    >
      <v-card class="mx-auto box-shadow-none border-0 bg-app">
        <v-toolbar dark color="primary" class="box-shadow-none">
          <v-btn
            icon
            dark
            @click="dialogTarjetas = false"
            absolute
            fab
            small
            top
            left
            class="mt-6 w-0"
          >
            <v-icon class="mt-2">mdi-chevron-left</v-icon>
          </v-btn>
          <h2 class="title ml-7">Tarjetas</h2>
        </v-toolbar>
        <v-container>
          <Tarjetas />
        </v-container>
      </v-card>
    </v-dialog>
    <!-- App bar -->
    <v-app-bar
      app
      class="justify-space-between border-radius-bx"
      color="primary"
    >
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
            <v-icon @mouseover="show = true" @mouseout="show = false"
              >mdi-bullhorn-outline</v-icon
            >
          </v-badge>
        </v-btn>
      </v-row>
    </v-app-bar>
  </div>
</template>

<script>
import CardPedidos from "@/components/CardPedidos";
import Tarjetas from "@/components/Tarjetas";
export default {
  props: {
    source: String,
  },
  components: {
    CardPedidos,
    Tarjetas
  },
  data() {
    return {
      dialogList: false,
      dialogUser: false,
      dialogNotifications: false,
      dialogPedidos: false,
      dialogTarjetas: false,
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      radios: "radio-1",
    };

    return {
      show: false,
    };
  },
  watch: {
    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
    },
  },
  computed: {
    user() {
      return this.$store.getters["auth/getUser"];
    },
  },
  methods: {
    save(date) {
      this.$refs.menu.save(date);
    },
    logout() {
      this.$store.dispatch("auth/logout").then(
        (result) => {
          this.$router.replace("/login");
          console.log();
        },
        (error) => {
          //cartel
        }
      );
    },
  },
};
</script>
