<script setup>
// import send from "../components/icons/add.svg";
</script>

<template>
  <div class="task-create">
    <form action="" method="post">
      <input id="taskName" type="text" placeholder="Task name" />
      <div>
        <input id="description" type="text" placeholder="Description" />
      </div>
      <div class="info">
        <input type="date" name="" id="Date" placeholder="Due Date" />
        <select id="recurrence" placeholder="Repeat">
          <option value="">None</option>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
        <select name="" id="Category" placeholder="Category">
          <option value="">None</option>
          <option value="Education">Education</option>
          <option value="Education">Personal</option>
          <option value="Education">Work</option>
        </select>
      </div>
      <div class="submittask">
        <button type="reset">
          <img class="cancel" src="../components/icons/cancel.svg" alt="" />
        </button>
        <button type="submit">
          <img class="send" src="../components/icons/send.svg" alt="" />
        </button>
      </div>
    </form>
  </div>
</template>
<style scoped>
.task-create {
  background-color: #282828;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
.info {
  margin-top: 4px;
  margin-bottom: 4px;
  display: flex;
  justify-content: space-between;
}
.submittask {
  display: flex;
  justify-content: flex-end;
}
.submittask button {
  margin: 5px;
  all: unset;
  height: 40px;
  width: 40px;
  cursor: pointer;
}
input {
  background-color: #181818;
  border: none;
  width: 80%;
  border-radius: 5px;
}
input[type="date"] {
  background-color: #181818;
  color: #757575;
  width: auto;
  border: none;
  outline: none;
  border-radius: 5px;
}
::-webkit-calendar-picker-indicator {
  background-color: #757575;
  cursor: pointer;
  border-radius: 3px;
}
select {
  background-color: #181818;
  border: none;
  color: #757575;
  border-radius: 5px;
}
img {
  height: 80%;
  width: 80%;
  border-radius: 5px;
  fill: white;
}
.send {
  background-color: #f5f5f5;
}
.cancel {
  background-color: rgba(171, 44, 44, 0.897);
  padding: 2px;
}
</style>
