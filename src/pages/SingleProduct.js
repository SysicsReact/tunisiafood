import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import Intro from '../components/Intro';
function SingleProduct()
{
return(
     <html lang='en'>
            <head>
                <meta charset="UTF-8" />
                <meta name="name" content="Tunisian Food" />
                <meta name="title" content="Tunisian Food - ecommerce " />
                <title>Accueil - Tunisian Food</title>
                <link rel="icon" href="assets/images/favicon.png" />
                <link rel="stylesheet" href="assets/fonts/flaticon/flaticon.css" />
                <link rel="stylesheet" href="assets/fonts/icofont/icofont.min.css" />
                <link rel="stylesheet" href="assets/fonts/fontawesome/fontawesome.min.css" />
                <link rel="stylesheet" href="assets/vendor/venobox/venobox.min.css" />
                <link rel="stylesheet" href="assets/vendor/slickslider/slick.min.css" />
                <link rel="stylesheet" href="assets/vendor/niceselect/nice-select.min.css" />
                <link rel="stylesheet" href="assets/vendor/bootstrap/bootstrap.min.css" />
                <link rel="stylesheet" href="assets/css/main.css" />
                <link rel="stylesheet" href="assets/css/home-classic.css" />
                <link rel="stylesheet" href="assets/css/slider.css" />
                <link rel="stylesheet" href="assets/css/product-details.css" />
                
            </head>
        <body>
            <section class="inner-section single-banner" style={{ backgroundImage: "url(assets/images/blog/B3.jpg)", backgroundRepeat: "no-repeat", backgroundPosition: "center", }}>
            <div class="container">
                <h2>blogs</h2>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to="/">Accueil</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">Tout les blogs</li>
                </ol>
            </div>
            </section>
            <section class="inner-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="details-gallery">
                            <div class="details-label-group">
                                <label class="details-label new">new</label>
                                <label class="details-label off">-10%</label>
                            </div>
                            <ul class="details-preview"> 
                                <li><img src="assets/images/product/01.jpg" alt="product"/></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <ul class="product-navigation">
                            <li class="product-nav-prev">
                                <a href="#">
                                    <i class="icofont-arrow-left"></i>
                                    prev product
                                    <span class="product-nav-popup">
                                        <img src="assets/images/product/02.jpg" alt="product"/>
                                        <small>green chilis</small>
                                    </span>
                                </a>
                            </li>
                            <li class="product-nav-next">
                                <a href="#">
                                    next product
                                    <i class="icofont-arrow-right"></i>
                                    <span class="product-nav-popup">
                                        <img src="assets/images/product/03.jpg" alt="product"/>
                                        <small>green chilis</small>
                                    </span>
                                </a>
                            </li>
                        </ul>
                        <div class="details-content">
                            <h3 class="details-name"><a href="#">existing product name</a></h3>
                            <div class="details-meta">
                                <p>SKU:<span>1234567</span></p>
                                <p>BRAND:<a href="#">radhuni</a></p>
                            </div>
                            <div class="details-rating">
                                <i class="active icofont-star"></i>
                                <i class="active icofont-star"></i>
                                <i class="active icofont-star"></i>
                                <i class="active icofont-star"></i>
                                <i class="icofont-star"></i>
                                <a href="#">(3 reviews)</a>
                            </div>
                            <h3 class="details-price">
                                <del>$38.00</del>
                                <span>$24.00<small>/per kilo</small></span>
                            </h3>
                            <p class="details-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit facere harum natus amet soluta fuga consectetur alias veritatis quisquam ab eligendi itaque eos maiores quibusdam.</p>
                            <div class="details-list-group">
                                <label class="details-list-title">tags:</label>
                                <ul class="details-tag-list">
                                    <li><a href="#">organic</a></li>
                                    <li><a href="#">fruits</a></li>
                                    <li><a href="#">chilis</a></li>
                                </ul>
                            </div>
                            <div class="details-list-group">
                                <label class="details-list-title">Share:</label>
                                <ul class="details-share-list">
                                    <li><a href="#" class="icofont-facebook" title="Facebook"></a></li>
                                    <li><a href="#" class="icofont-twitter" title="Twitter"></a></li>
                                    <li><a href="#" class="icofont-linkedin" title="Linkedin"></a></li>
                                    <li><a href="#" class="icofont-instagram" title="Instagram"></a></li>
                                </ul>
                            </div>
                            <div class="details-add-group">
                                <button class="product-add" title="Add to Cart">
                                    <i class="fas fa-shopping-basket"></i>
                                    <span>add to cart</span>
                                </button>
                                <div class="product-action">
                                    <button class="action-minus" title="Quantity Minus"><i class="icofont-minus"></i></button>
                                    <input class="action-input" title="Quantity Number" type="text" name="quantity" value="1"/>
                                    <button class="action-plus" title="Quantity Plus"><i class="icofont-plus"></i></button>
                                </div>
                            </div>
                            <div class="details-action-group">
                                <a class="details-wish wish" href="#" title="Add Your Wishlist">
                                    <i class="icofont-heart"></i>
                                    <span>add to wish</span>
                                </a>
                                <a class="details-compare" href="compare.html" title="Compare This Item">
                                    <i class="fas fa-random"></i>
                                    <span>Compare This</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            <section class="inner-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="product-details-frame">
                            <h3 class="frame-title">Description</h3>
                            <div class="tab-descrip">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, ex! Incidunt nemo aspernatur fugiat, saepe suscipit sit perferendis illum magnam voluptates aliquid blanditiis, dolor assumenda dolorem ullam harum, doloribus molestiae! Unde voluptas maiores exercitationem aperiam debitis accusantium, placeat vero neque, atque eius numquam incidunt, culpa a odit consequatur nostrum aut nisi quisquam sequi dignissimos sed. Odio necessitatibus officiis repudiandae omnis soluta fugiat aliquam eius quae. Unde, ipsam atque assumenda consequuntur quia alias nulla, cupiditate ab quos eveniet pariatur expedita repellendus fugit. Quisquam fuga et, dolore aut temporibus atque itaque nesciunt reiciendis nobis, deleniti nihil vel qui perferendis molestias aliquam doloremque.</p>
                            </div>
                        </div>
                        <div class="product-details-frame">
                            <h3 class="frame-title">Spacification</h3>
                            <table class="table table-bordered">
                                <tbody>
                                    <tr>
                                        <th scope="row">Product code</th>
                                        <td>SKU: 101783</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Weight</th>
                                        <td>1kg, 2kg</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Styles</th>
                                        <td>@Girly</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Properties</th>
                                        <td>Short Dress</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="product-details-frame">
                            <h3 class="frame-title">Reviews (1)</h3>
                            <ul class="review-list">
                                <li class="review-item">
                                    <div class="review-media">
                                        <a class="review-avatar" href="#">
                                            <img src="assets/images/avatar/01.jpg" alt="review"/>
                                        </a>
                                        <h5 class="review-meta">
                                            <a href="#">miron mahmud</a>
                                            <span>June 02, 2020</span>
                                        </h5>
                                    </div>
                                    <ul class="review-rating">
                                        <li class="icofont-ui-rating"></li>
                                        <li class="icofont-ui-rating"></li>
                                        <li class="icofont-ui-rating"></li>
                                        <li class="icofont-ui-rating"></li>
                                        <li class="icofont-ui-rate-blank"></li>
                                    </ul>
                                    <p class="review-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus hic amet qui velit, molestiae suscipit perferendis, autem doloremque blanditiis dolores nulla excepturi ea nobis!</p>
                                </li>
                            </ul>
                        </div>
                        <div class="product-details-frame">
                            <h3 class="frame-title">add your review</h3>
                            <form class="review-form">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="star-rating">
                                            <input type="radio" name="rating" id="star-1"/><label for="star-1"></label>
                                            <input type="radio" name="rating" id="star-2"/><label for="star-2"></label>
                                            <input type="radio" name="rating" id="star-3"/><label for="star-3"></label>
                                            <input type="radio" name="rating" id="star-4"/><label for="star-4"></label>
                                            <input type="radio" name="rating" id="star-5"/><label for="star-5"></label>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <textarea class="form-control" placeholder="Describe"></textarea>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Name"/>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <input type="email" class="form-control" placeholder="Email"/>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            <Intro/>
            <section class="inner-section">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="section-heading">
                            <h2>related this items</h2>
                        </div>
                    </div>
                </div>
                <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                    <div class="col">
                        <div class="product-card">
                            <div class="product-media">
                                <div class="product-label">
                                    <label class="label-text sale">sale</label>
                                </div>
                                <button class="product-wish wish">
                                    <i class="fas fa-heart"></i>
                                </button>
                                <a class="product-image" href="product-video.html">
                                    <img src="assets/images/product/06.jpg" alt="product"/>
                                </a>
                                <div class="product-widget">
                                    <a title="Product Compare" href="compare.html" class="fas fa-random"></a>
                                    <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" class="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                    <a title="Product View" href="#" class="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                </div>
                            </div>
                            <div class="product-content">
                                <div class="product-rating">
                                    <i class="active icofont-star"></i>
                                    <i class="active icofont-star"></i>
                                    <i class="active icofont-star"></i>
                                    <i class="active icofont-star"></i>
                                    <i class="icofont-star"></i>
                                    <a href="product-video.html">(3)</a>
                                </div>
                                <h6 class="product-name">
                                    <a href="product-video.html">fresh green chilis</a>
                                </h6>
                                <h6 class="product-price">
                                    <del>$34</del>
                                    <span>$28<small>/piece</small></span>
                                </h6>
                                <button class="product-add" title="Add to Cart">
                                    <i class="fas fa-shopping-basket"></i>
                                    <span>add</span>
                                </button>
                                <div class="product-action">
                                    <button class="action-minus" title="Quantity Minus"><i class="icofont-minus"></i></button>
                                    <input class="action-input" title="Quantity Number" type="text" name="quantity" value="1"/>
                                    <button class="action-plus" title="Quantity Plus"><i class="icofont-plus"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="product-card">
                            <div class="product-media">
                                <div class="product-label">
                                    <label class="label-text sale">sale</label>
                                </div>
                                <button class="product-wish wish">
                                    <i class="fas fa-heart"></i>
                                </button>
                                <a class="product-image" href="product-video.html">
                                    <img src="assets/images/product/07.jpg" alt="product"/>
                                </a>
                                <div class="product-widget">
                                    <a title="Product Compare" href="compare.html" class="fas fa-random"></a>
                                    <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" class="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                    <a title="Product View" href="#" class="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                </div>
                            </div>
                            <div class="product-content">
                                <div class="product-rating">
                                    <i class="active icofont-star"></i>
                                    <i class="active icofont-star"></i>
                                    <i class="active icofont-star"></i>
                                    <i class="active icofont-star"></i>
                                    <i class="icofont-star"></i>
                                    <a href="product-video.html">(3)</a>
                                </div>
                                <h6 class="product-name">
                                    <a href="product-video.html">fresh green chilis</a>
                                </h6>
                                <h6 class="product-price">
                                    <del>$34</del>
                                    <span>$28<small>/piece</small></span>
                                </h6>
                                <button class="product-add" title="Add to Cart">
                                    <i class="fas fa-shopping-basket"></i>
                                    <span>add</span>
                                </button>
                                <div class="product-action">
                                    <button class="action-minus" title="Quantity Minus"><i class="icofont-minus"></i></button>
                                    <input class="action-input" title="Quantity Number" type="text" name="quantity" value="1"/>
                                    <button class="action-plus" title="Quantity Plus"><i class="icofont-plus"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="product-card">
                            <div class="product-media">
                                <div class="product-label">
                                    <label class="label-text sale">sale</label>
                                </div>
                                <button class="product-wish wish">
                                    <i class="fas fa-heart"></i>
                                </button>
                                <a class="product-image" href="product-video.html">
                                    <img src="assets/images/product/08.jpg" alt="product"/>
                                </a>
                                <div class="product-widget">
                                    <a title="Product Compare" href="compare.html" class="fas fa-random"></a>
                                    <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" class="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                    <a title="Product View" href="#" class="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                </div>
                            </div>
                            <div class="product-content">
                                <div class="product-rating">
                                    <i class="active icofont-star"></i>
                                    <i class="active icofont-star"></i>
                                    <i class="active icofont-star"></i>
                                    <i class="active icofont-star"></i>
                                    <i class="icofont-star"></i>
                                    <a href="product-video.html">(3)</a>
                                </div>
                                <h6 class="product-name">
                                    <a href="product-video.html">fresh green chilis</a>
                                </h6>
                                <h6 class="product-price">
                                    <del>$34</del>
                                    <span>$28<small>/piece</small></span>
                                </h6>
                                <button class="product-add" title="Add to Cart">
                                    <i class="fas fa-shopping-basket"></i>
                                    <span>add</span>
                                </button>
                                <div class="product-action">
                                    <button class="action-minus" title="Quantity Minus"><i class="icofont-minus"></i></button>
                                    <input class="action-input" title="Quantity Number" type="text" name="quantity" value="1"/>
                                    <button class="action-plus" title="Quantity Plus"><i class="icofont-plus"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="product-card product-disable">
                            <div class="product-media">
                                <div class="product-label">
                                    <label class="label-text sale">sale</label>
                                </div>
                                <button class="product-wish wish">
                                    <i class="fas fa-heart"></i>
                                </button>
                                <a class="product-image" href="product-video.html">
                                    <img src="assets/images/product/09.jpg" alt="product"/>
                                </a>
                                <div class="product-widget">
                                    <a title="Product Compare" href="compare.html" class="fas fa-random"></a>
                                    <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" class="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                    <a title="Product View" href="#" class="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                </div>
                            </div>
                            <div class="product-content">
                                <div class="product-rating">
                                    <i class="active icofont-star"></i>
                                    <i class="active icofont-star"></i>
                                    <i class="active icofont-star"></i>
                                    <i class="active icofont-star"></i>
                                    <i class="icofont-star"></i>
                                    <a href="product-video.html">(3)</a>
                                </div>
                                <h6 class="product-name">
                                    <a href="product-video.html">fresh green chilis</a>
                                </h6>
                                <h6 class="product-price">
                                    <del>$34</del>
                                    <span>$28<small>/piece</small></span>
                                </h6>
                                <button class="product-add" title="Add to Cart">
                                    <i class="fas fa-shopping-basket"></i>
                                    <span>add</span>
                                </button>
                                <div class="product-action">
                                    <button class="action-minus" title="Quantity Minus"><i class="icofont-minus"></i></button>
                                    <input class="action-input" title="Quantity Number" type="text" name="quantity" value="1"/>
                                    <button class="action-plus" title="Quantity Plus"><i class="icofont-plus"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="product-card">
                            <div class="product-media">
                                <div class="product-label">
                                    <label class="label-text sale">sale</label>
                                </div>
                                <button class="product-wish wish">
                                    <i class="fas fa-heart"></i>
                                </button>
                                <a class="product-image" href="product-video.html">
                                    <img src="assets/images/product/10.jpg" alt="product"/>
                                </a>
                                <div class="product-widget">
                                    <a title="Product Compare" href="compare.html" class="fas fa-random"></a>
                                    <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" class="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                    <a title="Product View" href="#" class="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                </div>
                            </div>
                            <div class="product-content">
                                <div class="product-rating">
                                    <i class="active icofont-star"></i>
                                    <i class="active icofont-star"></i>
                                    <i class="active icofont-star"></i>
                                    <i class="active icofont-star"></i>
                                    <i class="icofont-star"></i>
                                    <a href="product-video.html">(3)</a>
                                </div>
                                <h6 class="product-name">
                                    <a href="product-video.html">fresh green chilis</a>
                                </h6>
                                <h6 class="product-price">
                                    <del>$34</del>
                                    <span>$28<small>/piece</small></span>
                                </h6>
                                <button class="product-add" title="Add to Cart">
                                    <i class="fas fa-shopping-basket"></i>
                                    <span>add</span>
                                </button>
                                <div class="product-action">
                                    <button class="action-minus" title="Quantity Minus"><i class="icofont-minus"></i></button>
                                    <input class="action-input" title="Quantity Number" type="text" name="quantity" value="1"/>
                                    <button class="action-plus" title="Quantity Plus"><i class="icofont-plus"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-btn-25">
                            <a href="shop-4column.html" class="btn btn-outline">
                                <i class="fas fa-eye"></i>
                                <span>view all related</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </section>

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
        </body>
     </html>
)

}

export default SingleProduct;