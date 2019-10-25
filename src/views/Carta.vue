<template>
    <v-container class="pt-0">
        <!--Encabezado-->
            <v-row>
                <v-col class="pt-0 pb-0 pl-0 pr-0">
                    <v-card class="p-0 ">
                        <v-img  src="../assets/img/PortadaRestaurante.png" >
                            <v-row class="pl-2 pr-2">
                                <v-col class="pb-0" cols="9">
                                    <v-icon color="#fff">mdi-chevron-left</v-icon>
                                </v-col>
                                <v-col cols="1">
                                    <v-icon color="#fff"> mdi-heart-outline</v-icon>
                                </v-col>
                                <v-col cols="1">
                                    <v-icon color="#fff">mdi-share-variant</v-icon>
                                </v-col>
                            </v-row>
                                <v-col class="pb-0 mt-5">
                                    <v-list-item-avatar tile size="70" color="grey lighten-5">
                                        <v-img class="mr-2" src="../assets/img/LogoJohnny.png"></v-img>
                                    </v-list-item-avatar>
                                </v-col>
                                <v-col class="pt-1">
                                    <h2 class="title white--text">Johnny B.Good</h2>
                                    <v-list-item-subtitle class="white--text">24 de septiembre 150</v-list-item-subtitle>
                                </v-col>        
                        </v-img>
                    </v-card>
                </v-col>
            </v-row>
        <!--Categorias-->
            <v-row>
                <v-col class="pb-0">
                    <h2 class="title">Categorias</h2>
                </v-col>
                <v-col>
                    <v-slide-group >
                        <v-slide-item>
                            <v-card class="mr-2 p-0" @click="toggle" max-height="90" max-width="90">
                            <v-img src="../assets/img/carnes.png">
                                <v-card-title>Carnes</v-card-title>
                            </v-img>
                            </v-card>
                        </v-slide-item>
                        <v-slide-item>
                            <v-card class="mx-2" @click="toggle" max-height="90" max-width="90">
                            <v-img src="../assets/img/ensalada.png">
                                <v-card-title>Ensaladas</v-card-title>
                            </v-img>
                            </v-card>
                        </v-slide-item>
                        <v-slide-item>
                            <v-card class="mx-2" @click="toggle" max-height="90" max-width="90">
                            <v-img src="../assets/img/empanada.png">
                                <v-card-title>Empanadas</v-card-title>
                            </v-img>
                            </v-card>
                        </v-slide-item>
                        <v-slide-item>
                            <v-card class="mx-2" @click="toggle" max-height="90" max-width="90">
                            <v-img src="../assets/img/hambur.png">
                                <v-card-title>Empanadas</v-card-title>
                            </v-img>
                            </v-card>
                        </v-slide-item>
                    </v-slide-group>
                </v-col>
            </v-row>
        <!--Productos-->
            <v-row>
                <v-col class="pt-1">
                    <h2 class="title">Carnes</h2>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="pt-0 pb-0"> 
                    <v-card class="mb-4" max-width="380" outlined>
                        <v-list-item three-line >
                            <v-list-item-content class="mr-4 ml-n2 pt-2 pb-2">
                                <v-list-item-title class="headline mb-1 subtitle-1 font-weight-bold">
                                    Milanesa vegana
                                </v-list-item-title>
                                <v-card-subtitle class="caption pa-0">
                                    La mejor milanesa de terneraangus o suprema de pollo
                                </v-card-subtitle>
                                <v-card-subtitle class="caption pa-0">
                                    $200
                                </v-card-subtitle>
                            </v-list-item-content>
                            <v-list-item-avatar tile size="70" color="grey lighten-5" >
                                <v-img class="mr-2" src="../assets/img/LogoJohnny.png"></v-img>
                            </v-list-item-avatar>
                        </v-list-item>
                    </v-card>
                </v-col> 
            </v-row>
            <v-row>
                <v-col class="pt-0 pb-0"> 
                    <v-card class="mb-4" max-width="380" outlined>
                        <v-list-item three-line >
                            <v-list-item-content class="mr-4 ml-n2 pt-2 pb-2">
                                <v-list-item-title class="headline mb-1 subtitle-1 font-weight-bold">
                                    Milanesa vegana
                                </v-list-item-title>
                                <v-card-subtitle class="caption pa-0">
                                    La mejor milanesa de terneraangus o suprema de pollo
                                </v-card-subtitle>
                                <v-card-subtitle class="caption pa-0">
                                    $200
                                </v-card-subtitle>
                            </v-list-item-content>
                            <v-list-item-avatar tile size="70" color="grey lighten-5" >
                                <v-img class="mr-2" src="../assets/img/LogoJohnny.png"></v-img>
                            </v-list-item-avatar>
                        </v-list-item>
                    </v-card>
                </v-col> 
            </v-row>
            <v-row>
                <v-col class="pt-0 pb-0"> 
                    <v-card class="mb-4" max-width="380" outlined>
                        <v-list-item three-line >
                            <v-list-item-content class="mr-4 ml-n2 pt-2 pb-2">
                                <v-list-item-title class="headline mb-1 subtitle-1 font-weight-bold">
                                    Milanesa vegana
                                </v-list-item-title>
                                <v-card-subtitle class="caption pa-0">
                                    La mejor milanesa de terneraangus o suprema de pollo
                                </v-card-subtitle>
                                <v-card-subtitle class="caption pa-0">
                                    $200
                                </v-card-subtitle>
                            </v-list-item-content>
                            <v-list-item-avatar tile size="70" color="grey lighten-5" >
                                <v-img class="mr-2" src="../assets/img/LogoJohnny.png"></v-img>
                            </v-list-item-avatar>
                        </v-list-item>
                    </v-card>
                </v-col> 
            </v-row>
    </v-container>
</template>