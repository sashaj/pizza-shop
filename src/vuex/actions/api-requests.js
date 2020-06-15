import axios from "axios";

export default {
  GET_PRODUCTS_FROM_API({ commit }) {
    return (
      axios("http://localhost:3001/products", {
        method: "GET",
      })
        //   .then((data) => {
        //     JSON.parse(data);
        //   })
        .then((data) => {
          if (data) {
            console.log(data.data);
            data.data.forEach(function (item) {
              item.quantity = 1;
            });
            commit("SET_PRODUCTS_TO_STATE", data.data);
            return data.data;
          }
        })
        .catch((error) => {
          commit("SET_OFFLINE_DATA");
          console.log(error);
          return error;
        })
    );
  },
  GET_CURRENCY_RATES({ commit }) {
    return axios("https://api.exchangeratesapi.io/latest", {
      method: "GET",
    })
      .then((rates) => {
        if (rates) {
          commit("SET_USD_RATE", rates);
          return rates;
        }
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  },
  SEND_FORM({ commit }, form) {
    // commit('FORM_SUBMITTED_TOGGLE');

    axios({
      method: "post",
      url: "http://localhost:3001/form",
      data: form,
      validateStatus: () => true,
    })
      .then((res) => {
        if (res) {
          commit("FORM_SUBMITTED_TOGGLE");
        }
      })
      .catch((error) => {
        console.log(error);
        commit("FORM_SUBMITTED_TOGGLE");
        return error;
      });
  },
};
