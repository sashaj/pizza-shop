// import state from "../state/state";
export default {
  SET_PRODUCTS_TO_STATE: (state, products) => {
    state.products = products;
  },
  SET_CART: (state, product) => {
    if (state.cart.length) {
      let isProductExists = false;
      state.cart.map(function (item) {
        if (item.article === product.article) {
          isProductExists = true;
          item.quantity++;
        }
      });
      if (!isProductExists) {
        state.cart.push(product);
      }
    } else {
      state.cart.push(product);
    }
  },
  CALCULATE_TOTAL_CART_ITEMS: (state) => {
    state.total_cart_items = 0;
    for (let i = 0; i < state.cart.length; i++) {
      state.total_cart_items += state.cart[i].quantity
    }
    console.log('count:' + state.cart.length);
  },
  REMOVE_FROM_CART: (state, index) => {
    state.cart[index].quantity = 1;
    state.cart.splice(index, 1);
  },
  INCREMENT: (state, index) => {
    state.cart[index].quantity++;
  },
  DECREMENT: (state, index) => {
    if (state.cart[index].quantity > 1) {
      state.cart[index].quantity--;
    }
  },
  TOGGLE_OPTIONS_VISIBILITY: (state) => {
    state.are_options_visible = !state.are_options_visible;
  },
  TURNOFF_SELECT_VISIBILITY: (state) => {
    state.are_options_visible = false;
  },
  OPTION_SELECT: (state, option) => {
    state.selected_option = option.name;
  },
  SORT_BY_CATEGORIES(state, option) {
    state.sorted_products = [...state.products];
    if (option) {
      state.selected_option = option.name;
    }
    if (state.selected_option === "all") {
      return state.products;
    } else {
      state.sorted_products = state.sorted_products.filter((item) => {
        return (
          item.category === state.selected_option
        );
      });
    }
  },
  SLIDER_SEARCH(state) {
    state.sorted_products = [...state.products];

    state.sorted_products = state.sorted_products.filter((item) => {
      if (state.selected_option !== "all" && !state.searchValue.length) {
        return (
          item.price >= state.nouisliderConfig.currentValues[0] &&
          item.price <= state.nouisliderConfig.currentValues[1] &&
          item.category === state.selected_option
        );
      } else if (state.selected_option == "all" && !state.searchValue.length) {
        return (
          item.price >= state.nouisliderConfig.currentValues[0] &&
          item.price <= state.nouisliderConfig.currentValues[1]
        );
      }
      if (state.searchValue.length) {
        if (state.selected_option !== "all") {
          return (
            item.price >= state.nouisliderConfig.currentValues[0] &&
            item.price <= state.nouisliderConfig.currentValues[1] &&
            item.category === state.selected_option &&
            item.name
              .toLowerCase()
              .includes(state.searchValue.toLowerCase())
          );
        } else if (state.selected_option == "all") {
          return (
            item.price >= state.nouisliderConfig.currentValues[0] &&
            item.price <= state.nouisliderConfig.currentValues[1] &&
            item.name
              .toLowerCase()
              .includes(state.searchValue.toLowerCase())
          );
        }
      }
    });
  },
  SEARCH_PRODUCTS(state) {
    if (state.searchValue.length) {
      state.sorted_products = state.sorted_products.filter((item) => {
        return item.name
          .toLowerCase()
          .includes(state.searchValue.toLowerCase());
      })
    } else {
      return
    }
  },
  NOUISLIDER_CURRENT_VALUES: (state, values) => {
    state.nouisliderConfig.currentValues = values;
  },
  SET_SEARCH_VALUE: (state, value) => {
    state.searchValue = value;
  },
  SET_OFFLINE_DATA: (state) => {
    state.products = state.offline_data.products;
    state.products.forEach(function (item) {
      item.quantity = 1;
    })
    console.log('offline data')
  },
  SET_USD_RATE: (state, rates) => {
    state.usd = rates.data.rates.USD;
    console.log(state.usd)
  }
};