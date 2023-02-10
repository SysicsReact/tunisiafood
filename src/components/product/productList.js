import React from 'react'

const ProductList= (products)=> {
   
  return (
    
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="title" content="Tunisian Food" />
        <meta name="keywords" content="organic, food, shop, ecommerce, store, agriculture, vegetables, farm, grocery, natural, online store" />
        <title>Tout les produits</title>
        <link rel="icon" href="assets/images/favicon.png" />
        <link rel="stylesheet" href="assets/fonts/flaticon/flaticon.css" />
        <link rel="stylesheet" href="assets/fonts/icofont/icofont.min.css" />
        <link rel="stylesheet" href="assets/fonts/fontawesome/fontawesome.min.css" />
        <link rel="stylesheet" href="assets/vendor/venobox/venobox.min.css" />
        <link rel="stylesheet" href="assets/vendor/slickslider/slick.min.css" />
        <link rel="stylesheet" href="assets/vendor/niceselect/nice-select.min.css" />
        <link rel="stylesheet" href="assets/vendor/bootstrap/bootstrap.min.css" />
        <link rel="stylesheet" href="assets/css/main.css" />
        <link rel="stylesheet" href="assets/css/profile.css" />
    </head>
<div className="row">
      <div class="col">
          <div class="product-standard">
              <div class="standard-label-group">
                  <label class="standard-label off">-15%</label>
              </div>
              <div class="standard-media">
                  <a class="standard-image" href="product-video.html">
                      <img src="assets/images/product/01.jpg" alt="product"/>
                  </a>
                  <div class="standard-widget">
                      <a title="Product Compare" href="compare.html" class="fas fa-random"></a>
                      <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" class="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                      <a title="Product View" href="#" class="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                  </div>
              </div>
              <div class="standard-content">
                  <h4 class="standard-name">
                      <a href="product-video.html">fresh green chilis</a>
                  </h4>
                  <h5 class="standard-price">
                      <del>$34</del>
                      <span>$28<small>/piece</small></span>
                  </h5>
                  <div class="standard-rating">
                      <i class="active icofont-star"></i>
                      <i class="active icofont-star"></i>
                      <i class="active icofont-star"></i>
                      <i class="active icofont-star"></i>
                      <i class="icofont-star"></i>
                      <a href="product-video.html">(3)</a>
                  </div>
                  <p class="standard-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit molestias quaerat rem ullam ut nam quibusdam labore sed magnam eos Inventore quis corrupti nemo ipsa ratione culpa porro vitae.</p>
                  <div class="standard-action-group">
                      <button class="product-add" title="Add to Cart">
                          <i class="fas fa-shopping-basket"></i>
                          <span>add to cart</span>
                      </button>
                      <div class="product-action">
                          <button class="action-minus" title="Quantity Minus"><i class="icofont-minus"></i></button>
                          <input class="action-input" title="Quantity Number" type="text" name="quantity" value="1"/>
                          <button class="action-plus" title="Quantity Plus"><i class="icofont-plus"></i></button>
                      </div>
                      <button class="standard-wish wish" title="Add to Wishlist">
                          <i class="fas fa-heart"></i>
                          <span>add to wish</span>
                      </button>
                  </div>
              </div>
          </div>
      </div>
      </div>
        <script src="assets/vendor/bootstrap/jquery-1.12.4.min.js"></script>
        <script src="assets/vendor/bootstrap/popper.min.js"></script>
        <script src="assets/vendor/bootstrap/bootstrap.min.js"></script>
        <script src="assets/vendor/countdown/countdown.min.js"></script>
        <script src="assets/vendor/niceselect/nice-select.min.js"></script>
        <script src="assets/vendor/slickslider/slick.min.js"></script>
        <script src="assets/vendor/venobox/venobox.min.js"></script>
        <script src="assets/js/nice-select.js"></script>
        <script src="assets/js/countdown.js"></script>
        <script src="assets/js/accordion.js"></script>
        <script src="assets/js/venobox.js"></script>
        <script src="assets/js/slick.js"></script>
        <script src="assets/js/main.js"></script>

</html>
  )
}

export default ProductList