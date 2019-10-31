<template>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header v-slot="{ open }">
                <v-list-item-content>
                <v-fade-transition leave-absolute>
                        <span v-if="open">
                          <v-row>
                            <v-col class="pt-0">
                              <atras @click="$router.push('/Carta')"/>
                              <h2 class="title">Mi pedido</h2>
                            </v-col>
                          </v-row>
                            <v-row class="pt-4">
                                <v-col  cols="8" class="pl-3 pr-0 pt-3">
                                    <h2 class="title">Milanesa vegana</h2>
                                    <v-list-item-subtitle class="subtitle-2 font-weight-regular">
                                    La mejor milanesa de ternera angus o suprema de pollo
                                    </v-list-item-subtitle>
                                </v-col>
                                <v-col  cols="1" class="pl-0 pr-0 pt-4 pb-0">
                                    <v-icon>mdi-close-circle-outline</v-icon>
                                </v-col>
                                <v-col  cols="1" class="pl-1 pr-0 pt-4 pb-0">
                                    <v-icon>mdi-pencil-outline</v-icon>
                                </v-col>
                            </v-row>
                            <v-divider class="linea-division-carrito pl-0"></v-divider>
                            <v-row>
                                <v-col  cols="8" class="pl-3 pr-0 pt-3">
                                    <h2 class="title">Milanesa vegana</h2>
                                    <v-list-item-subtitle class="subtitle-2 font-weight-regular">
                                    La mejor milanesa de ternera angus o suprema de pollo
                                    </v-list-item-subtitle>
                                </v-col>
                                <v-col  cols="1" class="pl-0 pr-0 pt-4 pb-0">
                                    <v-icon>mdi-close-circle-outline</v-icon>
                                </v-col>
                                <v-col  cols="1" class="pl-1 pr-0 pt-4 pb-0">
                                    <v-icon>mdi-pencil-outline</v-icon>
                                </v-col>
                            </v-row>
                            <v-divider class="linea-division-carrito pl-0"></v-divider>
                            <v-row>
                                <v-col  cols="8" class="pl-3 pr-0 pt-3">
                                    <h2 class="title">Milanesa vegana</h2>
                                    <v-list-item-subtitle class="subtitle-2 font-weight-regular">
                                    La mejor milanesa de ternera angus o suprema de pollo
                                    </v-list-item-subtitle>
                                </v-col>
                                <v-col  cols="1" class="pl-0 pr-0 pt-4 pb-0">
                                    <v-icon>mdi-close-circle-outline</v-icon>
                                </v-col>
                                <v-col  cols="1" class="pl-1 pr-0 pt-4 pb-0">
                                    <v-icon>mdi-pencil-outline</v-icon>
                                </v-col>
                            </v-row>
                        </span>
                        <v-row
                        v-else
                        no-gutters
                         >
                         <v-row>
                           <v-col class="pt-0">
                             <atras @click="$router.push('/Carta')"/>
                             <h2 class="title">Mi pedido</h2>
                           </v-col>
                        </v-row>
                         <v-row class="pt-4">
                            <v-col cols="1" class="pt-3 pb-0 pl-1 pr-0 ">
                                <v-list-item-subtitle class="mt-1 subtitle-2 font-weight-regular">x2</v-list-item-subtitle>
                            </v-col>
                            <v-col cols="7" class="pr-0 pl-1">
                                <h2 class="title">Milanesa vegana</h2>
                                <v-list-item-subtitle class="subtitle-2 font-weight-regular">
                                    La mejor milanesa de ternera angus o suprema de pollo
                                </v-list-item-subtitle>
                            </v-col>
                            <v-col cols="2" class="pl-3 pr-0">
                               <v-list-item-title class=" mt-2 subtitle-2 ">
                                 $100
                                </v-list-item-title>
                            </v-col>
                          </v-row>  
                          <v-divider class="linea-division-carrito pl-0"></v-divider>
                          <v-row>
                            <v-col cols="1" class="pt-3 pb-0 pl-1 pr-0">
                                <v-list-item-subtitle class="mt-1 subtitle-2 font-weight-regular">x2</v-list-item-subtitle>
                            </v-col>
                            <v-col cols="7" class="pl-1">
                                <h2 class="title">Milanesa vegana</h2>
                                <v-list-item-subtitle class="subtitle-2 font-weight-regular">
                                    La mejor milanesa de ternera angus o suprema de pollo
                                </v-list-item-subtitle>
                            </v-col>
                            <v-col cols="2">
                               <v-list-item-title class=" mt-2 subtitle-2 ">
                                 $100
                                </v-list-item-title>
                            </v-col>
                          </v-row>
                          <v-divider class="linea-division-carrito pl-0"></v-divider>
                          <v-row>
                            <v-col cols="1" class="pt-3 pb-0 pl-1 pr-0">
                                <v-list-item-subtitle class="mt-1 subtitle-2 font-weight-regular">x2</v-list-item-subtitle>
                            </v-col>
                            <v-col cols="7" class="pl-1">
                                <h2 class="title">Milanesa vegana</h2>
                                <v-list-item-subtitle class="subtitle-2 font-weight-regular">
                                    La mejor milanesa de ternera angus o suprema de pollo
                                </v-list-item-subtitle>
                            </v-col>
                            <v-col cols="2">
                               <v-list-item-title class=" mt-2 subtitle-2 ">
                                 $100
                                </v-list-item-title>
                            </v-col>
                            
                          </v-row>
                        </v-row> 
                </v-fade-transition>
            </v-list-item-content>
      </v-expansion-panel-header>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import Atras from "@/components/Atras";

  export default {
    data: () => ({
      date: null,
      trip: {
        name: '',
        location: null,
        start: null,
        end: null,
      },

      locations: ['Australia', 'Barbados', 'Chile', 'Denmark', 'Equador', 'France'],
    }),
      components: {
    Atras
  }
  }
</script>