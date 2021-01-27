<template>
 <div class="container">
       <div class="col-12">
     <div class="row m-5">
          <div class="col-12">
               <img class="img__back" src="../../assets/games/1.jpg" alt="" srcset="">
          </div>
          <div class="col-12">
              <div :class="['wrapper__details',!bool ? 'h-all' : '']"> 
                    <h1>Subway Surfers {{$route.params.id}}</h1>
                    <h3>SYBO Games</h3>
                    <p class="text-muted">Downloads</p>
                    <h4>DODGE the oncoming trains!</h4>
                    <p>Help Jake, Tricky & Fresh escape from the grumpy Inspector and his dog.</p>
                    <p>★ Grind trains with your cool crew!</p>
                    <p>★ Colorful and vivid HD graphics!</p>
                    <p v-if="bool" class="text-muted" 
                    style="cursor:pointer" 
                     @click="readView">Read More</p>
                    <p>★ Hoverboard Surfing!</p>
                    <p>★ Paint powered jetpack!</p>
                    <p>★ Lightning fast swipe acrobatics!</p>
                    <p>★ Challenge and help your friends!</p>
                    <p>Join the most daring chase!</p>

                    <p>A Universal App with HD optimized graphics.</p>

                    <p>By Kiloo and Sybo.</p>

                    <p v-if="!bool" class="text-muted" 
                    style="cursor:pointer" 
                     @click="readView">Read less</p>

               </div>
          </div>    
     </div>
<Most />
  </div>   
 </div>
</template>

<script>
import Most from './MostList'
export default {
     components:{
          Most
     },
     data(){
          return{
               bool:true
          }
     },methods:{
          readView(){
               return this.bool=!this.bool;
          }
     }
}
</script>

<style>
.img__back{
     width: 100%;
     height: 400px;
     object-fit: cover;
}
.h-all{
     height: 620px  !important;
     overflow: auto;
}
.wrapper__details{
  text-align: left; 
   padding: 1em;
    background: #fff;
    height: 335px;
    border-radius: .25rem;
  overflow: hidden;  
}
</style>