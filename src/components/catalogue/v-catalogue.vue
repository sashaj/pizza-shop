<template>
  <div class="v-catalogue">
    <h1 class="v-catalogue__title">Menu</h1>
    <div class="v-catalogue__right">
      <div ref="slider" class="slider"></div>
      <vSelect></vSelect>
    </div>
    <div class="v-catalogue__left">
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
    filteredProducts() {
      if (this.SORTED_PRODUCTS.length) {
        return this.SORTED_PRODUCTS;
      } else {
        return [];
      }
    }
  },
  methods: {
    ...mapActions([
      "GET_PRODUCTS_FROM_API",
      "ADD_TO_CART",
      "NOUISLIDER_CURRENT_VALUES",
      "SEARCH_PRODUCTS",
      "GET_CURRENCY_RATES",
      "FILTER_SEARCH"
    ]),
    addToCart(data) {
      console.log(data);
      this.ADD_TO_CART(data);
    }
  },

  mounted() {
    const slider = this.$refs.slider;
    this.GET_PRODUCTS_FROM_API().then(() => {
      this.FILTER_SEARCH();
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
      connect: true
    });
    this.NOUISLIDER_CURRENT_VALUES(slider.noUiSlider.get());
    slider.noUiSlider.on("change", () => {
      this.NOUISLIDER_CURRENT_VALUES(slider.noUiSlider.get());
      this.FILTER_SEARCH();
    });
    this.GET_CURRENCY_RATES();
    this.$root.$on('refreshUiSlider', () => {
      slider.noUiSlider.updateOptions({
    range: {
        'min': this.NOUISLIDER_CONFIG.rangeStart,
        'max': this.NOUISLIDER_CONFIG.rangeEnd
    }
});
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
h1 {
  text-align: left;
  margin-bottom: 30px;
}

.v-catalogue {
  width: 100%;
  display: flex;
  flex-direction: column;
  &__list {
    width: 100%;
    text-align: left;
  }
  &__left {
  }
  &__right {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-left: 25px;
    padding-right: 25px;
  }
}
.slider {
  margin-left: 10px;
  margin-right: 20px;
  margin-bottom: 30px;
  width: calc(100% - 20px);
}

.slider .noUi-tooltip {
  background: none;
  border: none;
  right: unset;
  top: -30px;
  &:after {
    content: "€";
  }
}

.v-catalogue__title {
  margin-bottom: 50px;
}

.noUi-horizontal .noUi-handle {
  top: -16px;
}
.slider .noUi-handle {
  background-image: url("~@/assets/images/logo.png");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: transparent;
  box-shadow: none;
  height: 45px;
  &:after,
  &:before {
    display: none;
  }
}

.slider__title {
  margin-bottom: 30px;
}

.noUi-connect {
  background-color: #f5e44c;
}

@import "~vue-range-slider/dist/vue-range-slider.scss";
@import "~nouislider/distribute/nouislider.css";
</style>
