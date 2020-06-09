<template>
  <div class="v-catalogue">

    <div class="v-catalogue__left">
          <h1>Menu</h1>
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

    <div class="v-catalogue__right">
      <vSelect></vSelect>
      <div ref="slider" class='slider'></div>
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
      "SEARCH_VALUE",
      "TOTAL_CART_ITEMS"
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
        step: this.NOUISLIDER_CONFIG.step,
        format: {
          from: function(value) {
                  return parseInt(value);
              },
          to: function(value) {
                  return parseInt(value);
              }
        },
      direction: 'rtl',
      orientation: 'vertical',
      connect: true
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
body {
    font-family: "FiraSans Light";
}
h1{
  text-align: left;
  margin-bottom: 30px;
}

.v-catalogue {
  width: 100%;
  display: flex;
  &__list {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    align-items: center;
    text-align: center;
    justify-content: space-between;
  }
  &__left {
    
  }
  &__right{
    display: flex;
    flex-direction: column;
  }
}
.slider{

  margin-right: 50px;
  margin-left: 20px;
  height: 400px;
}



.slider .noUi-tooltip{
  background: none;
  border: none;
  transform: rotate(-90deg);
  right: unset;
  top: -50px;
}
.noUi-handle{
  cursor: pointer;
  transform: rotate(90deg);
}
@import "~vue-range-slider/dist/vue-range-slider.scss";
@import "~nouislider/distribute/nouislider.css";
</style>
