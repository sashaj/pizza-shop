<template>
  <div class="v-catologue-item">
    <v-popup v-if="isPopupVisible" @closePopup="closeInfoPopup">
      <div class="v-popup-item">
        <div class="v-popup-item__image-wrapper">
          <img
            class="v-catalogue-item__image"
            :src="require('../../assets/images/' + product_data.image)"
          />
        </div>
        <p class="v-popup-item__name">{{ product_data.name }}</p>
        <p class="v-popup-item__description">
          {{ product_data.description }}
        </p>
        <div class="v-popup-item__info">
          <p class="v-popup-item__price">Price: {{ product_data.price }}€</p>
          <p class="v-popup-item__size">Size: {{ product_data.category }}</p>
          <p class="v-popup-item__size">
            Calories: {{ getRandomInfo[0] }}kcal.
          </p>
          <p class="v-popup-item__size">Weight: {{ getRandomInfo[1] }}g.</p>
        </div>
        <button
          class="v-catalogue-item__add_to_cart_btn btn"
          @click="addToCart"
        >
          <i class="material-icons">add_shopping_cart</i>
        </button>
      </div>
    </v-popup>
    
    <div class="v-catalogue-item__image-wrapper" @click="showPopupInfo">
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
      <button class="v-catalogue-item__show_info btn" @click="showPopupInfo">
        <i class="material-icons">info</i>
      </button>
      <button class="v-catalogue-item__add_to_cart_btn btn" @click="addToCart">
        <i class="material-icons">add_shopping_cart</i>
      </button>
    </div>
  </div>
</template>

<script>
import vPopup from "../popup/v-popup";
export default {
  name: "v-catalogue-item",
  components: {
    vPopup,
  },
  data() {
    return {
      isPopupVisible: false,
    };
  },
  props: {
    product_data: {
      type: Object,
      default: function () {
        return {};
      },
    },
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
    },
    getRandomInt(min, max) {
      return parseInt(Math.random() * (max - min) + min);
    },
  },
  computed: {
    getRandomInfo() {
      switch (this.product_data.category) {
        case "small":
          return [this.getRandomInt(220, 300), this.getRandomInt(390, 410)];
        case "medium":
          return [this.getRandomInt(350, 450), this.getRandomInt(590, 610)];
        case "big":
          return [this.getRandomInt(500, 470), this.getRandomInt(740, 750)];
        default:
          return 0;
      }
    },
  },
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
  @media (max-width: 1000px){
    width: 25%;
  }
  @media (max-width: 768px){
    width: 33%;
  }
  @media (max-width: 600px){
    width: 50%;
  }
  @media (max-width: 400px){
    width: 100%;
  }
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
  cursor: pointer;
}

.v-catalogue-item__name {
  font-family: "FiraSans";
  margin-bottom: 20px;
  text-align: left;
  font-size: 15px;
  height: 36px;
}

.v-catalogue-item__description {
  text-align: left;
  height: 95px;
  margin-bottom: 15px;
  overflow: hidden;
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
  border-radius: 2px;
  padding: 0px 12px;
  overflow: hidden;
  background: rgb(255, 255, 255);
  border-width: 1px;
  border-style: solid;
  border-color: #80807e;
  display: flex;
  justify-self: center;
  align-items: center;
}

.btn:hover {
  color: black;
  border-color: black;
}

.v-catalogue-time__btns {
  display: flex;
  justify-content: space-between;
}

.v-popup-item__image-wrapper {
  width: 250px;
  margin: 0 auto 20px;
}

.v-popup-item {
  // display: flex;
  // align-items: center;
  // flex-direction: column;
}

.v-popup-item__info {
  display: flex;
  flex-direction: column;
}

.v-popup-item__name {
  align-self: flex-start;
  font-family: "FiraSans";
  margin-bottom: 20px;
  text-align: left;
  font-size: 15px;
}
.v-popup-item__info {
  align-self: flex-start;
}

.v-popup-item__price {
  font-size: 15px;
  text-align: left;
}
.v-popup-item__description {
  max-width: 350px;
  text-align: left;
  margin-bottom: 30px;
}

.v-popup-item__info p {
  text-align: left;
  margin-bottom: 5px;
  font-size: 17px;
}

.v-popup .v-catalogue-item__add_to_cart_btn {
  margin-left: auto;
  margin-right: unset;
}
</style>
