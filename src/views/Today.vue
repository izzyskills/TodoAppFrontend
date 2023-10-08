<script setup>
import task from "../components/task.vue";
import tasks from "../data/task.json";
const formattedDate = new Date().toLocaleDateString(undefined, {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});
</script>
<template>
  <div>
    <h1>
      Today <span>{{ formattedDate }}</span>
    </h1>
    <task :tasks="tasks" />
  </div>
</template>
