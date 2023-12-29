<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
const store = useStore();
const route = useRoute();
const router = useRouter();
const username = ref("");
const password = ref("");
const errors = ref([]);
const submitForm = async () => {
  axios.defaults.headers.common["Authorization"] = "";
  localStorage.removeItem("token");
  store.commit("removeToken");
  store.commit("initializeStore");
  const formData = {
    username: username.value.toLowerCase(),
    password: password.value,
  };
  await axios
    .post("api/token/login/", formData, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      const token = response.data.auth_token;
      store.commit("setToken", token);
      axios.defaults.headers.common["Authorization"] = "Token " + token;
      localStorage.setItem("token", token);
      store.dispatch("fetchCategories");
      store.dispatch("fetchTasks");
      const toPath = route.query.to || "/";
      router.push(toPath);
    })
    .catch((error) => {
      if (error.response) {
        for (const property in error.response.data) {
          errors.value.push(`${property}: ${error.response.data[property]}`);
        }
      } else {
        errors.value.push("Something went wrong. Please try again");

        console.log(JSON.stringify(error));
      }
    });
};
</script>
<template>
  <div class="login">
    <form class="login-form" @submit.prevent="submitForm" method="post">
      <label for=""> Username</label>
      <input type="text" name="" id="username" v-model="username" />
      <label for="">Password</label>
      <input type="password" name="" id="password" v-model="password" />
      <input class="submit" type="submit" value="" />
    </form>
  </div>
</template>
