<template>
  <div>
    <!--Promociones-->
    <promos-principales />
    <div class="mt-4">
      <h4>Descuentos en cafeterias</h4>
      <v-row>
        <v-col class="px-0 mt-3">
          <v-slide-group>
            <v-slide-item>
              <v-card class="mx-auto promos-principales mr-4 mb-4 shadow-md" width="290">
                <template slot="progress">
                  <v-progress-linear
                    color="deep-purple"
                    height="10"
                    indeterminate
                  ></v-progress-linear>
                </template>

                <v-img
                  height="150"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fphotos%2Ftwo-cups-of-coffee-on-a-wooden-table-the-girl-holds-in-her-hand-one-picture-id954069476%3Fk%3D6%26m%3D954069476%26s%3D170667a%26w%3D0%26h%3Dn1jHj2IUg0eZZ_TwHMiT-QX_j3Am97adTUvk-u2kCv0%3D&f=1&nofb=1"
                ></v-img>

                <v-card-title>Cafe Badilico 2x1</v-card-title>

                <v-card-text>
                  <div class="mb-3 mt-0 subtitle-1">$100</div>

                  <div>
                    Espresso, leche con salsa de dulce de leche, crema y salsa
                    de dulce de leche.
                  </div>
                </v-card-text>
              </v-card>
            </v-slide-item>
            <v-slide-item>
              <v-card class="mx-auto promos-principales mr-4 mb-4 shadow-md" width="290">
                <template slot="progress">
                  <v-progress-linear
                    color="deep-purple"
                    height="10"
                    indeterminate
                  ></v-progress-linear>
                </template>

                <v-img
                  height="150"
                  src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fperudelights.com%2Fwp-content%2Fuploads%2F2012%2F09%2FAlfajores-10.jpg&f=1&nofb=1"
                ></v-img>

                <v-card-title>3x2 Alfajores</v-card-title>

                <v-card-text>
                  <div class="mb-3 mt-0 subtitle-1">$450</div>

                  <div>
                    Dos galletitas rellenas con dulce de leche y una exquisita
                    cobertura de merengue italiano.
                  </div>
                </v-card-text>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import PromosPrincipales from "@/components/PromosPrincipales";

export default {
  name: "Home",
  components: {
    PromosPrincipales,
  },
};
</script>