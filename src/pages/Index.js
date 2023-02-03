import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Product from "../components/Product";
import { Link,useNavigate } from "react-router-dom";
import { auth, db, logout } from "../firebase.config";
import { query, collection, getDocs, where } from "firebase/firestore";
import Loader from "../components/loader/Loader";

function Dashboard() {
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const [isLoading, setIsLoading ] = useState(false);
   
    

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
                <link rel="stylesheet" href="./components/loader/loader.css" />
            </head>
            <body>
            {isLoading && <Loader/>}
            {!isLoading &&
            <div>
                <div className="backdrop"></div>

            

            <section className="home-classic-slider slider-arrow">
                    <div className="banner-part" style={{ backgroundImage: "url(assets/images/banner2.jpg)", backgroundRepeat: "no-repeat", backgroundPosition: "center", borderRadius: "10px" }}>
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
        </div>
    }
                
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