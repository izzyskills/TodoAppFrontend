<script setup>
import axios from "axios";
import { ref } from "vue";
const categories = ref([]);
const getCategories = async () => {
  axios.defaults.headers.common["Authorization"] =
    '"Token b1da08523521379e99101696524a54e1a449e45c"';
  await axios
    .get("/category/")
    .then((response) => {
      categories.value = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
getCategories();
console.log(categories);
console.log(axios.defaults.headers.common["Authorization"]);
</script>
<template>
  <div>
    <p>demo</p>
    {{ categories }}
  </div>
</template>
