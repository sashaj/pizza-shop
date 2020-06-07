<template>
  <div class="v-select">
    <p class="v-select__title" @click="TOGGLE_OPTIONS_VISIBILITY()">{{SELECTED_OPTION}}</p>
    <div class="options" v-if="ARE_OPTIONS_VISIBLE">
      <p v-for="option in SELECT_OPTIONS" :key="option.value" @click="SORT_BY_CATEGORIES(option)">{{option.name}}</p>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';


export default {
  name: "v-select",
  computed:{
      ...mapGetters([
        "SELECT_OPTIONS",
        "SELECTED_OPTION",
        'ARE_OPTIONS_VISIBLE',
    ]),
  },
  methods: {
      ...mapActions([
          'GET_PRODUCTS_FROM_API',
          'TOGGLE_OPTIONS_VISIBILITY',
          'OPTION_SELECT',
          'TURNOFF_SELECT_VISIBILITY',
          'SORT_BY_CATEGORIES',
      ]),
  },

  mounted() {
    document.addEventListener("click", this.TURNOFF_SELECT_VISIBILITY, true);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.TURNOFF_SELECT_VISIBILITY);
  }
};
</script>

<style>
.v-select {
  position: relative;
  width: 200px;
  cursor: pointer;
}
.v-select__title {
  border: solid 1px gray;
}

.options {
  border: solid 1px gray;
  position: absolute;
  top: 30px;
  right: 0;
  width: 100%;
  z-index: 2;
  background: white;
}
.v-select__title{
  margin-bottom: 80px;
}
.options p:hover {
  background: #e7e7e7;
}
</style>