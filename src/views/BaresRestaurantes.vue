<template>
    <v-container>
        <v-row>
            <v-col>
                <v-icon>fas fa-edit</v-icon>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <h2 class="title">Restaurantes</h2>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" sm="6">
                <v-text-field
                    v-model="message3"
                    filled
                    label="Buscar..."
                    clearable
                ></v-text-field>
            </v-col>
            <v-col>
                <v-icon>fas fa-edit</v-icon>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-slide-group>
                <v-slide-item>
                    <v-img class="mr-2" src="../assets/img/promoHamburguesa.jpg"></v-img>
                </v-slide-item>
                <v-slide-item>
                    <v-img class="ml-2" src="../assets/img/promoCerveza.jpg"></v-img>
                </v-slide-item>
                </v-slide-group>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <h2 class="title">Categorias</h2>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card class="mb-4" max-width="380" outlined>
                <v-list-item three-line>
                    <v-list-item-avatar tile size="70" color="grey lighten-5">
                        <v-img class="mr-2" src="../assets/img/LogoJohnny.png"></v-img>
                    </v-list-item-avatar>
                    <v-btn icon class="btn-heart">
                    <v-icon size="16">mdi-heart-outline</v-icon>
                    </v-btn>
                    <v-list-item-content class="mr-4 ml-n2">
                    <v-list-item-title
                        class="headline mb-1 subtitle-1 font-weight-bold"
                    >El club de la milanesa</v-list-item-title>
                    <v-list-item-subtitle class="subtitle-2 font-weight-regular">Ensaladas, Hamburguesas</v-list-item-subtitle>
                    <v-card-subtitle class="caption pa-0">Av. Hipolito Yrigoyen 320 - 2km</v-card-subtitle>
                    </v-list-item-content>
                </v-list-item>
                </v-card>
            </v-col>
                <v-col>
                <v-card class="mb-4" max-width="380" outlined>
                <v-list-item three-line>
                    <v-list-item-avatar tile size="70" color="grey"></v-list-item-avatar>
                    <v-btn icon class="btn-heart">
                    <v-icon size="16">mdi-heart-outline</v-icon>
                    </v-btn>
                    <v-list-item-content class="mr-4 ml-n2">
                    <v-list-item-title
                        class="headline mb-1 subtitle-1 font-weight-bold"
                    >El club de la milanesa</v-list-item-title>
                    <v-list-item-subtitle class="subtitle-2 font-weight-regular">Ensaladas, Hamburguesas</v-list-item-subtitle>
                    <v-card-subtitle class="caption pa-0">Av. Hipolito Yrigoyen 320 - 2km</v-card-subtitle>
                    </v-list-item-content>
                </v-list-item>
                </v-card>
            </v-col>
                <v-col>
                <v-card class="mb-4" max-width="380" outlined>
                <v-list-item three-line>
                    <v-list-item-avatar tile size="70" color="grey"></v-list-item-avatar>
                    <v-btn icon class="btn-heart">
                    <v-icon size="16">mdi-heart-outline</v-icon>
                    </v-btn>
                    <v-list-item-content class="mr-4 ml-n2">
                    <v-list-item-title
                        class="headline mb-1 subtitle-1 font-weight-bold"
                    >El club de la milanesa</v-list-item-title>
                    <v-list-item-subtitle class="subtitle-2 font-weight-regular">Ensaladas, Hamburguesas</v-list-item-subtitle>
                    <v-card-subtitle class="caption pa-0">Av. Hipolito Yrigoyen 320 - 2km</v-card-subtitle>
                    </v-list-item-content>
                </v-list-item>
                </v-card>
            </v-col>
                <v-col>
                <v-card class="mb-4" max-width="380" outlined>
                <v-list-item three-line>
                    <v-list-item-avatar tile size="70" color="grey"></v-list-item-avatar>
                    <v-btn icon class="btn-heart">
                    <v-icon size="16">mdi-heart-outline</v-icon>
                    </v-btn>
                    <v-list-item-content class="mr-4 ml-n2">
                    <v-list-item-title
                        class="headline mb-1 subtitle-1 font-weight-bold"
                    >El club de la milanesa</v-list-item-title>
                    <v-list-item-subtitle class="subtitle-2 font-weight-regular">Ensaladas, Hamburguesas</v-list-item-subtitle>
                    <v-card-subtitle class="caption pa-0">Av. Hipolito Yrigoyen 320 - 2km</v-card-subtitle>
                    </v-list-item-content>
                </v-list-item>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
  name: "BaresRestaurantes",
  components: {}
};
</script>
