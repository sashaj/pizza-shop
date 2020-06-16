<template>
  <div class="v-cart-item">
    <div class="v-cart-item__left">
      <div class="v-cart-item__image-wrapper">
        <img class="v-cart-item__image" :src="require('../../assets/images/' + cart_item_data.image)" />
      </div>
      <p class="v-cart-item__name">{{cart_item_data.name}}</p>
    </div> 
    <div class="v-cart-item__right">

    <div class="v-cart-item__quantity-wrapper">
        <span @click="decrementItem" class="qty_btn btn">-</span>
        <span class="v-cart-item__quantity">{{cart_item_data.quantity}}</span>
        <span @click="incrementItem" class="qty_btn qty_btn-increment btn">+</span>
      </div>
        <span class="v-cart-item__price">{{totalItemPrice}} €</span>
      <button @click="deleteFromCart" class="v-cart-item__delete">
        <i class="material-icons">remove_shopping_cart</i>
        </button>
     </div>
    </div>
</template>

<script>
export default {
  name: "v-cart-item",
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {

    };
  },
  computed: {
     totalItemPrice() {
      return this.$props.cart_item_data.price * this.$props.cart_item_data.quantity
    }
  },
  methods: {
    deleteFromCart() {
      this.$emit("deleteFromCart");
    },
    decrementItem() {
      this.$emit("decrement");
    },
    incrementItem() {
      this.$emit("increment");
    }
  }
};
</script>

<style lang='scss'>
  .v-cart-item__image-wrapper{
    width: 80px;
    margin-right: 20px;
  }


.v-cart-item__name {
  text-align: left;
  width: 30%;
  margin-right: 15px;
    font-size: 20px;

}
.v-cart-item {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  box-shadow: 0 0 8px 0 #e9e9e9;
  padding: $padding *2;
  margin-bottom: 30px;
  width: 100%;
  @media (max-width: 600px){
    flex-direction: column;
    align-items: center;
    max-width: 400px;
    margin: 0 auto 30px;
  }
}

.v-cart-item__quantity-wrapper {
  display: flex;
  align-items: center;
  margin-right: 30px;
}
.v-cart-item__quantity {
  width: 20px;
  text-align: center;
}
.qty_btn {
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: 10px;
  margin-left: 10px;
  padding: 0;
  font-size: 20px;
  font-family: 'FiraSans';
  color: #000;
  border-color: #000;
}
.v-cart-item__delete{
  margin-left: auto;
    @media (max-width: 600px){
       margin-left: 0
  }
}
.v-cart-item__price{
  flex-grow: 1;
  text-align: center;
    
  font-family: 'FiraSans';
  white-space: nowrap;
}

.v-cart-item__left{
    display: flex;
    width: 60%;
    align-items: center;
    margin-bottom: 20px;
    @media (max-width: 600px){
       width: 100%;
  }
}
.v-cart-item__right{
  display: flex;
  align-items: center;
  flex-grow: 1;
  @media (max-width: 600px){
       width: 100%;
      //  flex-direction: column;
      //  align-items: flex-start;
       flex-grow: 0;
  }
  }
</style>