<template>
  <div id="app">
    <vMainWrapper />
  </div>
</template>

<script>
import vMainWrapper from "./components/v-main-wrapper";

export default {
  name: "App",
  components: {
    vMainWrapper,
  },
};
</script>

<style>
#app {
  font-family: "FiraSans Light";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 145px;
}
</style>
