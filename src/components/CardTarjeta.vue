<template>
    <div>
            <v-row>
      <v-col>
        <v-card class="lista-locales mb-4" outlined>
          <v-list-item three-line>
            <v-list-item-avatar
              tile
              size="70"
              color="shadow-xs border-radius-10"
            >
              <v-img src="../assets/img/logo_club_milanesa.png"></v-img>
            </v-list-item-avatar>
            <v-btn icon class="pos-left-card">
              <h3>$405</h3>
            </v-btn>
            <v-list-item-content class="mr-4 ml-n2">
              <v-list-item-title
                class="headline mb-1 subtitle-1 font-weight-bold"
                >El Club de la Milanesa</v-list-item-title
              >
              <v-list-item-subtitle class="subtitle-2 font-weight-regular"
                >La revoltosa</v-list-item-subtitle
              >
              <v-card-subtitle class="caption pa-0"
                >25 de noviembre a las 21:00hs</v-card-subtitle
              >
              <v-card-actions class="pl-0">
                <v-chip color="#29CC97" class="color-white">Entregado</v-chip>
              </v-card-actions>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
    </div>
</template>