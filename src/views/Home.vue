<template>
  <v-container>
    <v-row>
      <v-col>
          <v-slide-group
          class="mt-10">
              <v-slide-item>
              <v-card
                  class="ma-3"
                  @click="toggle"
              >
              <v-img
              src="../assets/img/restaurantes.jpg"
              >
              <v-card-title
               class="white--text pt-1 pl-1">Restaurantes</v-card-title>
              </v-img>
              </v-card>
              </v-slide-item>
            <v-slide-item
            >
              <v-card
                class="ma-3"
                @click="toggle"
              >
              <v-img
              src="../assets/img/bares.jpg"
              >
              <v-card-title class="white--text pt-1 pl-2">Bares</v-card-title>
              </v-img>
              </v-card>
            </v-slide-item>
            <v-slide-item
            >
              <v-card
                class="ma-3"
                @click="toggle"
              >
              <v-img 
              src="../assets/img/cafeterias.jpg"
              >
              <v-card-title class="white--text pt-1 pl-2">Cafeterias</v-card-title>
              </v-img>
              </v-card>
            </v-slide-item>
          </v-slide-group>
      </v-col>
    </v-row>
      <v-col class="pt-0">
        <h2 class="title ">Promociones</h2>
      </v-col>
    <v-row>
      <v-col>
        <v-slide-group>
        <v-slide-item>
          <v-img class="ma-3"
          src="../assets/img/promoHamburguesa.jpg"
          >
        </v-img>
        </v-slide-item>
        <v-slide-item>
          <v-img class="ma-3"
          src="../assets/img/promoCerveza.jpg"
          >
        </v-img>
        </v-slide-item>
        </v-slide-group>
      </v-col>
    </v-row>
  </v-container>
  
</template>
<script>
 export default {
    data: () => ({

    }),
  } 
</script>
