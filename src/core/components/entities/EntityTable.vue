<template>

    <h1 v-if="showActions">Está vivo!!</h1>
    
</template>

<script>
export default {
    name: 'EntityTable',
    props: {
        headers: {
            default: ()=>[],
            type: Array,
        },
        items: {
            default: ()=>[],
            type: Array,
        },
        showActions: {
            default: false,
            type: Boolean
        }
    },
}
</script>