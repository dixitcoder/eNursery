<template>
  <div>
  <img src="./assets/logo.png" alt="">
  <SignUp img="ale"/>
</div>
</template>

<script>
// import game from './components/game.vue'
import SignUp from './components/SignUp.vue'

export default {
  name: 'App',
  components:{
    SignUp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
