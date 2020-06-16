import Vue from 'vue';
import Router from 'vue-router';

import vCatalog from '../components/catalogue/v-catalogue'
import vCart from '../components/cart/v-cart'
import vOrderForm from "../components/v-order-form";

Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: '/',
            name: 'catalogue',
            component: vCatalog
        },
        {
            path: '/cart',
            name: 'cart',
            component: vCart,
        },
        { 
            path: '/order-form',
            name: 'order-form',
            component: vOrderForm,
        },
    ]
})

export default router;  