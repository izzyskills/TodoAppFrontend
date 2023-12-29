<script setup>
import Nav from "./components/nav.vue";
import { RouterView } from "vue-router";
import axios from "axios";
import { onBeforeMount } from "vue";
import { useStore } from "vuex";
const store = useStore();
onBeforeMount(() => {
  store.commit("initializeStore");
  const token = store.state.token;
  if (token) {
    axios.defaults.headers.common["Authorization"] = "Token " + token;
  } else {
    axios.defaults.headers.common["Authorization"] = "";
  }
});
</script>
<template>
  <div class="container">
    <Nav class="nav-container" />
    <div class="main">
      <RouterView />
    </div>
  </div>
</template>
