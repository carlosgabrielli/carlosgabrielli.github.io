<template>
  <v-card
    class="mx-auto"
    max-width="500"
  >
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card>
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="150px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    
    <h2 class="ps-3 pb-3">Promociones</h2>

    <v-row align="center" justify="center">
    <v-img 
      src="https://picsum.photos/id/11/500/300"
      lazy-src="https://picsum.photos/id/11/10/6"
      aspect-ratio="1"
      
      max-width="330"
      max-height="150"
    ></v-img>
  </v-row>
    <h2 class="ps-3 pb-0 pt-5">Restaurantes / Bares</h2>
    <p class="ps-3 pt-0">Los mas populares</p>

  <v-card
    class="mx-auto"
    max-width="380"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-avatar
        tile
        size="65"
        color="grey"
      ></v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1 title">El club de la milanesa   
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
        </v-list-item-title>
        <v-list-item-subtitle class="subtitle-1">Ensaladas, Hamburguesas</v-list-item-subtitle>
        <v-card-subtitle class="subtitle-2">Av. Hipolito Yrigoyen 320 - 2km</v-card-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
    <v-card
    class="mx-auto"
    max-width="380"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-avatar
        tile
        size="65"
        color="grey"
      ></v-list-item-avatar>
      <v-list-item-content>
                <v-list-item-title class="headline mb-1 title">El club de la milanesa   
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
        </v-list-item-title>
        <v-list-item-subtitle class="subtitle-1">Ensaladas, Hamburguesas</v-list-item-subtitle>
        <v-card-subtitle class="subtitle-2">Av. Hipolito Yrigoyen 320 - 2km</v-card-subtitle>
      </v-list-item-content>
    </v-list-item>

  </v-card>
    <v-card
    class="mx-auto"
    max-width="380"
    outlined
    
  >
    <v-list-item three-line>
      <v-list-item-avatar
        tile
        size="65"
        color="grey"
      ></v-list-item-avatar>
      <v-list-item-content>
                <v-list-item-title class="headline mb-1 title">El club de la milanesa   
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
        </v-list-item-title>
        <v-list-item-subtitle class="subtitle-1">Ensaladas, Hamburguesas</v-list-item-subtitle>
        <v-card-subtitle class="subtitle-2">Av. Hipolito Yrigoyen 320 - 2km</v-card-subtitle>
      </v-list-item-content>
    </v-list-item>

  </v-card>
  
    <v-card
    class="mx-auto"
    max-width="380"
    outlined
    mb-10
  >
    <v-list-item three-line>
      <v-list-item-avatar
        tile
        size="65"
        color="grey"
      ></v-list-item-avatar>
      <v-list-item-content>
                <v-list-item-title class="headline mb-1 title">El club de la milanesa   
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
        </v-list-item-title>
        <v-list-item-subtitle class="subtitle-1">Ensaladas, Hamburguesas</v-list-item-subtitle>
        <v-card-subtitle class="subtitle-2">Av. Hipolito Yrigoyen 320 - 2km</v-card-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
  </v-card>
  
</template>
<script>
export default {
  name: 'Home',
  components: {
  }
};
</script>
