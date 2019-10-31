<template>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header v-slot="{ open }">
                <v-list-item-content>
                <v-fade-transition leave-absolute>
                        <span v-if="open">
                            <v-row>
                                <v-col  cols="10" class="pl-3 pr-0 pt-0">
                                    <h2 class="title">Milanesa vegana</h2>
                                    <v-list-item-subtitle class="subtitle-2 font-weight-regular">
                                    La mejor milanesa de ternera angus o suprema de pollo
                                    </v-list-item-subtitle>
                                </v-col>
                                <v-col  cols="1" class="pl-0 pr-0 pt-0 pb-0">
                                    <v-icon>mdi-close-circle-outline</v-icon>
                                </v-col>
                                <v-col  cols="1" class="pl-2 pr-0 pt-0 pb-0">
                                    <v-icon>mdi-pencil-outline</v-icon>
                                </v-col>
                            </v-row>
                        </span>
                        <v-row
                        v-else
                        no-gutters
                         >
                            <v-col cols="1">
                                <v-list-item-title class="mt-1 subtitle-2">x2</v-list-item-title>
                            </v-col>
                            <v-col cols="8">
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
                </v-fade-transition>
            </v-list-item-content>
      </v-expansion-panel-header>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
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
  }
</script>