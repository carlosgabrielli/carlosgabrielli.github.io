<template>
  <v-footer app fixed style="padding:0;">
    <v-bottom-navigation grow color="teal">
      <v-btn @click="$router.push('/home')">
        <v-icon>mdi-home-outline</v-icon>
      </v-btn>

      <v-btn @click="$router.push('/filtros')">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn>
        <v-icon>mdi-heart-outline</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>