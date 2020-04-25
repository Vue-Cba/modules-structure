<template>
    <div>
        <h1>Autores</h1>
        <!--<AuthorCreate v-if="buildCreate"/>-->
        <!--<AuthorEdition v-if="buildEdition"/>-->
        <!--<AuthorDetail v-if="buildDetail"/>-->
        <AuthorTable v-if="buildTable"/>
    </div>
</template>

<script>
//import {CreateBuilder, CreateDirector} from '../../core/builders/creation'
//import {EditionBuilder, EditionDirector} from '../../core/builders/edition'
//import {DetailBuilder, DetailDirector} from '../../core/builders/detail'
import TableBuilder from '../../core/builders/table/table.builder'
import TableDirector from '../../core/builders/table/table.director'

export default {
    name: 'Authors',
    components: {
        /*AuthorCreate: new CreateDirector(
            new CreateBuilder
        ).makeAuthorCreate(),
        AuthorEdition: new EditionDirector(
            new EditionBuilder
        ).makeAuthorEdition(),
        AuthorDetail: new DetailDirector(
            new DetailBuilder
        ).makeAuthorDetail(),*/
        AuthorTable: new TableDirector(
            new TableBuilder
        ).authors()
    },
    computed: {
        buildCreate (){
            return this.$route.meta.type && this.$route.meta.type === 'create'
        },
        buildEdition (){
            return this.$route.meta.type && this.$route.meta.type === 'update'
        },
        buildDetail (){
            return this.$route.meta.type && this.$route.meta.type === 'detail'
        },
        buildTable (){
            return this.$route.meta.type && this.$route.meta.type === 'table'
        }
    }
    
}
</script>