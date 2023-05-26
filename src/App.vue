<template>
  <div id="app">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma-rtl.min.css">
    <nav>
      <div class="tabs is-right">
        <ul>
          <li class="is-active"><a><router-link to="/login">Login</router-link></a></li>
          <li class="is-active"><a><router-link to="/register">register</router-link></a></li>
        </ul>
      </div>
      <!-- <h2> Vue JS Login Page </h2> -->
       <!-- <router-link to="/register">login</router-link>  |   -->
      <!-- <router-link to="/Nursery">login</router-link> 
      -->
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
