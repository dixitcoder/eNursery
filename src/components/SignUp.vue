<template> 
    <div>
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
        <div class="form__group">
          <input type="text" v-model="name" class="form__input" id="name" placeholder="Full name" required="" />
          <label for="name" class="form__label">Enter Name</label>
        </div>
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
<div class="form__group">
  <input type="text" v-model="username" class="form__input" id="name" placeholder="Enter Email" required="" />
  <label for="name" class="form__label">Enter Email</label>
</div>      
<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
<div class="form__group">
  <input type="text" v-model="password" class="form__input" id="name" placeholder="password" required="" />
  <label for="name" class="form__label">password</label>
</div>     
        <!-- Vue JS CSS  -->
        <vue-route />
        <!-- <input type="text" v-model="name" placeholder="Enter Name"><br><br> -->
        <!-- <input type="text" v-model="username" placeholder="Enter Email"/><br><br> -->
        <!-- <input type="text" v-model="password" placeholder="password"/><br><br> -->
        <!-- <input type="number" v-model="number" placeholder="Number"/><br><br> -->
        <button @click="SignUp">Sing Up</button>
        <!-- <button style="color:wheat">loin Vue JS pag</button> -->
    </div>
    </template>
    <script>
    import axios  from 'axios'
    export default {
        name:'SignUp',
        data() {
            return {
                name:'dixit',
                username:'dixit@gmail.com',
                password:'849746',
                
            }
        },
        methods:{
            SignUp(){
                console.log('SignUp',this.name,this.email,this.password)
                let result = axios.post ("http://localhost:3000/register",{
                    username:this.username,
                    name:this.name,
                    password:this.password
                });
                console.warn(result)
                if(result.status==3000){
                    alert('Sign Up')
                }
                localStorage.setItem('User Info',JSON.stringify(result.data))
            }
        }
    }
    </script>
    <style>
    *,
    *::after,
    *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
      font-size: 62,5%;
    }
    
    body {
      height: 100vh;
        width: 100%;
      background: #0f2027; /* fallback for old browsers */
      background: linear-gradient(to right,#2c5364, #203a43, #0f2027);
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      color: #fff;
    }
    
    .form__label {
      font-family: 'Roboto', sans-serif;
      font-size: 1.2rem;
      margin-left: 2rem;
      margin-top: 0.7rem;
      display: block;
      transition: all 0.3s;
      transform: translateY(0rem);
    }
    
    .form__input {
      font-family: 'Roboto', sans-serif;
      color: #333;
      font-size: 1.2rem;
        margin: 0 auto;
      padding: 1.5rem 2rem;
      border-radius: 0.2rem;
      background-color: rgb(255, 255, 255);
      border: none;
      width: 90%;
      display: block;
      border-bottom: 0.3rem solid transparent;
      transition: all 0.3s;
    }
    
    .form__input:placeholder-shown + .form__label {
      opacity: 0;
      visibility: hidden;
      -webkit-transform: translateY(-4rem);
      transform: translateY(-4rem);
    }
    
    body{
        text-align: center;
        margin: auto;
    }
    </style>