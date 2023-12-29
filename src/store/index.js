import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    isAuthenticated: false,
    token: "",
    categories: [],
  },
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem("token")) {
        state.token = localStorage.getItem("token");
        state.isAuthenticated = true;
        state.categories = [];
      } else {
        state.token = "";
        state.isAuthenticated = false;
        state.categories = [];
      }
    },
    setToken(state, token) {
      state.token = token;
      state.isAuthenticated = true;
    },
    removeToken(state) {
      state.token = "";
      state.isAuthenticated = false;
    },
    setCategories(state, categories) {
      state.categories = categories;
    },
    removeCategories(state) {
      state.categories = [];
    },
  },
  actions: {
    async fetchCategories({ commit }) {
      try {
        const response = await axios.get("/category/");
        commit("setCategories", response.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
  modules: {},
});
