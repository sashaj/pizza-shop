<template>
    <div class="v-cart">
        <!-- <router-link :to="{name: 'catalogue' }">   
            <div class="v-cart__link-to-catalogue">To catalogue</div>
        </router-link> -->
        <h1>Basket </h1>
        <p v-if='!CART.length'>there are no products in basket...</p>
        <vCartItem
            v-for="(item, index) in CART"
            :key='item.article'
            :cart_item_data='item'
            @deleteFromCart='deleteFromCart(index)'
            @increment='increment(index)'
            @decrement='decrement(index)'
        />
        <div class="v-cart__total">
            <p class="total__name">Total:</p>
            <p>{{cartTotalCost}}Р.</p>
        </div>
    </div>
</template>

<script>

import vCartItem  from './v-cart-item.vue';
import {mapActions, mapGetters} from 'vuex';
export default {
    name: 'v-cart',
    components: {
        vCartItem
    },
    data: function(){
        return {
            
        }
    },
    computed:{
        cartTotalCost(){
            let result = [];
            if (this.CART.length){
                for (let item of this.CART){
                    result.push(item.price * item.quantity);
                }
                result = result.reduce(function(sum, el){
                    return sum + el;
                })
                console.log(result);
                return result;
            } else {
                return 0;
            }       
        },
        ...mapGetters([    
            "CART",
        ]),
    },
    methods:{
        ...mapActions([
        'DELETE_FROM_CART',
        "INCREMENT_CART_ITEM",
        "DECREMENT_CART_ITEM"
        ]),
        deleteFromCart(index){
            this.DELETE_FROM_CART(index)
        },
        increment(index){
            console.log(this);
            this.INCREMENT_CART_ITEM(index)
        },
        decrement(index){
            this.DECREMENT_CART_ITEM(index);
 
        },
    }

}
</script>

<style lang='scss'>
.v-cart{
    width: 100%;
    margin-bottom: 100px;
}
.v-cart__link-to-catalogue{
    position: absolute;
    top: 10px;
    right: 10px;
    padding: $padding*2;
    border: solid 1px gray;
}
.v-cart__total {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    padding: $padding*3;
    display: flex;
    justify-content: center;
    color: #fff;
    font-size: 20px;
    background: green;
}
.total__name{
    margin-right: $margin*2;

}
</style>