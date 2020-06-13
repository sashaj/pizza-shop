<template>
  <div class="v-header">
    <div class="v-header__left">
      <router-link :to="{name: 'main-page'}">
        <div class="logo__wrapper">
         <img :src="require('../../assets/images/logo.png')" alt="">
        </div>
      </router-link>
      <span class="v-header__logo-title">Alonso</span>

    </div>
    <div class="v-header__right">
      <router-link :to="{name: 'catalogue' }" v-if="$route.name=='cart'">   
            <div class="v-header__link-to-catalogue btn">To Menu</div>
      </router-link>
      <div class="search__wrapper" v-if="$route.name=='catalogue'">    
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
      <router-link :to="{ name: 'cart' }" class="v-header__link-to-cart btn" v-if="$route.name=='catalogue'">
        <i class="material-icons">shopping_basket</i>
        {{ TOTAL_CART_ITEMS }}
      </router-link>

    </div>
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
  },
  mounted(){
    console.log(this.$route)
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
    border: 1px solid #80807e;
  }
  .search__wrapper {
    color: black;
    display: flex;
    position: relative;
    margin-right: 30px;
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
    width: 90px;
    border: solid 1px #80807e;

    .material-icons {
      margin-right: 15px;
      color: #80807e;
      &:hover{
        color: black;
      }
    }
  }
  .seach_btn {
   border: 1px solid #80807e;
   border-left: none;
   width: 35px;
   display: flex;
   justify-content: center;
   align-items: center;
  }
  .v-header__right{
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
  .logo__wrapper{
    width: 80px;
  }
}

.v-header .v-header__link-to-catalogue{
    border: solid 1px gray;
    height: 45px;
    margin-right: 30px;
}

.v-cart-item__name{
  text-align: left;
  width: 30%;
  margin-right: 15px;
}
</style>