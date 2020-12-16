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
                  <v-icon class="f-26">mdi-account-outline</v-icon>
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
              <v-list-item @click.stop="dialogTarjetas = true">
                <v-list-item-icon class="mr-2 ">
                  <v-icon class="f-26">mdi-credit-card-outline</v-icon>
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
                <v-list-item-icon class="mr-2 ">
                  <v-icon class="f-26">mdi-bell-outline</v-icon>
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
              <v-list-item @click.stop="dialogFavoritos = true">
                <v-list-item-icon class="mr-2 ">
                  <v-icon class="f-26">mdi-heart-outline</v-icon>
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
                <v-list-item-icon class="mr-2 ">
                  <v-icon class="f-26">mdi-clipboard-text-outline</v-icon>
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
                <v-list-item-icon class="mr-2 ">
                  <v-icon class="f-26">mdi-logout-variant</v-icon>
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
          <v-row>
            <v-col>
              <v-card class="lista-locales mb-4" outlined>
                <v-list-item three-line>
                  <v-btn
                    icon
                    class="btn-heart"
                    @click.stop="dialogTarjetaCargada = true"
                  >
                    <v-icon size="16">mdi-pencil</v-icon>
                  </v-btn>
                  <v-list-item-content class="mr-4 ml-n2 my-2">
                    <v-list-item-title
                      class="headline mb-1 subtitle-1 font-weight-bold d-flex align-items-center"
                    >
                      <img
                        src="../assets/img/visa_logo.png"
                        height="20"
                        class="mr-3"
                      />
                      **** **** **** 3704</v-list-item-title
                    >
                    <v-list-item-subtitle
                      class="subtitle-2 font-weight-regular mt-4"
                      >Fecha de vencimiento: 12/23</v-list-item-subtitle
                    >
                    <v-card-subtitle class="caption pa-0 mt-2"
                      >Titular: Carlos Gabrielli</v-card-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-card>
            </v-col>
          </v-row>
          <v-btn
            @click.stop="dialogAgregarTarjeta = true"
            depressed
            color="#ffb74b"
            class="mt-6"
          >
            Agregar tarjeta
          </v-btn>
        </v-container>
      </v-card>
    </v-dialog>
    <!-- Dialog agregar tarjeta -->
    <v-dialog
      v-model="dialogAgregarTarjeta"
      hide-overlay
      transition="dialog-bottom-transition"
      fullscreen
    >
      <v-card class="mx-auto box-shadow-none border-0 bg-app">
        <v-toolbar dark color="primary" class="box-shadow-none">
          <v-btn
            icon
            dark
            @click="dialogAgregarTarjeta = false"
            absolute
            fab
            small
            top
            left
            class="mt-6 w-0"
          >
            <v-icon class="mt-2">mdi-chevron-left</v-icon>
          </v-btn>
          <h2 class="title ml-7">Agregar tarjeta</h2>
        </v-toolbar>
        <v-container>
          <Tarjetas />
          <!--Boton guardar tarjeta -->
          <v-row>
            <v-col class="mt-6 px-3">
              <v-btn @click="dialogAgregarTarjeta = false" block color="#FFB74F"
                >Guardar tarjeta</v-btn
              >
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
    <!-- Dialog tarjeta cargada -->
    <v-dialog
      v-model="dialogTarjetaCargada"
      hide-overlay
      transition="dialog-bottom-transition"
      fullscreen
    >
      <v-card class="mx-auto box-shadow-none border-0 bg-app">
        <v-toolbar dark color="primary" class="box-shadow-none">
          <v-btn
            icon
            dark
            @click="dialogTarjetaCargada = false"
            absolute
            fab
            small
            top
            left
            class="mt-6 w-0"
          >
            <v-icon class="mt-2">mdi-chevron-left</v-icon>
          </v-btn>
          <h2 class="title ml-7">Editar tarjeta</h2>
        </v-toolbar>
        <v-container>
          <TarjetaCargada />
          <!--Boton guardar tarjeta -->
          <v-row>
            <v-col class="mt-6 px-3">
              <v-btn @click="dialogAgregarTarjeta = false" block color="#FFB74F"
                >Guardar tarjeta</v-btn
              >
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
        <!-- Dialog Favoritos -->
    <v-dialog
      v-model="dialogFavoritos"
      hide-overlay
      transition="dialog-bottom-transition"
      fullscreen
    >
      <v-card class="mx-auto box-shadow-none border-0 bg-app">
        <v-toolbar dark color="primary" class="box-shadow-none">
          <v-btn
            icon
            dark
            @click="dialogFavoritos = false"
            absolute
            fab
            small
            top
            left
            class="mt-6 w-0"
          >
            <v-icon class="mt-2">mdi-chevron-left</v-icon>
          </v-btn>
          <h2 class="title ml-7">Favoritos</h2>
        </v-toolbar>
        <v-container>
          <Favoritos />
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
        <v-menu offset-y class="z-index-201">
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon fab v-bind="attrs" v-on="on">
              <v-badge color="red" left>
                <template v-slot:badge class="f-11">2</template>
                <v-icon @mouseover="show = true" @mouseout="show = false"
                  >mdi-bullhorn-outline</v-icon
                >
              </v-badge>
            </v-btn>
          </template>
          <v-list three-line>
            <template v-for="(item, index) in items">
              <v-subheader
                v-if="item.header"
                :key="item.header"
                v-text="item.header"
              ></v-subheader>

              <v-divider
                v-else-if="item.divider"
                :key="index"
                :inset="item.inset"
              ></v-divider>

              <v-list-item v-else :key="item.title">
                <v-list-item-avatar>
                  <v-img :src="item.avatar"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title v-html="item.title"></v-list-item-title>
                  <v-list-item-subtitle
                    v-html="item.subtitle"
                  ></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>
        </v-menu>
      </v-row>
    </v-app-bar>
  </div>
</template>

<script>
import CardPedidos from "@/components/CardPedidos";
import Tarjetas from "@/components/Tarjetas";
import TarjetaCargada from "@/components/TarjetaCargada";
import Favoritos from "@/components/Favoritos";
export default {
  props: {
    source: String,
  },
  components: {
    CardPedidos,
    Tarjetas,
    TarjetaCargada,
    Favoritos,
  },
  data() {
    return {
      dialogList: false,
      dialogUser: false,
      dialogNotifications: false,
      dialogPedidos: false,
      dialogTarjetas: false,
      dialogTarjetaCargada: false,
      dialogAgregarTarjeta: false,
      dialogFavoritos: false,
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      radios: "radio-1",
      items: [
        { header: 'Hoy' },
        {
          avatar: 'https://pbs.twimg.com/profile_images/1032285191837036544/TkaW5MO8_400x400.jpg',
          title: 'Milanesa de la casa',
          subtitle: `<span class="text--primary">Pedido aceptado</span> &mdash; El restaurante está preparando tu pedido.`,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://pbs.twimg.com/profile_images/1032285191837036544/TkaW5MO8_400x400.jpg',
          title: 'La revoltosa',
          subtitle: `<span class="text--primary">Pedido finalizado</span> &mdash; El restaurante entrego tu pedido.`,
        },
      ],
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
