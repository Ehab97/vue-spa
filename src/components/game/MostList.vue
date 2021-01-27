<template>
<div class="container">
     <div class="col-12">
     <div class="row m-5">
          <div class="wrapper">
               <div class="row">
                    <div class="col-12">
                         <div class="head">
                              <h6> Most 
                                   {{this.$route.params.comp?this.$route.params.comp:'recomended'}}
                              </h6>
                              <router-link 
                                   :to="{name:'details',params:{id:10}}">SEE ALL
                                   <i class="fas fa-chevron-right"></i>
                              </router-link>
                         </div>
                    </div>
                    <div class="col-12">
                         <div class="row">
                              <div v-for="i in 4" :key="i" class="col-md-3 col-sm-12">
                                   <div class="card">
                                        <img :src="getImgUrl(i)" class="card-img-top" alt="">
                                        <span class="badge bg-secondary">New
                                        </span>
                                        <div class="card-body">
                                             <h5 class="card-title">Card title</h5>
                                             <p class="card-text">Some quick example text to build on the card
                                                  title and make up the bulk of the card's content.</p>
                                             <router-link :to="{name:'details',params:{id:i}}"
                                                  class="btn btn-secondary">Go somewhere</router-link>

                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>

               </div>
          </div>
     </div>
</div>
</div>
</template>

<script>
export default {
     methods: {
          getImgUrl(pet) {
               var images = require.context('../../assets/games/', false, /\.jpg$/)
               return images('./' + pet + ".jpg")
          }
     }
}
</script>

<style>
.wrapper{
     padding: 1em;
    background: #fff;
    min-height: 400px;
    border-radius: .25rem;
    margin-bottom: 20px;
}
.wrapper .head{
     display: flex;
     justify-content: space-between;

}
.wrapper .head a{
     text-decoration:none  !important;
     color: #2c3e50;
}
.wrapper .card{
     max-width: 18rem;
     height: auto;
     position: relative;
     margin-bottom: 20px;
}
.wrapper .card .card-img-top{
     max-width: 18rem;
         object-fit: cover;
    height: 160px;
}
.wrapper .card .badge{
     width: 50px;
    position: absolute;
    top: 5px;
    left: 5px;
}
</style>
