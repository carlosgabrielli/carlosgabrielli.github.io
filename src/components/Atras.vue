<template>
  <div>
    <!--Boton atras-->
    <v-row>
      <v-col class="mt-n3">
        <v-avatar class="ml-n1" height="0" width="24" style="min-width: 0 !important">
          <v-icon @click="$router.push('/home')">mdi-chevron-left</v-icon>
        </v-avatar>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Atras"
};
</script>