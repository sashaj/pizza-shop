<template>
  <div class="v-select__wrapper">
    <p class="v-select__title">Group by size:</p>
    <div class="v-select">
      <p class="v-select__default-option" @click="TOGGLE_OPTIONS_VISIBILITY()">{{SELECTED_OPTION}}</p>
      <div class="v-select__options" v-if="ARE_OPTIONS_VISIBLE">
        <p v-for="option in SELECT_OPTIONS" :key="option.value" @click="launchFilterSearch(option);">{{option.name}}</p>
      </div>
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
        "NOUISLIDER_CURRENT_VALUES"
    ]),
  },
  methods: {
      ...mapActions([
          'GET_PRODUCTS_FROM_API',
          'TOGGLE_OPTIONS_VISIBILITY',
          'OPTION_SELECT',
          'TURNOFF_SELECT_VISIBILITY',
          "FILTER_SEARCH",
      ]),
    launchFilterSearch(option){
      this.OPTION_SELECT(option);
      this.FILTER_SEARCH();
    }
  },

  mounted() {
    document.addEventListener("click", this.TURNOFF_SELECT_VISIBILITY, true);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.TURNOFF_SELECT_VISIBILITY);
  }
};
</script>

<style scoped>

.v-select__wrapper{
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.v-select {
  position: relative;
  min-width: 100px;
  cursor: pointer;

}

.v-select__title{
  margin-bottom: 20px;
}
.v-select__default-option {
  border: solid 1px gray;
  padding: 10px;
}

.v-select__options {
  border: solid 1px gray;
  border-top: none;
  position: absolute;
  top: 100%;
  right: 0;
  width: 100%;
  z-index: 2;
  background: white;
}

.v-select__options p {
  padding: 10px;
  margin: 0;
}

.v-select__options p:hover {
  background: #e7e7e7;
}


</style>