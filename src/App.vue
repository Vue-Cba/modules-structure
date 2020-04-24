<template>
  <div id="app">
    <Base/>
  </div>
</template>

<script>
import Base from "./core/Base";

export default {
  name: "App",
  components: {
    Base
  }
};
</script>

<style>
#app {
  margin: 0;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
