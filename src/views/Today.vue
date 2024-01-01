<script setup>
import Task from "../components/task.vue";
import taskCreate from "../components/taskCreate.vue";
import { useStore } from "vuex";
import { ref, computed, onMounted } from "vue";
const tasks = computed(() => store.getters.taskList);
const getFormattedDate = (dateString) => {
  return new Date(dateString).toLocaleDateString(undefined, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};
const formattedDate = new Date().toLocaleDateString(undefined, {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});
const currentTasks = computed(() => {
  return tasks.value.filter((task) => {
    const taskDate = getFormattedDate(task.date);
    return taskDate === formattedDate;
  });
});

const overdueTasks = computed(() => {
  return tasks.value.filter((task) => {
    if (!task.date) {
      return false;
    }
    const taskDate = getFormattedDate(task.date);
    return taskDate > formattedDate;
  });
});
const store = useStore();
onMounted(() => {
  if (store.state.isAuthenticated && !store.state.task_has_been_called) {
    store.dispatch("getTasks");
  }
});
</script>
<template>
  <div>
    <h1>
      Today <span>{{ formattedDate }}</span>
    </h1>
    <br /><br />
    <h2>Overdue</h2>
    <Task :tasks="overdueTasks" />
    <br />

    <h2>
      {{ formattedDate }}
    </h2>
    <Task :tasks="currentTasks" />
    <div id="addTask">
      <img class="add" src="../components/icons/add.svg" alt="" />
      <p>add task</p>
    </div>
    <div>
      <taskCreate />
    </div>
  </div>
</template>
