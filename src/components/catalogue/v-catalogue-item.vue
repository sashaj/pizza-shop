<template>
  <div class="v-catologue-item">
    <v-popup 
      v-if="isPopupVisible"
      @closePopup="closeInfoPopup"
      @rightBtnAction="addToCart"
      rightBtnTitle='add to cart'
      modalTitle='Info'
    > 
      <div class="v-catalogue-item__image-wrapper">
        <img
          class="v-catalogue-item__image"
          :src="require('../../assets/images/' + product_data.image)"
        />
      </div>
      <div class='popup__info'>
        <p class="v-catalogue-item__name">{{ product_data.name }}</p>
        <p class="v-catalogue-item__price">Price: {{ product_data.price }}</p>
        <p class="v-catalogue-item__price">Category: {{ product_data.category }}</p>
      </div>
    
    </v-popup>
    <div class="v-catalogue-item__image-wrapper">
      <img
        class="v-catalogue-item__image"
        :src="require('../../assets/images/' + product_data.image)"
      />
    </div>
    <p class="v-catalogue-item__name">{{ product_data.name }}</p>
    <p class="v-catalogue-item__price">Price: {{ product_data.price }}</p>
    <button class="v-catalogue-item__show_info" @click="showPopupInfo">
      show info
    </button>
    <button class="v-catalogue-item__add_to_cart_btn btn" @click="addToCart">
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
  width: 20%;  
  padding: $padding;
  margin-bottom: $margin;
  margin: 15px;

}

.v-catalogue-item__image-wrapper {
  width: 100%;
}
</style>
