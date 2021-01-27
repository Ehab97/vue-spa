<template>
     <footer class="bg-light">
          <div class="container">
               <div class="row">
                    <dic class="col-12">
                         <p>All CopyRights &copy; Reserved for Mohammed Reda</p>
                         <ul>
                              <li><a href="#"> <i class="fab fa-facebook-f fa-lg"></i></a></li>
                              <li><a href="#"> <i class="fab fa-twitter fa-lg"></i></a></li>
                              <li><a href="#"> <i class="fab fa-linkedin fa-lg"></i></a></li>
                              <li><a href="#"> <i class="fab fa-github fa-lg"></i></a></li>
                         </ul>
                    </dic>
               </div>
          </div>
     </footer>
</template>

<script>
export default {

}
</script>

<style>
footer{
     display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100px;
    text-align: center;
    padding: 20px 0;
}
footer p{
     margin: 0;
}
footer ul{
     display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
   
}
footer ul a{
 text-decoration:none  !important;
     color: #2c3e50;
}
footer ul  li{
     list-style: none;
     margin: 5px;
}
</style>