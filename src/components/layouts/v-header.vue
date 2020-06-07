<template>
  <div class="v-header">
      <router-link :to="{name: 'main-page'}">
        <img src="../../assets/images/wutang.jpg" alt="">
      </router-link>
      <div class="search__wrapper">
        <input
         type="text" name="" 
         class='search-field'
         v-model='searchValue'
         >
        <button class="seach_btn" >
            <i class="material-icons" @click='search(searchValue)'>search</i>
        </button>

      </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: 'v-header',
    data(){
        return {
            searchValue: ''
        }
    },
    methods: {
        ...mapActions([
            'SET_SEARCH_VALUE',
            'SORT_BY_CATEGORIES',
            'SEARCH_PRODUCTS'
        ]),
        search(value){
            this.SET_SEARCH_VALUE(value);
            if(value){
                this.SEARCH_PRODUCTS();   
            }
            if (this.$route.path !== '/catalogue') {
                this.$router.push('/catalogue');
            }
        }
    },
    computed: {
        // ...mapGetters([
        //     'SEARCH_VALUE'
        // ])
    }
}
</script>

<style lang='scss'>
*{
    box-sizing: border-box;
}
.v-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: black;
    padding: 16px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 3;
img {
    width: 100px;

}
.search-field{
    padding: 16px;
    height: 31px;
}
.search__wrapper{
    padding: 16px;
    color: black;
    margin-right: 50px;
    display: flex;
}
}
</style>