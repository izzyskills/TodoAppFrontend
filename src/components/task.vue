<script setup>
const { tasks } = defineProps(["tasks"]);
const changeStatus = (id) => {
  const task = tasks.find((q) => q.id === id);
  if (task) {
    task.status = true;
  }
};
</script>
<template>
  <div class="task-container">
    <div
      class="task"
      v-for="task in tasks"
      :key="task.id"
      :class="{ status: task.status }"
    >
      <div class="edit">
        <img src="../components/icons/edit.svg" alt="" />
        <img src="../components/icons/trash.svg" alt="" />
      </div>
      <form action="">
        <input
          type="checkbox"
          name=""
          :id="task.id"
          @change="changeStatus(task.id)"
          v-model="task.status"
        />
        <label for="">{{ task.name }}</label>
        <div class="task-info">
          <div class="date">
            <p><i></i>{{ task.date }} <i></i></p>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<style scoped>
.task-container {
  display: flex;
  flex-direction: column;
  margin: 20px;
}
.task {
  padding: 20px;
  padding-top: 10px;
  /* display: flex; */
  /* flex-direction: row; */
  border-top: 2px solid gray;
  border-collapse: collapse;
}
label {
  padding-left: 10px;
}
.task-info {
  padding-left: 25px;
  font-size: 0.7em;
}
.status {
  color: rgba(171, 44, 44, 0.897);
  text-decoration: line-through;
}
.edit {
  display: none;
  justify-content: flex-end;
}
.edit img {
  cursor: pointer;
  height: 15px;
  margin-left: 10px;
}
.task:hover .edit {
  display: flex;
}
</style>
