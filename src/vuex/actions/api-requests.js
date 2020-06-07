import axios from 'axios';

export default {
    GET_PRODUCTS_FROM_API({ commit }) {
        return axios('http://localhost:3000/products', {
            method: "GET"
        })
            .then(products => {
                if (products){
                    products.data.forEach(function (item) {
                        item.quantity = 1;
                    })
                    commit('SET_PRODUCTS_TO_STATE', products.data);
                    return products;
                }
            })
            .catch((error => {
                commit('SET_OFFLINE_DATA');
                console.log(error)
                return error;
            }))
    },
}