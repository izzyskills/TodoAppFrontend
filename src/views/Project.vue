<script setup>
import Task from "../components/task.vue";
import { useRoute } from "vue-router";
import { ref, watch } from "vue";
import tasksRaw from "../data/task.json";
import taskCreate from "../components/taskCreate.vue";

const route = useRoute();
const category = ref(route.params.categoryName);
const tasks = ref(tasksRaw.filter((task) => task.category === category.value));
watch(route, () => {
  category.value = route.params.categoryName;
  tasks.value = tasksRaw.filter((task) => task.category === category.value);
});
</script>

<template>
  <div>
    <h1>{{ category }}</h1>
    <Task :tasks="tasks" />
    <div id="addTask">
      <img class="add" src="../components/icons/add.svg" alt="" />
      <p>add task</p>
    </div>
    <div>
      <taskCreate />
    </div>
  </div>
</template>
