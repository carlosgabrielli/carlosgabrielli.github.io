<template>
  <v-app>
    <AppToolbar/>


    <v-footer fixed class="justify-space-between" color="#FFD800"> 
      <v-row justify="space-between" align="center">

      <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
      </v-btn>
      </v-row>
    </v-footer>


    <v-content>

    </v-content>
  </v-app>
</template>

<script>
import AppToolbar from "@/components/AppToolbar.vue"

export default {
  name: 'App',
  components: {
    AppToolbar
  }
};
</script>
