<template>
    <div>
        <v-app-bar
          app
          dark
          class="d-flex navbar justify-start"
        >
            <v-toolbar-title class="d-flex navbar-brand">
                <img src="../assets/isologo.png" class="navbar-brand-image"/>
                <v-spacer/>
                <span class="ml-3 body-2">Estructura escalable basada en módulos</span>
            </v-toolbar-title>
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
            &-image
                max-height: 20px
</style>
