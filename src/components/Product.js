import React, {Component} from "react";
class Product extends Component{
     render() {
          return (
               <>
          <head>
               <meta charSet="UTF-8"/>
               <meta name="name" content="Greeny"/>
               <meta name="title" content="Greeny - eCommerce HTML Template"/>
               <link rel="icon" href="assets/images/favicon.png"/>
               <link rel="stylesheet" href="assets/fonts/flaticon/flaticon.css"/>
               <link rel="stylesheet" href="assets/fonts/icofont/icofont.min.css"/>
               <link rel="stylesheet" href="assets/fonts/fontawesome/fontawesome.min.css"/>
               <link rel="stylesheet" href="assets/vendor/venobox/venobox.min.css"/>
               <link rel="stylesheet" href="assets/vendor/slickslider/slick.min.css"/>
               <link rel="stylesheet" href="assets/vendor/niceselect/nice-select.min.css"/>
               <link rel="stylesheet" href="assets/vendor/bootstrap/bootstrap.min.css"/>
               <link rel="stylesheet" href="assets/css/main.css"/>
               <link rel="stylesheet" href="assets/css/home-classic.css"/>
          </head>
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                    <div className="col">
                        <div className="product-card">
                            <div className="product-media">
                                <div className="product-label">
                                    <label className="label-text sale">sale</label>
                                </div>
                                <button className="product-wish wish">
                                    <i className="fas fa-heart"></i>
                                </button>
                                <a className="product-image" href="front/product-video.html">
                                    <img src="assets/images/product/jelbena.jpg" alt="product"/>
                                </a>
                                <div className="product-widget">
                                    <a title="Product Compare" href="Shop.js" className="fas fa-random"></a>
                                    <a title="Product Video" href="Shop.js" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                    <a title="Product View" href="Shop.js" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                </div>
                            </div>
                            <div className="product-content">
                                <div className="product-rating">
                                    <i className="active icofont-star"></i>
                                    <i className="active icofont-star"></i>
                                    <i className="active icofont-star"></i>
                                    <i className="active icofont-star"></i>
                                    <i className="icofont-star"></i>
                                    <a href="product-video.html">(3)</a>
                                </div>
                                <h6 className="product-name">
                                    <a href="product-video.html">مرقة جلبانة بالعلوش</a>
                                </h6>
                                <h6 className="product-price">
                                    <del>$34</del>
                                    <span>$18<small>/plat</small></span>
                                </h6>
                                <button className="product-add" title="Add to Cart">
                                    <i className="fas fa-shopping-basket"></i>
                                    <span>add</span>
                                </button>
                                <div className="product-action">
                                    <button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button>
                                    <input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/>
                                    <button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button>
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
   </>
          );

     }
}

export default Product;