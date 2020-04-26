<template>
    <div class="container">
        <div class="d-flex justify-space-around align-center">
            <v-btn @click="redirect('/posts')">Posts</v-btn>
            <v-btn @click="redirect('/authors')">Authors</v-btn>
            <v-btn @click="redirect('/tags')">Tags</v-btn>
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
