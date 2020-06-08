<template>
  <div class="v-cart-item">
    <img class="v-cart-item__image" :src="require('../../assets/images/' + cart_item_data.image)" />
    <div class="cart-item-info">
      <p>{{cart_item_data.name}}</p>
      <p>{{cart_item_data.price}}</p>
      <p>{{cart_item_data.article}}</p>
    </div>
    <div class="v-cart-item__quantity">
      <p>qty:</p>
      <span @click="decrementItem" class="qty_btn">-</span>
      <span>{{cart_item_data.quantity}}</span>
      <span @click="incrementItem" class="qty_btn qty_btn-increment">+</span>
    </div>
    <button @click="deleteFromCart">delete</button>
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
  data: function() {
    return {};
  },
  computed: {},
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
.v-cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  box-shadow: 0 0 8px 0 #e9e9e9;
  padding: $padding;
  margin-bottom: $margin;
  width: 100%;
}
.v-cart-item__image {
  max-width: 50px;
}
.v-cart-item__quantity {
  display: flex;
  align-items: center;
}
.qty_btn {
  width: 20px;
  height: 20px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: 10px;
  margin-left: 10px;
}
</style>