import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    isAuthenticated: false,
    token: "",
    categories: [],
    tasks: [],
    task_has_been_called: false,
  },
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem("token")) {
        state.token = localStorage.getItem("token");
        state.isAuthenticated = true;
        state.categories = [];
        state.tasks = [];
        state.task_has_been_called = false;
      } else {
        state.token = "";
        state.isAuthenticated = false;
        state.categories = [];
        state.tasks = [];
        state.task_has_been_called = false;
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
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
    removeTasks(state) {
      state.tasks = [];
    },
    setTaskHasBeenCalled(state) {
      state.task_has_been_called = true;
    },
    removeTaskHasBeenCalled(state) {
      state.task_has_been_called = false;
    },
  },
  actions: {
    async fetchCategories({ commit, dispatch }) {
      try {
        const response = await axios.get("/category/");
        commit("setCategories", response.data);
        dispatch("getTasks");
      } catch (error) {
        console.error(error);
      }
    },
    async getTasks({ commit }) {
      commit("setTaskHasBeenCalled");
      return await axios
        .get("/tasks/")
        .then((response) => commit("setTasks", response.data))
        .catch((error) => console.error(error));
    },
    async createTask({ dispatch }, taskData) {
      return await axios
        .post("/tasks/", taskData)
        .then((response) => {
          dispatch("getTasks");
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  getters: {
    categoriesList: (state) => state.categories,
    taskList: (state) => state.tasks,
    categoryNamesMap: (state) => {
      return state.categories.reduce((map, category) => {
        map[category.id] = category.name;
        return map;
      }, {});
    },
  },
  modules: {},
});
