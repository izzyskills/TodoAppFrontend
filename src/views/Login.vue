<template>
  <div class="login">
    <form class="login-form" action="" method="post">
      <label for=""> Username</label>
      <input type="text" name="" id="" />
      <label for="">Password</label>
      <input type="password" name="" id="" />
      <input class="submit" type="submit" value="" />
    </form>
  </div>
</template>
<style>
.login {
  display: flex;
  margin: 20px;
  justify-content: center;
  margin-top: 40px;
  border: 2px solid #ff7066;
  border-radius: 20px;
  padding: 20px;
}
.login-form {
  display: flex;
  flex-direction: column;
  width: 80%;
}
.submit {
  background-color: aquamarine;
  margin-top: 30px;
  padding: 10px;
  border: none;
  border-radius: 50px;
}
</style>
