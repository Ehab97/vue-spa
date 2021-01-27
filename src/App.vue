<template>
<Header />
  <router-view />
<Footer/>
</template>
<script>
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

export default {
  
  components:{
    Header,Footer
  },
  data(){
    return{
      games:[],
      info: null
    }
  },
   
}
</script>
<style>
body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #eee;
  
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
@media only screen and (max-width: 600px) {
.wrapper .head{
     font-size: small;
}
.m-5{
  margin: 0  !important;
  margin-top: 3rem;
}
nav .collapse {
  width:75%;
  display: flex;
  flex-direction: row;
}
nav .collapse .navbar-nav{
  width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.navbar-nav .dropdown-menu{
    min-width: 100px;
    position: absolute;
    top: 40px;
    left: -80px;
}
form .btn {
  display: none;
}
form .form-control{
  height: 38px;
  padding: 0;
  text-align: center;
}
.wrapper .card .card-img-top,.wrapper .card {
  max-width: 100%  !important;
}
}
</style>
