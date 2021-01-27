<template>
  <div class="col-12">
       <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <ol class="carousel-indicators">
                 <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"></li>
                 <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
                 <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                 <div class="carousel-item active">
                      <img src="../../assets/games/1.jpg" class="d-block w-100" alt="...">
                      <div class="carousel-caption d-none d-md-block">
                           <h5>First slide label</h5>
                           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                      </div>
                 </div>
                 <div class="carousel-item">
                      <img src="../../assets/games/2.jpg" class="d-block w-100" alt="...">
                      <div class="carousel-caption d-none d-md-block">
                           <h5>Second slide label</h5>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </div>
                 </div>
                 <div class="carousel-item">
                      <img src="../../assets/games/3.jpg" class="d-block w-100" alt="...">
                      <div class="carousel-caption d-none d-md-block">
                           <h5>Third slide label</h5>
                           <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                      </div>
                 </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
                 <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                 <span class="visually-hidden">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
                 <span class="carousel-control-next-icon" aria-hidden="true"></span>
                 <span class="visually-hidden">Next</span>
            </a>
       </div>
  </div>
</template>


<style>
.carousel{
     margin:0 3rem 3rem 3rem;
}

.carousel-inner .btn{
    
    margin: 10px 5px;
    border-radius: 10px;
    
}
.carousel-item img{
     height: 350px;
     object-fit: cover;
}
</style>