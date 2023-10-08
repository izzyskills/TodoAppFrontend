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
<style scoped>
#addTask {
  display: flex;
  align-items: center;
}

#addTask p {
  font-size: 0.8em;
  color: rgb(174, 166, 166);
}
#addTask:hover {
  cursor: pointer;
  font-size: larger;
}
#addTask:hover p {
  color: rgba(171, 44, 44, 0.897);
}
#addTask:hover img {
  height: 25px;
}
.add {
  margin: 10px;
  margin-left: 20px;
  height: 15px;
  border-radius: 100%;
  background-color: rgba(171, 44, 44, 0.897);
}
</style>
