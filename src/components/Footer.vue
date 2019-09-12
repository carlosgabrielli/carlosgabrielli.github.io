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
    <v-btn>
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn>
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