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
    const fetchUserName = async () => {
        try {
            const q = query(collection(db, "users"), where("uid", "==", user?.uid));
            const doc = await getDocs(q);
            const data = doc.docs[0].data();
            setName(data.name);
        } catch (err) {
            console.error(err);
            alert("An error occured while fetching user data");
        }
    };
   


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
            </head>
            <body>
                <div className="backdrop"></div>


                <nav className="navbar-part">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="navbar-content">
                                    <ul className="navbar-list">
                                        <li className="navbar-item dropdown">
                                            home
                                        </li>
                                        <li className="navbar-item dropdown-megamenu">
                                            shop
                                        </li>
                                        <li className="navbar-item dropdown-megamenu">
                                            category
                                        </li>
                                        <li className="navbar-item dropdown">
                                            pages
                                            <ul className="dropdown-position-list">
                                                <li><a href="front/faq.html">faqs</a></li>
                                                <li><a href="front/offer.html">offers</a></li>
                                                <li><a href="front/profile.html">my profile</a></li>
                                                <li><a href="front/wallet.html">my wallet</a></li>
                                                <li><a href="front/about.html">about us</a></li>
                                                <li><a href="front/contact.html">contact us</a></li>
                                                <li><a href="front/privacy.html">privacy policy</a></li>
                                                <li><a href="front/coming-soon.html">coming soon</a></li>
                                                <li><a href="front/blank-page.html">blank page</a></li>
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
                                        <li className="navbar-item dropdown">
                                            blogs
                                            <ul className="dropdown-position-list">
                                                <li><a href="front/blog-grid.html">blog grid</a></li>
                                                <li><a href="front/blog-standard.html">blog standard</a></li>
                                                <li><a href="front/blog-details.html">blog details</a></li>
                                                <li><a href="front/blog-author.html">blog author</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <div className="navbar-info-group">
                                        <div className="navbar-info">
                                            <i className="icofont-ui-touch-phone"></i>
                                            <p>
                                                <small>call us</small>
                                                <span>(+880) 183 8288 389</span>
                                            </p>
                                        </div>
                                        <div className="navbar-info">
                                            <i className="icofont-ui-email"></i>
                                            <p>
                                                <small>email us</small>
                                                <span>support@greeny.com</span>
                                                <div className="dashboard">
                                                    <div className="dashboard__container">
                                                        Logged in as
                                                        <div>{name}</div>
                                                        <div>{user?.email}</div>
                                                        <button className="dashboard__btn" onClick={logout}>
                                                           <Link to="/"> Logout </Link> 
                                                        </button>
                                                    </div>
                                                </div>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
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
                <section className="home-classic-slider slider-arrow">
                    <div className="banner-part" style={{ backgroundImage: "url(assets/images/Home-2.png)", backgroundRepeat: "no-repeat", backgroundPosition: "center", }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-11 col-lg-7 mx-auto">
                                    <div className="banner-content text-center">
                                        <h1>enjoy your healthy life with our fresh vegetables.</h1>
                                        <p>get your organic food with our dairy items.</p>
                                        <div className="banner-btn">
                                            <a className="btn btn-inline" href="front/shop-4column.html">
                                                <i className="fas fa-shopping-basket"></i>
                                                <span>shop now</span>
                                            </a>
                                            <a className="btn btn-outline" href="front/offer.html">
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
                <section class="section recent-part">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-heading">
                            <h2>recently sold items</h2>
                        </div>
                    </div>
                </div>
                <div>
                <div> <Product /> </div>
               
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-btn-25">
                            <a href="front/shop-4column.html" class="btn btn-outline">
                                <i class="fas fa-eye"></i>
                                <span>show more</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
                </section>
        <div class="section promo-part">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="promo-img">
                            <a href=""><img src="assets/images/spices.jpg" alt="promo"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section class="section feature-part">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-heading">
                            <h2>our featured items</h2>
                        </div>
                    </div>
                </div>
                <div class="row row-cols-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2">
                    <div class="col">
                        <div class="feature-card">
                            <div class="feature-media">
                                <div class="feature-label">
                                    <label class="label-text feat">feature</label>
                                </div>
                                <button class="feature-wish wish">
                                    <i class="fas fa-heart"></i>
                                </button>
                                <a class="feature-image" href="product-video.html">
                                    <img src="assets/images/product/09.jpg" alt="product"/>
                                </a>
                                <div class="feature-widget">
                                    <a title="Product Compare" href="compare.html" class="fas fa-random"></a>
                                    <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" class="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                    <a title="Product View" href="#" class="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                </div>
                            </div>
                            <div class="feature-content">
                                <h6 class="feature-name">
                                    <a href="product-video.html">fresh organic green chilis</a>
                                </h6>
                                <div class="feature-rating">
                                    <i class="active icofont-star"></i>
                                    <i class="active icofont-star"></i>
                                    <i class="active icofont-star"></i>
                                    <i class="active icofont-star"></i>
                                    <i class="icofont-star"></i>
                                    <a href="product-video.html">(3 Reviews)</a>
                                </div>
                                <h6 class="feature-price">
                                    <del>$34</del>
                                    <span>$28<small>/piece</small></span>
                                </h6>
                                <p class="feature-desc">Lorem ipsum dolor sit consectetur adipisicing xpedita dicta amet olor ut eveniet commodi...</p>
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
                        <div class="feature-card">
                            <div class="feature-media">
                                <div class="feature-label">
                                    <label class="label-text feat">feature</label>
                                </div>
                                <button class="feature-wish wish">
                                    <i class="fas fa-heart"></i>
                                </button>
                                <a class="feature-image" href="product-video.html">
                                    <img src="assets/images/product/09.jpg" alt="product"/>
                                </a>
                                <div class="feature-widget">
                                    <a title="Product Compare" href="compare.html" class="fas fa-random"></a>
                                    <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" class="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                    <a title="Product View" href="#" class="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                </div>
                            </div>
                            <div class="feature-content">
                                <h6 class="feature-name">
                                    <a href="product-video.html">fresh organic green chilis</a>
                                </h6>
                                <div class="feature-rating">
                                    <i class="active icofont-star"></i>
                                    <i class="active icofont-star"></i>
                                    <i class="active icofont-star"></i>
                                    <i class="active icofont-star"></i>
                                    <i class="icofont-star"></i>
                                    <a href="product-video.html">(3 Reviews)</a>
                                </div>
                                <h6 class="feature-price">
                                    <del>$34</del>
                                    <span>$28<small>/piece</small></span>
                                </h6>
                                <p class="feature-desc">Lorem ipsum dolor sit consectetur adipisicing xpedita dicta amet olor ut eveniet commodi...</p>
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
                        <div class="feature-card">
                            <div class="feature-media">
                                <div class="feature-label">
                                    <label class="label-text feat">feature</label>
                                </div>
                                <button class="feature-wish wish">
                                    <i class="fas fa-heart"></i>
                                </button>
                                <a class="feature-image" href="product-video.html">
                                    <img src="assets/images/product/09.jpg" alt="product"/>
                                </a>
                                <div class="feature-widget">
                                    <a title="Product Compare" href="compare.html" class="fas fa-random"></a>
                                    <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" class="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                    <a title="Product View" href="#" class="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                </div>
                            </div>
                            <div class="feature-content">
                                <h6 class="feature-name">
                                    <a href="product-video.html">fresh organic green chilis</a>
                                </h6>
                                <div class="feature-rating">
                                    <i class="active icofont-star"></i>
                                    <i class="active icofont-star"></i>
                                    <i class="active icofont-star"></i>
                                    <i class="active icofont-star"></i>
                                    <i class="icofont-star"></i>
                                    <a href="product-video.html">(3 Reviews)</a>
                                </div>
                                <h6 class="feature-price">
                                    <del>$34</del>
                                    <span>$28<small>/piece</small></span>
                                </h6>
                                <p class="feature-desc">Lorem ipsum dolor sit consectetur adipisicing xpedita dicta amet olor ut eveniet commodi...</p>
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
                        <div class="feature-card">
                            <div class="feature-media">
                                <div class="feature-label">
                                    <label class="label-text feat">feature</label>
                                </div>
                                <button class="feature-wish wish">
                                    <i class="fas fa-heart"></i>
                                </button>
                                <a class="feature-image" href="product-video.html">
                                    <img src="assets/images/product/09.jpg" alt="product"/>
                                </a>
                                <div class="feature-widget">
                                    <a title="Product Compare" href="compare.html" class="fas fa-random"></a>
                                    <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" class="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                    <a title="Product View" href="#" class="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                </div>
                            </div>
                            <div class="feature-content">
                                <h6 class="feature-name">
                                    <a href="product-video.html">fresh organic green chilis</a>
                                </h6>
                                <div class="feature-rating">
                                    <i class="active icofont-star"></i>
                                    <i class="active icofont-star"></i>
                                    <i class="active icofont-star"></i>
                                    <i class="active icofont-star"></i>
                                    <i class="icofont-star"></i>
                                    <a href="product-video.html">(3 Reviews)</a>
                                </div>
                                <h6 class="feature-price">
                                    <del>$34</del>
                                    <span>$28<small>/piece</small></span>
                                </h6>
                                <p class="feature-desc">Lorem ipsum dolor sit consectetur adipisicing xpedita dicta amet olor ut eveniet commodi...</p>
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
                                <span>show more</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
                
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
            </body>
        </html>
    );

}


export default Dashboard;