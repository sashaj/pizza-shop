export default {
    SEARCH_VALUE(state){
      return state.searchValue;  
    },
    PRODUCTS(state) {
        return state.products;
    },
    CART(state) {
        return state.cart;
    },
    SELECT_OPTIONS(state){
        return state.select_options;
    },
    SELECTED_OPTION(state){
        return state.selected_option;
    },
    ARE_OPTIONS_VISIBLE(state){
        return state.are_options_visible;
    },
    SORTED_PRODUCTS(state){
        return state.sorted_products;
    },
    NOUISLIDER_CONFIG(state){
        return state.nouisliderConfig;
    },
    TOTAL_CART_ITEMS(state){
        return state.total_cart_items;
    }
}