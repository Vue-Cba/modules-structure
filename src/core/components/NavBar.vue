<template>
    <div>
        <v-app-bar
          app
          color="indigo"
          dark
          class="d-flex navbar"
        >
            <v-toolbar-title class="d-flex navbar-brand">
                <img src="../assets/isologo.png" class="navbar-brand-image"/>
                <v-spacer/>
                <span class="caption">Estructura de módulos</span>
            </v-toolbar-title>
            <v-spacer/>
            <v-btn
                class="navbar-button"
            >
              Administrador
            </v-btn>
        </v-app-bar>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="sass" scoped>
    .navbar
        &-brand
            width: 20%
            &-image
                max-height: 20px
</style>
