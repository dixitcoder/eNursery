<template>
    <body>
        <div >
            <h2 >My profile </h2>
            <img src="../assets/photo-1511367461989-f85a21fda167.jpeg" alt="">
            <button><router-link to="/register">login</router-link></button>
        </div>  
    </body>
</template>
<script>
    export default {
        name:'HomeVi'
    }
</script>
<style>
 
button{
    background: none;
    font-size: 15px;
    font-family:Arial, Helvetica, sans-serif;
    border: none;
}
</style>