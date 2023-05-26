<template>
  <div class="home">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma-rtl.min.css">
    <h2 class="logins">Login Nursery</h2>
    <img src="@/assets/logo.png" alt=""><br>
    <input type="text" v-model="username"> <br><br>
    <input type="text" v-model="password"> <br><br>
   <div class="class"> 
     <button class="button is-primary" @click="login">
      login   
    </button> 
    <!-- <button class="button is-primary">  -->
      <!-- <router-link to="/register">register</router-link>  -->
    <!-- </button> -->
    <h2 id="fail"></h2>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/SignUp.vue'
// @import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
export default {
  name: 'HomeView',
 data() {
  return {
    username:'dixit@gmail.com',
    password:'12312'
  }
 },
 methods: {
  login(){
    let username = 'dixit@gmail.com';
    let password = 123123 ;
    if
    (username==this.username && password==this.password)
    {
      let route = this.$router.push({ path: "/profile"});
      window.open(route.href,'_self ');
      // let router = './profile.vue'
      // let route = t({ path: "../components/SignUp.vue" });
      // window.open( <router-link to="/profile">profile</router-link>)
    }
    else{
      document.getElementById("fail").innerHTML='Login fails';
    }
  }
 },
}
</script>
<style>
.logins{
  font-size: 30px;
  color: black;
  font-family: Georgia, 'Times New Roman', Times, serif;
}
.h2 {
  color:black;
  display: block;
  font-size: 1.5em;
  margin-top: 0.83em;
  margin-bottom: 0.83em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
  background: none;
}

.class{
  padding-left: 16px;
}
</style>