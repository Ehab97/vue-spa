<template>
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container">
               <router-link to="/" class="navbar-brand"> 
                    LOGO
               </router-link>
               
               <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <form class="d-flex">
                       <div class="d-flex" v-if="bool">
                              <button class="btn btn-outline-secondary me-2" type="submit">Search</button>
                              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                       </div>
                         <i class="fas fa-search fa-2x" @click="viewSearch"></i>
                    </form>
                    <ul class="navbar-nav  mb-2 mb-lg-0">
                           <li class="nav-item">
                              <router-link :to="{name:'most',params:{comp:'events'}}" class="nav-link">events</router-link>
                         </li>
                         <li class="nav-item">
                              <router-link :to="{name:'most',params:{comp:'hotspost'}}" class="nav-link">hotspost</router-link>    
                         </li>
                         
                         <li class="nav-item dropdown">
                              <a class="nav-link " id="navbarDropdown" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                   <i class="fas fa-ellipsis-v"></i>
                              </a>
                              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                   <li><a class="dropdown-item">Login</a></li>
                                   <li><a class="dropdown-item">Logout</a></li>
                              </ul>
                         </li>
                    </ul>

               </div>
          </div>
     </nav>
</template>
<script>
export default {
     data(){
        return  {
               bool:false
        }
     },// in component
methods: {
  viewSearch(){
       return this.bool=!this.bool;
  }
}
}
</script>
<style scoped>
nav img{
     height: 45px;
}
nav .collapse{
     display: flex;
     justify-content: flex-end;
}
nav form{
     align-items: center;
}
nav form i{
         margin: 0 5px;
         cursor: pointer;
}
nav .dropdown-menu{
 min-width: 100px;
}
@media only screen and (max-width: 600px) {
.wrapper .head{
     font-size: small;
}
/* .form{
     display: none;
} */
}
</style>
