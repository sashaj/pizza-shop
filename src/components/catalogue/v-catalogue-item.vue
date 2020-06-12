<template>
  <div class="v-catologue-item">
    <v-popup
      v-if="isPopupVisible"
      @closePopup="closeInfoPopup"
      @rightBtnAction="addToCart"
      rightBtnTitle="add to cart"
      modalTitle="Info"
    >
      <div class="v-catalogue-item__image-wrapper">
        <img
          class="v-catalogue-item__image"
          :src="require('../../assets/images/' + product_data.image)"
        />
      </div>
      <div class="popup__info">
        <p class="v-catalogue-item__name">{{ product_data.name }}</p>
        <p class="v-catalogue-item__price">{{ product_data.price }}</p>
        <p class="v-catalogue-item__price">Category: {{ product_data.category }}</p>
      </div>
    </v-popup>
    <div class="v-catalogue-item__image-wrapper">
      <img
        class="v-catalogue-item__image"
        :src="require('../../assets/images/' + product_data.image)"
      />
    </div>
    <div class="v-catalogue-item__main-info">
      <p class="v-catalogue-item__name">{{ product_data.name }}</p>
      <p class="v-catalogue-item__price">{{ product_data.price }}</p>
    </div>

    <p class="v-catalogue-item__description">{{ product_data.description }}</p>
    <div class="v-catalogue-time__btns">
      <button class="v-catalogue-item__show_info btn" @click="showPopupInfo">show info</button>
      <button class="v-catalogue-item__add_to_cart_btn btn" @click="addToCart">Add to cart</button>
    </div>
  </div>
</template>

<script>
import vPopup from "../popup/v-popup";
export default {
  name: "v-catalogue-item",
  components: {
    vPopup
  },

  props: {
    product_data: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  methods: {
    addToCart() {
      this.$emit("addToCart", this.product_data);
    },
    closeInfoPopup() {
      this.isPopupVisible = false;
    },
    showPopupInfo() {
      this.isPopupVisible = true;
    }
  },
  data() {
    return {
      isPopupVisible: false
    };
  }
};
</script>

<style lang="scss">
.v-catologue-item {
  width: 20%;
  padding: $padding;
  margin-bottom: $margin;
  padding: 25px;
  display: inline-block;
  text-align: center;
  vertical-align: inherit;
}
.v-catalogue-item__price {
  text-align: right;
    font-family: "FiraSans";
  font-size: 15px;

  &:after {
    content: "€";
  }
}

.v-catalogue-item__image-wrapper {
  width: 100%;
}

.v-catalogue-item__name {
  font-family: "FiraSans";
  margin-bottom: 20px;
  text-align: left;
    font-size: 15px;

}

.v-catalogue-item__description {
  text-align: left;
  height: 76px;
  margin-bottom: 15px;
}

.v-catalogue-item__main-info {
  display: flex;
  justify-content: space-between;
}

.btn {
  font-size: 14px;
  height: 40px;
  line-height: 40px;
  position: relative;
  cursor: pointer;
  user-select: none;
  transition-property: border-color, background, color;
  transition-duration: 200ms;
  transition-timing-function: ease-in-out;
  color: #80807e;
  outline: none;
  border-radius: 8px;
  padding: 0px 12px;
  overflow: hidden;
  background: rgb(255, 255, 255);
  border-width: 1px;
  border-style: solid;
  border-color: #80807e;
}

.v-catalogue-time__btns {
  display: flex;
  justify-content: space-between;
}
</style>
