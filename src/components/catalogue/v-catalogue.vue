<template>
  <div class="v-catalogue">
    <router-link :to="{ name: 'cart', params: { cart_data: CART } }">
      <div class="v-catalogue__link-to-cart">Cart: {{ CART.length }}</div>
    </router-link>
    <h1>Catalog</h1>
    <vSelect></vSelect>
    <div ref="slider" class='slider'></div>
    <p>selected: {{ SELECTED_OPTION }}</p>
    <div class="v-catalogue__list">
      <vCatalogueItem
        v-for="product in SORTED_PRODUCTS"
        :key="product.article"
        :product_data="product"
        @addToCart="addToCart"
      />
      <p v-if="!SORTED_PRODUCTS.length">Nothing found with selected search terms</p>
    </div>
  </div>
</template>

<script>
import vCatalogueItem from "./v-catalogue-item";
import vSelect from "../v-select";
import { mapActions, mapGetters } from "vuex";
import noUiSlider from "nouislider";

export default {
  name: "v-catalogue",
  components: {
    vCatalogueItem,
    vSelect
  },
  computed: {
    ...mapGetters([
      "PRODUCTS",
      "CART",
      "SELECTED_OPTION",
      "SORTED_PRODUCTS",
      "NOUISLIDER_CONFIG",
      "SEARCH_VALUE"
    ]),
    filteredProducts(){
      if (this.SORTED_PRODUCTS.length){
        return this.SORTED_PRODUCTS
      } else{
        return [];
      }
    }
  },
  methods: {
    ...mapActions([
      "GET_PRODUCTS_FROM_API", 
      "ADD_TO_CART",
      'SORT_BY_CATEGORIES',
      "NOUISLIDER_CURRENT_VALUES",
      "SEARCH_PRODUCTS",
      "SLIDER_SEARCH",
      ]),
    addToCart(data) {
      console.log(data);
      this.ADD_TO_CART(data);
    },

  },

  mounted() { 
    const slider = this.$refs.slider;
    this.GET_PRODUCTS_FROM_API()
      .then(()=>{
        this.SORT_BY_CATEGORIES();
      }); 
      noUiSlider.create(slider, {
        start: [this.NOUISLIDER_CONFIG.start, this.NOUISLIDER_CONFIG.end],
        range: {
          min: this.NOUISLIDER_CONFIG.rangeStart,
          max: this.NOUISLIDER_CONFIG.rangeEnd
        },
        tooltips: this.NOUISLIDER_CONFIG.tooltips,
        step: this.NOUISLIDER_CONFIG.step
      });
      this.NOUISLIDER_CURRENT_VALUES(slider.noUiSlider.get());
      slider.noUiSlider.on("change", ()=> {
        this.NOUISLIDER_CURRENT_VALUES(slider.noUiSlider.get());
        this.SLIDER_SEARCH();
      });           
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.v-catalogue {
  width: 100%;
  &__list {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
}
.slider{
  width: 90%;
  margin: 0 auto;
}
.v-catalogue__link-to-cart {
  position: absolute;
  top: 102px;
  right: 10px;
  padding: $padding * 2;
  border: solid 1px gray;
}
#slider {
  width: 400px;
  margin-left: auto;
}
@import "~vue-range-slider/dist/vue-range-slider.scss";
@import "~nouislider/distribute/nouislider.css";
</style>
