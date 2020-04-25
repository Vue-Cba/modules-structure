<template>
  <div>
    <NavBar></NavBar>
    <v-content class="scrollableContent">
      <v-breadcrumbs :items="items" divider="/"></v-breadcrumbs>
      <router-view></router-view>
    </v-content>
  </div>
</template>

<script>
import NavBar from "./components/NavBar"

export default {
  name: "Base",
  components: {
    NavBar
  },
  computed: {
    items(){
      return this.$route.meta.breadcrumb
    }
  }
};
</script>
