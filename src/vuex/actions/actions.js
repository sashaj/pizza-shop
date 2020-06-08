export default{

    ADD_TO_CART({ commit }, product) {
        commit('SET_CART', product);
        commit('CALCULATE_TOTAL_CART_ITEMS');
    },
    DELETE_FROM_CART({ commit }, index) {
        commit('REMOVE_FROM_CART', index);
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
    SORT_BY_CATEGORIES({commit}, category, searchValue){
        commit("SORT_BY_CATEGORIES", category, searchValue);
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
    SLIDER_SEARCH({commit}){
        commit("SLIDER_SEARCH")
    }
}