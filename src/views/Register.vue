<template>
  <div class="home">
    <h2 class="h2">login Page Nursery</h2>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <br><br>
    <!-- <button> <router-link to="/login">login</router-link></button> -->
  </div>
</template>

<script>
// import Login from './Login'
// @ is an alias to /src
import HelloWorld from '@/components/SignUp.vue'

export default {
  name: 'RegisterVue',
  components: {
    // Login,
    HelloWorld
  }
}
</script>
<style>
.h2 {
  color:black;
  display: block;
  font-size: 1.5em;
  margin-top: 0.83em;
  margin-bottom: 0.83em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
}
</style>