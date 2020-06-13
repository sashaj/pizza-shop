<template>
  <div class="v-cart">
    <h1>Basket</h1>
    <p v-show="!CART.length">there are no products in basket...</p>
    <vCartItem
      v-for="(item, index) in CART"
      :key="item.article"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
      @increment="increment(index)"
      @decrement="decrement(index)"
    />
    <div class="v-cart__total-price-wrapper" v-show="CART.length">
      <p class="v-cart__total-title">Total price:</p>
      <p class="v-cart__total-currency">{{ cartTotalCost }}€</p>
      <p class="v-cart__total-currency">{{ cartTotalCostUSD }}$</p>
    </div>
    <router-link :to="{ name: 'order-form' }" v-show="CART.length">
      <button class="link-to-order btn">Proceed</button>
    </router-link>
  </div>
</template>

<script>
import vCartItem from "./v-cart-item.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "v-cart",
  components: {
    vCartItem,
  },
  data: function () {
    return {};
  },
  computed: {
    ...mapGetters(["CART", "USD"]),
    cartTotalCost() {
      let result = [];
      if (this.CART.length) {
        for (let item of this.CART) {
          result.push(item.price * item.quantity);
        }
        result = result.reduce(function (sum, el) {
          return sum + el;
        });
        console.log(result);
        return result;
      } else {
        return 0;
      }
    },
    cartTotalCostUSD() {
      const usdCost = this.cartTotalCost * this.USD;
      return usdCost.toFixed(2);
    },
  },
  methods: {
    ...mapActions([
      "DELETE_FROM_CART",
      "INCREMENT_CART_ITEM",
      "DECREMENT_CART_ITEM",
    ]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
    increment(index) {
      console.log(this);
      this.INCREMENT_CART_ITEM(index);
    },
    decrement(index) {
      this.DECREMENT_CART_ITEM(index);
    },
  },
};
</script>

<style lang="scss">
.v-cart {
  width: 100%;
  margin-bottom: 100px;
  max-width: 600px;
}

.v-cart__total-price-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 30px;
}

.v-cart__total-title {
  font-family: FiraSans;
  font-size: 20px;
}

.v-cart__total-currency {
  font-family: FiraSans;
  font-size: 20px;
}

.link-to-order {
  margin-left: auto;
}
</style>
