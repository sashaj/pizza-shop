<template>
  <div class="v-main-wrapper">
    <vHeader></vHeader>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import vHeader from "./layouts/v-header.vue";
export default {
  name: "v-main-wrapper",
  components: {
    vHeader,
  },
  data: function () {
    return {
      title: "Main wrapper",
    };
  },
};
</script>

<style scoped>
.v-main-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  flex-direction: column;
  max-width: 1250px;
  padding: 0 25px;
  padding-top: 40px;
}
</style>
