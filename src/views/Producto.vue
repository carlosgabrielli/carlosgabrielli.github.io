<template>
  <v-container class="pt-0">
    <!--Encabezado-->
    <v-row class="relative mb-7 mt-n5">
        <v-col class="pa-0">
            <v-card class="p-0 b-0">
            <v-img src="../assets/img/PortadaProducto.jpg" height="280">
                <v-card-actions class="mt-5">
                <v-icon color="#fff">mdi-chevron-left</v-icon>
                <v-spacer></v-spacer>
                <v-btn icon>
                    <v-icon color="#fff">mdi-heart-outline</v-icon>
                </v-btn>
                <v-btn icon>
                    <v-icon color="#fff">mdi-share-variant</v-icon>
                </v-btn>
                </v-card-actions>
            </v-img>
            </v-card>
        </v-col>
    </v-row>
    <!--Descripcion-->
        <v-row>
            <v-col class="pt-0">
                <v-list-item-content class="pt-0 pb-0">
                    <h2 class="title">Milanesa vegana</h2>
                    <v-list-item-subtitle class="subtitle-2 font-weight-regular">
                        La mejor milanesa de ternera angus o suprema de pollo
                    </v-list-item-subtitle>
                    <v-list-item-title class=" mb-1 subtitle-2 ">
                        $100
                    </v-list-item-title>
                </v-list-item-content>
            </v-col>
        </v-row>
    <!--Unidades-->
        <v-row>
            <v-col class="pt-0">
                    <v-list-item-title class="headline mb-1 subtitle-1 ">
                        Unidades
                    </v-list-item-title>
                <v-divider class="mt-3"></v-divider>
            </v-col>
        </v-row>
    <!--Personalizar-->
        <v-row>
            <v-col class="pt-0">     
                    <v-list-item-title class="headline mb-1 subtitle-1 ">
                        Personalizar tu pedido
                    </v-list-item-title>
                <v-divider class="mt-3"></v-divider>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="pt-0 pb-0" >
                <v-checkbox :label="`Salsa de tomate`" class="mt-1" ></v-checkbox>
                <v-divider></v-divider>
                <v-checkbox :label="`Queso`" class="mt-1" ></v-checkbox>
                <v-divider></v-divider>
                <v-checkbox :label="`Extra cheddar`" class="mt-1"></v-checkbox>
                <v-divider></v-divider>
                
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-list-item-title class="headline mb-1 subtitle-1 ">
                    Aclaraciones
                </v-list-item-title>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" sm="6" class="pb-0">
                <v-textarea
                filled
                auto-grow
                label="Notas al producto..."
                rows="2"
                row-height="20"
                ></v-textarea>
            </v-col>
        </v-row>
    <!--Boton continuar-->
        <v-row>
            <v-col class="pt-0">
                <v-btn block color="#FFB74F">Continuar</v-btn>
            </v-col>
        </v-row>
  </v-container>
</template>

<script>

export default {
  name: "Producto",
  components: {
    
  }
};
</script>
