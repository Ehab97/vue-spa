<template>
  <div class="home">
    <div class="container">
      <!-- //slider compnetent-->
      <div class="row">
        <Slider   />
        <MostList />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Slider from '../components/game/Slider'
import MostList from '../components/game/MostList'
export default {
  name: "Home",
  data(){
    return{
      
    }
  },
  components: {
    Slider,
    MostList,
  }
};
</script>
<style>
.home{
     min-height: calc(100vh - 175px);
}
</style>