<template>
  <div class="about">
      <div class="container">
      <div class="row">
        <Details />
      </div>
    </div>
    </div>
</template>
<script>
import Details from '../components/game/Details'
export default {
  components:{
    Details,
     }
};
</script>
<style>
.about{
     min-height: calc(100vh - 175px);
}
</style>