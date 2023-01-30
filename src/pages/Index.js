import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Product from "../components/Product";
import { Link,useNavigate } from "react-router-dom";
import { auth, db, logout } from "../firebase.config";
import { query, collection, getDocs, where } from "firebase/firestore";

function Dashboard() {
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();
   
   


    return (
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="name" content="Greeny" />
                <meta name="title" content="Greeny - eCommerce HTML Template" />
                <title>Classic Home - Greeny</title>
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
            </head>
            <body>
                <div className="backdrop"></div>


                <nav className="navbar-part">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="navbar-content">
                                    <ul className="navbar-list">
                                    <li className="navbar-item dropdown-megamenu">
                                        <span className="feature-name"><Link to="/" className="navbar-link" >  Home </Link></span>
                                        </li>
                                        <li className="navbar-item dropdown-megamenu">
                                        <span className="feature-name"><Link to="Shop/" className="navbar-link" >  shop </Link></span>
                                        </li>
                                        <li className="navbar-item dropdown-megamenu">
                                        <span className="feature-name"><Link to="About/" className="navbar-link" >  About Us</Link></span>
                                        </li>
                                        <li className="navbar-item dropdown-megamenu">
                                        <span className="feature-name"><Link to="Category/" className="navbar-link" >  Categories</Link></span>
                                        </li>
                                        <li className="navbar-item dropdown">
                                            pages
                                            <ul className="dropdown-position-list">
                                                <li><a href="front/faq.html">faqs</a></li>
                                                <li><a href="front/offer.html">offers</a></li>
                                                <li><a href="front/error.html">404 Error</a></li>
                                                <li><a href="front/email-template.html">email template</a></li>
                                            </ul>
                                        </li>
                                        <li className="navbar-item dropdown">
                                            authentic
                                            <ul className="dropdown-position-list">
                                                <li><a href="front/login.html">login</a></li>
                                                <li><a href="front/register.html">register</a></li>
                                                <li><a href="front/reset-password.html">reset password</a></li>
                                                <li><a href="front/change-password.html">change password</a></li>
                                            </ul>
                                        </li>
                                        <li className="navbar-item dropdown-megamenu">
                                        <span className="feature-name"><Link to="Blogs/" className="navbar-link" >  Blogs </Link></span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            <aside className="category-sidebar">
            <div className="category-header">
                <h4 className="category-title">
                    <i className="fas fa-align-left"></i>
                    <span>categories</span>
                </h4>
                <button className="category-close"><i className="icofont-close"></i></button>
            </div>
            <ul className="category-list">
                <li className="category-item">
                    <a className="category-link dropdown-link" href="#">
                        <i className="flaticon-vegetable"></i>
                        <span>vegetables</span>
                    </a>
                    <ul className="dropdown-list">
                        <li><a href="#">asparagus</a></li>
                        <li><a href="#">broccoli</a></li>
                        <li><a href="#">carrot</a></li>
                    </ul>
                </li>
                <li className="category-item">
                    <a className="category-link dropdown-link" href="#">
                        <i className="flaticon-groceries"></i>
                        <span>groceries</span>
                    </a>
                    <ul className="dropdown-list">
                        <li><a href="#">Grains & Bread</a></li>
                        <li><a href="#">Dairy & Eggs</a></li>
                        <li><a href="#">Oil & Fat</a></li>
                    </ul>
                </li>
                <li className="category-item">
                    <a className="category-link dropdown-link" href="#">
                        <i className="flaticon-fruit"></i>
                        <span>fruits</span>
                    </a>
                    <ul className="dropdown-list">
                        <li><a href="#">Apple</a></li>
                        <li><a href="#">Orange</a></li>
                        <li><a href="#">Strawberry</a></li>
                    </ul>
                </li>
                <li className="category-item">
                    <a className="category-link dropdown-link" href="#">
                        <i className="flaticon-dairy-products"></i>
                        <span>dairy farm</span>
                    </a>
                    <ul className="dropdown-list">
                        <li><a href="#">Egg</a></li>
                        <li><a href="#">milk</a></li>
                        <li><a href="#">butter</a></li>
                    </ul>
                </li>
                <li className="category-item">
                    <a className="category-link dropdown-link" href="#">
                        <i className="flaticon-crab"></i>
                        <span>sea foods</span>
                    </a>
                    <ul className="dropdown-list">
                        <li><a href="#">Lobster</a></li>
                        <li><a href="#">Octopus</a></li>
                        <li><a href="#">Shrimp</a></li>
                    </ul>
                </li>
                <li className="category-item">
                    <a className="category-link dropdown-link" href="#">
                        <i className="flaticon-salad"></i>
                        <span>diet foods</span>
                    </a>
                    <ul className="dropdown-list">
                        <li><a href="#">Salmon</a></li>
                        <li><a href="#">Potatoes</a></li>
                        <li><a href="#">Greens</a></li>
                    </ul>
                </li>
                <li className="category-item">
                    <a className="category-link dropdown-link" href="#">
                        <i className="flaticon-dried-fruit"></i>
                        <span>dry foods</span>
                    </a>
                    <ul className="dropdown-list">
                        <li><a href="#">noodles</a></li>
                        <li><a href="#">Powdered milk</a></li>
                        <li><a href="#">nut & yeast</a></li>
                    </ul>
                </li>
                <li className="category-item">
                    <a className="category-link dropdown-link" href="#">
                        <i className="flaticon-fast-food"></i>
                        <span>fast foods</span>
                    </a>
                    <ul className="dropdown-list">
                        <li><a href="#">mango</a></li>
                        <li><a href="#">plumsor</a></li>
                        <li><a href="#">raisins</a></li>
                    </ul>
                </li>
                <li className="category-item">
                    <a className="category-link dropdown-link" href="#">
                        <i className="flaticon-cheers"></i>
                        <span>drinks</span>
                    </a>
                    <ul className="dropdown-list">
                        <li><a href="#">Wine</a></li>
                        <li><a href="#">Juice</a></li>
                        <li><a href="#">Water</a></li>
                    </ul>
                </li>
                <li className="category-item">
                    <a className="category-link dropdown-link" href="#">
                        <i className="flaticon-beverage"></i>
                        <span>coffee</span>
                    </a>
                    <ul className="dropdown-list">
                        <li><a href="#">Cappuchino</a></li>
                        <li><a href="#">Espresso</a></li>
                        <li><a href="#">Latte</a></li>
                    </ul>
                </li>
                <li className="category-item">
                    <a className="category-link dropdown-link" href="#">
                        <i className="flaticon-barbecue"></i>
                        <span>meats</span>
                    </a>
                    <ul className="dropdown-list">
                        <li><a href="#">Meatball</a></li>
                        <li><a href="#">Sausage</a></li>
                        <li><a href="#">Poultry</a></li>
                    </ul>
                </li>
                <li className="category-item">
                    <a className="category-link dropdown-link" href="#">
                        <i className="flaticon-fish"></i>
                        <span>fishes</span>
                    </a>
                    <ul className="dropdown-list">
                        <li><a href="#">Agujjim</a></li>
                        <li><a href="#">saltfish</a></li>
                        <li><a href="#">pazza</a></li>
                    </ul>
                </li>
            </ul>
            <div className="category-footer">
                <p>All Rights Reserved by <a href="#">Mironcoder</a></p>
            </div>
            </aside>

                <div className="mobile-menu">
                    <a href="index.html" title="Home Page">
                        <i className="fas fa-home"></i>
                        <span>Home</span>
                    </a>
                    <button className="cate-btn" title="Category List">
                        <i className="fas fa-list"></i>
                        <span>category</span>
                    </button>
                    <button className="cart-btn" title="Cartlist">
                        <i className="fas fa-shopping-basket"></i>
                        <span>cartlist</span>
                        <sup>9+</sup>
                    </button>
                    <a href="front/wishlist.html" title="Wishlist">
                        <i className="fas fa-heart"></i>
                        <span>wishlist</span>
                        <sup>0</sup>
                    </a>
                    <a href="front/compare.html" title="Compare List">
                        <i className="fas fa-random"></i>
                        <span>compare</span>
                        <sup>0</sup>
                    </a>
                </div>
                <div className="modal fade" id="product-view">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <button className="modal-close icofont-close" data-bs-dismiss="modal"></button>
                            <div className="product-view">
                                <div className="row">
                                    <div className="col-md-6 col-lg-6">
                                        <div className="view-gallery">
                                            <div className="view-label-group">
                                                <label className="view-label new">new</label>
                                                <label className="view-label off">-10%</label>

                                            </div>
                                            <ul className="preview-slider slider-arrow">
                                                <li><img src="assets/images/Home-1.jpg" alt="product" /></li>
                                                <li><img src="assets/images/Home-1.jpg" alt="product" /></li>
                                                <li><img src="assets/images/Home-1.jpg" alt="product" /></li>
                                                <li><img src="assets/images/product/01.jpg" alt="product" /></li>
                                                <li><img src="assets/images/product/01.jpg" alt="product" /></li>
                                                <li><img src="assets/images/product/01.jpg" alt="product" /></li>
                                                <li><img src="assets/images/product/01.jpg" alt="product" /></li>
                                            </ul>
                                            <ul className="thumb-slider">
                                                <li><img src="assets/images/product/01.jpg" alt="product" /></li>
                                                <li><img src="assets/images/product/01.jpg" alt="product" /></li>
                                                <li><img src="assets/images/product/01.jpg" alt="product" /></li>
                                                <li><img src="assets/images/product/01.jpg" alt="product" /></li>
                                                <li><img src="assets/images/product/01.jpg" alt="product" /></li>
                                                <li><img src="assets/images/product/01.jpg" alt="product" /></li>
                                                <li><img src="assets/images/product/01.jpg" alt="product" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6">
                                        <div className="view-details">
                                            <h3 className="view-name">
                                                existing product name
                                            </h3>
                                            <div className="view-meta">
                                                <p>SKU:<span>1234567</span></p>
                                                <p>BRAND: radhuni</p>
                                            </div>
                                            <div className="view-rating">
                                                <i className="active icofont-star"></i>
                                                <i className="active icofont-star"></i>
                                                <i className="active icofont-star"></i>
                                                <i className="active icofont-star"></i>
                                                <i className="icofont-star"></i>
                                                <a href="front/product-video.html">(3 reviews)</a>
                                            </div>
                                            <h3 className="view-price">
                                                <del>$38.00</del>
                                                <span>$24.00<small>/per kilo</small></span>
                                            </h3>
                                            <p className="view-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit non tempora magni repudiandae sint suscipit tempore quis maxime explicabo veniam eos reprehenderit fuga</p>
                                            <div className="view-list-group">
                                                <label className="view-list-title">tags:</label>
                                                <ul className="view-tag-list">
                                                    <li>organic</li>
                                                    <li>vegetable</li>
                                                    <li>chilis</li>
                                                </ul>
                                            </div>
                                            <div className="view-list-group">
                                                <label className="view-list-title">Share:</label>
                                            </div>
                                            <div className="view-add-group">
                                                <button className="product-add" title="Add to Cart">
                                                    <i className="fas fa-shopping-basket"></i>
                                                    <span>add to cart</span>
                                                </button>
                                                <div className="product-action">
                                                    <button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button>
                                                    <input className="action-input" title="Quantity Number" type="text" name="quantity" value="1" />
                                                    <button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button>
                                                </div>
                                            </div>
                                            <div className="view-action-group">
                                                <i className="icofont-heart"></i>
                                                <span>add to wish</span>
                                                <a className="view-compare" href="front/compare.html" title="Compare This Item">
                                                    <i className="fas fa-random"></i>
                                                    <span>Compare This</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


        <section>
<div class="css-slider-wrapper">
    
    <input type="radio" name="slider" class="slide-radio1" checked id="slider_1"/>
    <input type="radio" name="slider" class="slide-radio2" id="slider_2"/>
    <input type="radio" name="slider" class="slide-radio3" id="slider_3"/>
    <input type="radio" name="slider" class="slide-radio4" id="slider_4"/>
    
    
    <div class="slider-pagination">
        
        <label for="slider_1" class="page1"></label> 
        <label for="slider_2" class="page2"></label>
        <label for="slider_3" class="page3"></label>
        <label for="slider_4" class="page4"></label>
    </div>
    
    <div class="next control">
        <label for="slider_1" class="numb1"><i class="fa fa-arrow-circle-right"></i></label>
        <label for="slider_2" class="numb2"><i class="fa fa-arrow-circle-right"></i></label>
        <label for="slider_3" class="numb3"><i class="fa fa-arrow-circle-right"></i></label>
        <label for="slider_4" class="numb4"><i class="fa fa-arrow-circle-right"></i></label>
    </div>
    <div class="previous control">
        <label for="slider_1" class="numb1"><i class="fa fa-arrow-circle-left"></i></label>
        <label for="slider_2" class="numb2"><i class="fa fa-arrow-circle-left"></i></label>
        <label for="slider_3" class="numb3"><i class="fa fa-arrow-circle-left"></i></label>
        <label for="slider_4" class="numb4"><i class="fa fa-arrow-circle-left"></i></label>
    </div>
    
    
    <div class="slider slide1">
    <div className="banner-part" style={{ backgroundImage: "url(assets/images/banner2.jpg)", backgroundRepeat: "no-repeat", backgroundPosition: "center", }}>
                    <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-lg-6">
                            <div className="banner-content">
                                <h1>enjoy your healthy life with our fresh vegetables.</h1>
                                <p>get your organic food with our dairy items.</p>
                                <div className="banner-btn">
                                    <a className="btn btn-inline" href="front/shop-4column.html">
                                        <i className="fas fa-shopping-basket"></i>
                                        <span>shop now</span>
                                    </a>
                                    <a className="btn btn-outline" href="offer.html">
                                        <i className="icofont-sale-discount"></i>
                                        <span>get offer</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
    </div>
    <div class="slider slide2">
    <div className="banner-part" style={{ backgroundImage: "url(assets/images/banner2.jpg)", backgroundRepeat: "no-repeat", backgroundPosition: "center", }}>
                    <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-lg-6">
                            <div className="banner-content">
                                <h1>enjoy your healthy life with our fresh vegetables.</h1>
                                <p>get your organic food with our dairy items.</p>
                                <div className="banner-btn">
                                    <a className="btn btn-inline" href="front/shop-4column.html">
                                        <i className="fas fa-shopping-basket"></i>
                                        <span>shop now</span>
                                    </a>
                                    <a className="btn btn-outline" href="offer.html">
                                        <i className="icofont-sale-discount"></i>
                                        <span>get offer</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
    </div>
    <div class="slider slide3">
    <div className="banner-part" style={{ backgroundImage: "url(assets/images/banner2.jpg)", backgroundRepeat: "no-repeat", backgroundPosition: "center", }}>
                    <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-lg-6">
                            <div className="banner-content">
                                <h1>enjoy your healthy life with our fresh vegetables.</h1>
                                <p>get your organic food with our dairy items.</p>
                                <div className="banner-btn">
                                    <a className="btn btn-inline" href="front/shop-4column.html">
                                        <i className="fas fa-shopping-basket"></i>
                                        <span>shop now</span>
                                    </a>
                                    <a className="btn btn-outline" href="offer.html">
                                        <i className="icofont-sale-discount"></i>
                                        <span>get offer</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
    </div>
    <div class="slider slide4">
    <div className="banner-part" style={{ backgroundImage: "url(assets/images/banner2.jpg)", backgroundRepeat: "no-repeat", backgroundPosition: "center", }}>
                    <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-lg-6">
                            <div className="banner-content">
                                <h1>enjoy your healthy life with our fresh vegetables.</h1>
                                <p>get your organic food with our dairy items.</p>
                                <div className="banner-btn">
                                    <a className="btn btn-inline" href="front/shop-4column.html">
                                        <i className="fas fa-shopping-basket"></i>
                                        <span>shop now</span>
                                    </a>
                                    <a className="btn btn-outline" href="offer.html">
                                        <i className="icofont-sale-discount"></i>
                                        <span>get offer</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
    </div>
</div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
        </section>
           <section className="section recent-part">
             
            </section>
            <section className="section recent-part">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-heading">
                            <h2>recently sold items</h2>
                        </div>
                    </div>
                </div>
                <div>
                <div> <Product /> </div>
               
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-btn-25">
                            <a href="front/shop-4column.html" className="btn btn-outline">
                                <i className="fas fa-eye"></i>
                                <span>show more</span>
                            </a>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        <div className="section promo-part">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="promo-img">
                            <a href=""><img src="assets/images/spices.jpg" alt="promo"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section className="section feature-part">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-heading">
                            <h2>our featured items</h2>
                        </div>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2">
                    <div className="col">
                        <div className="feature-card">
                            <div className="feature-media">
                                <div className="feature-label">
                                    <label className="label-text feat">feature</label>
                                </div>
                                <button className="feature-wish wish">
                                    <i className="fas fa-heart"></i>
                                </button>
                                <a className="feature-image" href="product-video.html">
                                    <img src="assets/images/product/09.jpg" alt="product"/>
                                </a>
                                <div className="feature-widget">
                                    <a title="Product Compare" href="compare.html" className="fas fa-random"></a>
                                    <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                    <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                </div>
                            </div>
                            <div className="feature-content">
                                <h6 className="feature-name">
                                    <a href="product-video.html">fresh organic green chilis</a>
                                </h6>
                                <div className="feature-rating">
                                    <i className="active icofont-star"></i>
                                    <i className="active icofont-star"></i>
                                    <i className="active icofont-star"></i>
                                    <i className="active icofont-star"></i>
                                    <i className="icofont-star"></i>
                                    <a href="product-video.html">(3 Reviews)</a>
                                </div>
                                <h6 className="feature-price">
                                    <del>$34</del>
                                    <span>$28<small>/piece</small></span>
                                </h6>
                                <p className="feature-desc">Lorem ipsum dolor sit consectetur adipisicing xpedita dicta amet olor ut eveniet commodi...</p>
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
                    <div className="col">
                        <div className="feature-card">
                            <div className="feature-media">
                                <div className="feature-label">
                                    <label className="label-text feat">feature</label>
                                </div>
                                <button className="feature-wish wish">
                                    <i className="fas fa-heart"></i>
                                </button>
                                <a className="feature-image" href="product-video.html">
                                    <img src="assets/images/product/09.jpg" alt="product"/>
                                </a>
                                <div className="feature-widget">
                                    <a title="Product Compare" href="compare.html" className="fas fa-random"></a>
                                    <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                    <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                </div>
                            </div>
                            <div className="feature-content">
                                <h6 className="feature-name">
                                    <a href="product-video.html">fresh organic green chilis</a>
                                </h6>
                                <div className="feature-rating">
                                    <i className="active icofont-star"></i>
                                    <i className="active icofont-star"></i>
                                    <i className="active icofont-star"></i>
                                    <i className="active icofont-star"></i>
                                    <i className="icofont-star"></i>
                                    <a href="product-video.html">(3 Reviews)</a>
                                </div>
                                <h6 className="feature-price">
                                    <del>$34</del>
                                    <span>$28<small>/piece</small></span>
                                </h6>
                                <p className="feature-desc">Lorem ipsum dolor sit consectetur adipisicing xpedita dicta amet olor ut eveniet commodi...</p>
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
                    <div className="col">
                        <div className="feature-card">
                            <div className="feature-media">
                                <div className="feature-label">
                                    <label className="label-text feat">feature</label>
                                </div>
                                <button className="feature-wish wish">
                                    <i className="fas fa-heart"></i>
                                </button>
                                <a className="feature-image" href="product-video.html">
                                    <img src="assets/images/product/09.jpg" alt="product"/>
                                </a>
                                <div className="feature-widget">
                                    <a title="Product Compare" href="compare.html" className="fas fa-random"></a>
                                    <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                    <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                </div>
                            </div>
                            <div className="feature-content">
                                <h6 className="feature-name">
                                    <a href="product-video.html">fresh organic green chilis</a>
                                </h6>
                                <div className="feature-rating">
                                    <i className="active icofont-star"></i>
                                    <i className="active icofont-star"></i>
                                    <i className="active icofont-star"></i>
                                    <i className="active icofont-star"></i>
                                    <i className="icofont-star"></i>
                                    <a href="product-video.html">(3 Reviews)</a>
                                </div>
                                <h6 className="feature-price">
                                    <del>$34</del>
                                    <span>$28<small>/piece</small></span>
                                </h6>
                                <p className="feature-desc">Lorem ipsum dolor sit consectetur adipisicing xpedita dicta amet olor ut eveniet commodi...</p>
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
                    <div className="col">
                        <div className="feature-card">
                            <div className="feature-media">
                                <div className="feature-label">
                                    <label className="label-text feat">feature</label>
                                </div>
                                <button className="feature-wish wish">
                                    <i className="fas fa-heart"></i>
                                </button>
                                <a className="feature-image" href="product-video.html">
                                    <img src="assets/images/product/09.jpg" alt="product"/>
                                </a>
                                <div className="feature-widget">
                                    <a title="Product Compare" href="compare.html" className="fas fa-random"></a>
                                    <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                    <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                </div>
                            </div>
                            <div className="feature-content">
                                <h6 className="feature-name">
                                    <a href="product-video.html">fresh organic green chilis</a>
                                </h6>
                                <div className="feature-rating">
                                    <i className="active icofont-star"></i>
                                    <i className="active icofont-star"></i>
                                    <i className="active icofont-star"></i>
                                    <i className="active icofont-star"></i>
                                    <i className="icofont-star"></i>
                                    <a href="product-video.html">(3 Reviews)</a>
                                </div>
                                <h6 className="feature-price">
                                    <del>$34</del>
                                    <span>$28<small>/piece</small></span>
                                </h6>
                                <p className="feature-desc">Lorem ipsum dolor sit consectetur adipisicing xpedita dicta amet olor ut eveniet commodi...</p>
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
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-btn-25">
                            <a href="shop-4column.html" className="btn btn-outline">
                                <i className="fas fa-eye"></i>
                                <span>show more</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section blog-part">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-heading">
                            <h2>Read our articles</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="blog-slider slider-arrow">
                            <div className="blog-card">
                                <div className="blog-media">
                                    <a className="blog-img" href="#">
                                        <img src="assets/images/blog/blog.jpg" alt="blog"/>
                                    </a>
                                </div>
                                <div className="blog-content">
                                    <ul className="blog-meta">
                                        <li>
                                            <i className="fas fa-user"></i>
                                            <span>admin</span>
                                        </li>
                                        <li>
                                            <i className="fas fa-calendar-alt"></i>
                                            <span>february 02, 2021</span>
                                        </li>
                                    </ul>
                                    <h4 className="blog-title">
                                        <a href="blog-details.html">Voluptate blanditiis provident Lorem ipsum dolor sit amet</a>
                                    </h4>
                                    <p className="blog-desc">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias autem recusandae deleniti nam dignissimos sequi ...
                                    </p>
                                    <a className="blog-btn" href="#">
                                        <span>read more</span>
                                        <i className="icofont-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-btn-25">
                            <a href="blog-grid.html" className="btn btn-outline">
                                <i className="fas fa-eye"></i>
                                <span>view all blog</span>
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
    );

}


export default Dashboard;