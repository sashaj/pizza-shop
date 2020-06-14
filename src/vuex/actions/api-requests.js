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
    GET_CURRENCY_RATES({ commit }){
        return axios('https://api.exchangeratesapi.io/latest',{
            method: "GET"
        })
            .then(rates =>{
                if(rates){
                    commit('SET_USD_RATE', rates);
                    return rates
                }
            })
            .catch((error => {
                console.log(error)
                return error;
            }))
    },
    SEND_FORM({commit}, form){
        axios({
            method: 'post',
            url: 'https://cors-anywhere.herokuapp.com/reqres.in/api/users',
            data: form,
            validateStatus: () => true
        })
            .then(res => {
               if (res){
                   console.log('form submitted');
               }
            })
            .catch((error => {
                commit('SET_OFFLINE_DATA');
                console.log(error)
                return error;
            }))
    }
}