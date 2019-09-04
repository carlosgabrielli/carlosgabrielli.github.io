<template>
    <v-toolbar class="justify-space-between" color="#FFD800">
        <v-row justify="space-between" align="center">
        <v-btn icon>
            <v-icon>mdi-account-outline</v-icon>
        </v-btn>

            <v-avatar>
            <img src="../src/assets/img/icon-definitivo.png" alt="">
            </v-avatar>

        <v-btn icon fab>
            <v-icon>mdi-bell-outline</v-icon>
        </v-btn>
        </v-row>
    </v-toolbar>

</template>

<script>
export default {
  name: 'AppToolbar'

};
</script>