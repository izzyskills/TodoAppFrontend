<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const submitForm = () => {
  errors.value = [];
  if (username.value === "") {
    errors.value.push("The username is missing");
  }
  if (password.value.length <= 8) {
    errors.value.push("The Password is too short (minimum 8 words)");
  }
  if (password.value !== password2.value) {
    errors.value.push("The passwords doesn't match");
  }
  if (!errors.value.length) {
    const formData = {
      username: username.value,
      password: password.value,
    };

    axios
      .post("/api/users/", formData)
      .then((response) => {
        router.push("/login");
      })
      .catch((error) => {
        if (error.response) {
          for (const property in error.response.data) {
            errors.value.push(`${property}: ${error.response.data[property]}`);
          }
          console.log(JSON.stringify(error.response.data));
        } else if (error.message) {
          errors.value.push("something went wrong. Please try again");
          console.log(JSON.stringify(error));
        }
      });
  }
};
const username = ref("");
const password = ref("");
const password2 = ref("");
const errors = ref([]);
</script>
<template>
  <div class="login">
    <form class="login-form" @submit.prevent="submitForm">
      <label for="">Username</label>
      <input type="text" v-model="username" />
      <label for="">Passowrd</label>
      <input type="password" v-model="password" />
      <label for="">Password(confirmation)</label>
      <input type="password" v-model="password2" />
      <input class="submit" type="submit" value="Register" />
    </form>
  </div>
</template>
