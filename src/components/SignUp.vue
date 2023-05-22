<template> 
    <div>
        <vue-route />
        <input type="text" v-model="name" placeholder="Enter Name"><br><br>
        <input type="text" v-model="email" placeholder="Enter Email"/><br><br>
        <input type="text" v-model="password" placeholder="password"/><br><br>
        <!-- <input type="number" v-model="number" placeholder="Number"/><br><br> -->
        <button @click="SignUp">Sing Up</button>
    </div>
    </template>
    <script>
    import axios  from 'axios'
    export default {
        name:'SignUp',
        data() {
            return {
                name:'dixit',
                email:'dixit@gmail.com',
                password:'849746',
                
            }
        },
        methods:{
            SignUp(){
                console.log('SignUp',this.name,this.email,this.password)
                let result = axios.post ("http://localhost:3000/register",{
                    email:this.email,
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
    input,button{
        height: 2pc;
        padding-left: 10px; 
        border: 1px solid rgb(60, 177, 200);
        font-size: 15px;
    }
    button{
        width: 13pc;
    }
    body{
        text-align: center;
        margin: auto;
    }
    </style>