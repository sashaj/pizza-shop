export default{
    ADD_TO_CART({ commit }, product) {
        commit('SET_CART', product);
        commit('CALCULATE_TOTAL_CART_ITEMS');
    },
    DELETE_FROM_CART({ commit }, index) {
        commit('REMOVE_FROM_CART', index);
        commit('CALCULATE_TOTAL_CART_ITEMS');
    },
    DECREMENT_CART_ITEM({ commit }, index) {
        commit('DECREMENT', index);
    },
    INCREMENT_CART_ITEM({ commit }, index) {
        commit('INCREMENT', index);
    },
    TOGGLE_OPTIONS_VISIBILITY( { commit} ){
        commit('TOGGLE_OPTIONS_VISIBILITY');
    },
    OPTION_SELECT( {commit}, option){
        commit("OPTION_SELECT", option)
    },
    TURNOFF_SELECT_VISIBILITY({ commit }){
        commit("TURNOFF_SELECT_VISIBILITY");
    },
    NOUISLIDER_CURRENT_VALUES({commit}, values, option){
        commit ("NOUISLIDER_CURRENT_VALUES", values, option)
    },
    SET_SEARCH_VALUE({commit}, value){
        commit("SET_SEARCH_VALUE", value);
    },
    SEARCH_PRODUCTS({commit}, searchValue){
        commit("SEARCH_PRODUCTS", searchValue);
    },
    FILTER_SEARCH({commit}, filterValues){
        commit("FILTER_SEARCH", filterValues)
    },
    TOGGLE_FORM_SUBMITTED({ commit }){
        commit("FORM_SUBMITTED_TOGGLE");
    },
    NULLIFY_CART({commit}){
        commit("NULLIFY_CART");
    }
}