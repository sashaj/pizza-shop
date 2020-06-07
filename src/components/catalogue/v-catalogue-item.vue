<template>
  <div class="v-catologue-item">
    <v-popup 
      v-if="isPopupVisible"
      @closePopup="closeInfoPopup"
      @rightBtnAction="addToCart"
      rightBtnTitle='add to cart'
      modalTitle='Info'
    > 
      <img
        class="v-catalog-item__image"
        :src="require('../../assets/images/' + product_data.image)"
      />
      <div class='popup__info'>
        <p class="v-catalog-item__name">{{ product_data.name }}</p>
        <p class="v-catalog-item__price">Price: {{ product_data.price }}</p>
        <p class="v-catalog-item__price">Category: {{ product_data.category }}</p>

      </div>
    
    </v-popup>
    <img
      class="v-catalog-item__image"
      :src="require('../../assets/images/' + product_data.image)"
    />
    <p class="v-catalog-item__name">{{ product_data.name }}</p>
    <p class="v-catalog-item__price">Price: {{ product_data.price }}</p>
    <button class="v-catalog-item__show_info" @click="showPopupInfo">
      show info
    </button>
    <button class="v-catalog-item__add_to_cart_btn btn" @click="addToCart">
      add to cart
    </button>
  </div>
</template>

<script>
import vPopup from "../popup/v-popup";
export default {
  name: "v-catalogue-item",
  components: {
    vPopup,
  },

  props: {
    product_data: {
      type: Object,
      default: function() {
        return {};
      },
    },
  },
  methods: {
    addToCart() {
      this.$emit("addToCart", this.product_data);
    },
    closeInfoPopup(){
      this.isPopupVisible = false
    },
    showPopupInfo() {
      this.isPopupVisible = true;
    },
  },
  data() {
    return {
      isPopupVisible: false,
      
    };
  },
};
</script>

<style lang="scss">

.v-catologue-item {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #e9e9e9;
  padding: $padding;
  margin-bottom: $margin;
  margin: 15px;
  .v-catalog-item__image {
    width: 100px;
  }
}
</style>
