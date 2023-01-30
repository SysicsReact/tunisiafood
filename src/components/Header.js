import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth, db, logout } from "../firebase.config";
import $ from "jquery";
function Dashboard() {
    const [user] = useAuthState(auth);
   

    function loggedUser(user) {
        if (user) {
            return (
                <><button className="dashboard__btn" onClick={logout}> <Link to="/"> Logout </Link> </button><span><Link to="/MyProfile"> profile </Link></span></>
            )
        } else {
            return (
                <span><Link to="/Login"> join </Link></span>
            )
        }
    }
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
            <header className="header-part">
                <div className="container">
                    <div className="header-content">
                        <div className="header-media-group">
                            <button className="header-user"> <img src="assets/images/user.png" alt="user" /> </button>
                            <a href="index.html"><img src="assets/images/Logo.jpg" alt="logo" /></a>
                            <button className="header-src"><i className="fas fa-search"></i></button>
                        </div>

                        <a href="index.html" className="header-logo">
                            <Link to="/">
                                <img src="assets/images/Logo.jpg" alt="logo" />
                            </Link>
                        </a>
                        <li className="header-widget" title="My Account">

                            <img src="assets/images/user.png" alt="user" />
                            <div>
                                {loggedUser(user)}
                            </div>
                        </li>

                        <form className="header-form">
                            <input type="text" placeholder="Search anything..." />
                            <button><i className="fas fa-search"></i></button>
                        </form>

                        <div className="header-widget-group">
                            <a href="front/compare.html" className="header-widget" title="Compare List">
                                <i className="fas fa-random"></i>
                                <sup>0</sup>
                            </a>
                            <a href="wishlist.html" className="header-widget" title="Wishlist">
                                <i className="fas fa-heart"></i>
                                <sup>0</sup>
                            </a>
                            <button className="header-widget header-cart" title="Cartlist">
                                <i className="fas fa-shopping-basket"></i>
                                <sup>9+</sup>
                                <span>total price<small>$345.00</small></span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <aside class="cart-sidebar">
            <div class="cart-header">
                <div class="cart-total">
                    <i class="fas fa-shopping-basket"></i>
                    <span>total item (5)</span>
                </div>
                <button class="cart-close"><i class="icofont-close"></i></button>
            </div>
            <ul class="cart-list">
                <li class="cart-item">
                    <div class="cart-media">
                        <a href="#"><img src="assets/images/product/01.jpg" alt="product"/></a>
                        <button class="cart-delete"><i class="far fa-trash-alt"></i></button>
                    </div>
                    <div class="cart-info-group">
                        <div class="cart-info">
                            <h6><a href="product-single.html">existing product name</a></h6>
                            <p>Unit Price - $8.75</p>
                        </div>
                        <div class="cart-action-group">
                            <div class="product-action">
                                <button class="action-minus" title="Quantity Minus"><i class="icofont-minus"></i></button>
                                <input class="action-input" title="Quantity Number" type="text" name="quantity" value="1"/>
                                <button class="action-plus" title="Quantity Plus"><i class="icofont-plus"></i></button>
                            </div>
                            <h6>$56.98</h6>
                        </div>
                    </div>
                </li> 
                <li class="cart-item">
                    <div class="cart-media">
                        <a href="#"><img src="assets/images/product/02.jpg" alt="product"/></a>
                        <button class="cart-delete"><i class="far fa-trash-alt"></i></button>
                    </div>
                    <div class="cart-info-group">
                        <div class="cart-info">
                            <h6><a href="product-single.html">existing product name</a></h6>
                            <p>Unit Price - $8.75</p>
                        </div>
                        <div class="cart-action-group">
                            <div class="product-action">
                                <button class="action-minus" title="Quantity Minus"><i class="icofont-minus"></i></button>
                                <input class="action-input" title="Quantity Number" type="text" name="quantity" value="1"/>
                                <button class="action-plus" title="Quantity Plus"><i class="icofont-plus"></i></button>
                            </div>
                            <h6>$56.98</h6>
                        </div>
                    </div>
                </li>
                <li class="cart-item">
                    <div class="cart-media">
                        <a href="#"><img src="assets/images/product/03.jpg" alt="product"/></a>
                        <button class="cart-delete"><i class="far fa-trash-alt"></i></button>
                    </div>
                    <div class="cart-info-group">
                        <div class="cart-info">
                            <h6><a href="product-single.html">existing product name</a></h6>
                            <p>Unit Price - $8.75</p>
                        </div>
                        <div class="cart-action-group">
                            <div class="product-action">
                                <button class="action-minus" title="Quantity Minus"><i class="icofont-minus"></i></button>
                                <input class="action-input" title="Quantity Number" type="text" name="quantity" value="1"/>
                                <button class="action-plus" title="Quantity Plus"><i class="icofont-plus"></i></button>
                            </div>
                            <h6>$56.98</h6>
                        </div>
                    </div>
                </li>
                <li class="cart-item">
                    <div class="cart-media">
                        <a href="#"><img src="assets/images/product/04.jpg" alt="product"/></a>
                        <button class="cart-delete"><i class="far fa-trash-alt"></i></button>
                    </div>
                    <div class="cart-info-group">
                        <div class="cart-info">
                            <h6><a href="front/product-single.html">existing product name</a></h6>
                            <p>Unit Price - $8.75</p>
                        </div>
                        <div class="cart-action-group">
                            <div class="product-action">
                                <button class="action-minus" title="Quantity Minus"><i class="icofont-minus"></i></button>
                                <input class="action-input" title="Quantity Number" type="text" name="quantity" value="1"/>
                                <button class="action-plus" title="Quantity Plus"><i class="icofont-plus"></i></button>
                            </div>
                            <h6>$56.98</h6>
                        </div>
                    </div>
                </li>
                <li class="cart-item">
                    <div class="cart-media">
                        <a href="#"><img src="assets/images/product/05.jpg" alt="product"/></a>
                        <button class="cart-delete"><i class="far fa-trash-alt"></i></button>
                    </div>
                    <div class="cart-info-group">
                        <div class="cart-info">
                            <h6><a href="front/product-single.html">existing product name</a></h6>
                            <p>Unit Price - $8.75</p>
                        </div>
                        <div class="cart-action-group">
                            <div class="product-action">
                                <button class="action-minus" title="Quantity Minus"><i class="icofont-minus"></i></button>
                                <input class="action-input" title="Quantity Number" type="text" name="quantity" value="1"/>
                                <button class="action-plus" title="Quantity Plus"><i class="icofont-plus"></i></button>
                            </div>
                            <h6>$56.98</h6>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="cart-footer">
                <button class="coupon-btn">Do you have a coupon code?</button>
                <form class="coupon-form">
                    <input type="text" placeholder="Enter your coupon code"/>
                    <button type="submit"><span>apply</span></button>
                </form>
                <a class="cart-checkout-btn" href="front/checkout.html">
                    <span class="checkout-label">Proceed to Checkout</span>
                    <span class="checkout-price">$369.78</span>
                </a>
            </div>
            </aside>
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
    );

}


export default Dashboard;