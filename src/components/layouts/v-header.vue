<template>
  <div class="v-header">
    <router-link :to="{name: 'main-page'}">
      <i class="material-icons logo">local_pizza</i>
    </router-link>
    <div class="search__wrapper">
      <input
        type="text"
        name
        class="search-field"
        v-model="searchValue"
        placeholder="Search by name"
      />
      <button class="seach_btn">
        <i class="material-icons" @click="search(searchValue)">search</i>
      </button>
    </div>
    <router-link :to="{ name: 'cart' }" class="v-header__link-to-cart">
      <i class="material-icons">shopping_basket</i>
      {{ TOTAL_CART_ITEMS }}
    </router-link>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "v-header",
  data() {
    return {
      searchValue: ""
    };
  },
  methods: {
    ...mapActions([
      "SET_SEARCH_VALUE",
      "SORT_BY_CATEGORIES",
      "SEARCH_PRODUCTS"
    ]),
    search(value) {
      this.SET_SEARCH_VALUE(value);
      if (value) {
        this.SEARCH_PRODUCTS();
      }
      if (this.$route.path !== "/catalogue") {
        this.$router.push("/catalogue");
      }
    }
  },
  computed: {
    ...mapGetters(["TOTAL_CART_ITEMS"])
  }
};
</script>

<style lang='scss'>
* {
  box-sizing: border-box;
}
.v-header {
  display: flex;
  align-items: center;
  padding: 16px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;

  .search-field {
    height: 45px;
    padding-left: 15px;
    font-size: 15px;
  }
  .search__wrapper {
    color: black;
    display: flex;
    position: relative;
  }
  .logo {
    font-size: 80px;
    color: #f6a834;
    transform: rotate(0deg);
  }
  .v-header__link-to-cart {
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    // padding-left: 15px;
    // padding-right: 15px;
    width: 90px;
    border: solid 1px gray;
    margin-left: auto;
    .material-icons {
      margin-right: 15px;
    }
  }
  .seach_btn {
    // position: absolute;
    // right: 15px;
    // top: 50%;
    // transform: translateY(-45%);
  }
}
</style>