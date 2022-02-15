import React from 'react'
import img1 from '../images/image1.jpg';
import img2 from '../images/image4.jpg';
import img3 from '../images/image3.jpg';

export default function Carousel() {
  return (
    <>
         <div>Carousel</div>
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img1} class="d-block w-100  card-img-top" alt="Fashion Design" ></img>
      <div class="carousel-caption d-none d-md-block">
        <h3 class="hero">Modest Fashion Inspiration</h3>
        <h5 class="hero">  You can have anything you want in life if you dress for it</h5>
      </div>
    </div>
    <div class="carousel-item">
      <img src={img2} class="d-block w-100  card-img-top" alt="..."></img>
      <div class="carousel-caption d-none d-md-block">
        <h3 class="hero">Dressed and Obsessed</h3>
        <h5 class="hero">Clothes Mean Nothing Until Someone Lives In Them</h5>
      </div>
    </div>
    <div class="carousel-item">
      <img src={img3} class="d-block w-100  card-img-top" alt="..."></img>
      <div class="carousel-caption d-none d-md-block">
        <h3 class="hero">The ultimate Fashions</h3>
        <h5 class="hero">Fashion is like eating , you shoulgnt stick to same menu</h5>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}
