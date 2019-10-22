<template>
<v-footer
 fixed
 style="padding:0;"
 >
  <v-bottom-navigation
    :value="activeBtn"
    grow
    color="teal"
  >
    <v-btn @click="$router.push('/')">
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn  @click="$router.push('/rubros')">
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn>
      <v-icon>mdi-heart</v-icon>
    </v-btn>
  </v-bottom-navigation>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer'

};
</script>