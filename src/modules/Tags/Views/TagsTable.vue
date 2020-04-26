<template>
    <div class="container">
        <h2>Tabla de Tags</h2>
        <div class="d-flex justify-space-around align-center mt-10">
            <v-btn @click="redirect('/tags/create')">Crear</v-btn>
            <v-btn @click="redirect('/tags/update')">Editar</v-btn>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        redirect(route){
            this.$router.push(route)
        }
    }
}
</script>

<style scoped>
    .container{
        width: 50%
    }
</style>