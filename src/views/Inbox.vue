<script setup>
import Task from "../components/task.vue";
import { useRoute } from "vue-router";
import { ref, watch } from "vue";
import tasksRaw from "../data/task.json";

const tasks = ref(tasksRaw.filter((task) => task.category === ""));
</script>

<template>
  <div>
    <h1>Inbox</h1>
    <Task :tasks="tasks" />
  </div>
</template>
