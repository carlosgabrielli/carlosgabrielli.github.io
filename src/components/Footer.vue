<template>
  <div>
    <!-- Dialog buscar -->
    <v-dialog
      v-model="dialogBuscador"
      hide-overlay
      transition="dialog-bottom-transition"
      fullscreen
    >
      <v-card class="mx-auto box-shadow-none border-0 bg-app">
        <v-toolbar dark color="primary" class="box-shadow-none">
          <v-btn
            icon
            dark
            @click="dialogBuscador = false"
            absolute
            fab
            small
            top
            left
            class="mt-6 w-0"
          >
            <v-icon class="mt-2">mdi-chevron-left</v-icon>
          </v-btn>
          <h2 class="title ml-7">Buscador</h2>
        </v-toolbar>
        <v-container>
          <v-row>
            <v-col>
              <v-text-field
                v-on:click:clear="clearFiltro"
                v-model="filtro"
                filled
                label="Buscar locales..."
                clearable
              ></v-text-field>
            </v-col>
          </v-row>
                  <CardLocal />
        </v-container>


        <!--Cartas-->
      </v-card>
    </v-dialog>
    <!-- Footer -->
    <v-footer app fixed style="padding:0;">
      <v-bottom-navigation grow color="teal">
        <v-btn @click="$router.push('/home')">
          <v-icon>mdi-home-outline</v-icon>
        </v-btn>
        <v-btn @click.stop="dialogBuscador = true">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn>
          <v-icon>mdi-clipboard-text-outline</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </v-footer>
  </div>
</template>

<script>
import CardLocal from "@/components/CardLocal";

export default {
  name: "Footer",
  components: {
    CardLocal
  },
  props: {
    source: String
  },
  data() {
    return {
      dialogBuscador: false,
      show: false,
      resultados: [],
      filtro: ""
    };
  },
  watch: {
    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
    },
    filtro(val) {
      this.buscador();
    }
  },

  methods: {
    save(date) {
      this.$refs.menu.save(date);
    },
    buscador() {
      console.log(this.filtro);
      this.$store.dispatch("locales/buscador", this.filtro);
    },
    clearFiltro() {
      this.filtro = "";
    }
  }
};
</script>