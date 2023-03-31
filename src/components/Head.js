import React from 'react'
import { Link } from 'react-router-dom'

function Head() {
  return (
     <>
            <head>
                <meta charset="UTF-8" />
                <meta name="name" content="Greeny" />
                <meta name="title" content="Greeny - eCommerce HTML Template" />
                <title>Classic Home - Greeny</title>
                <link rel="icon" href="assets/images/favicon.png"/>
<link rel="stylesheet" href="assets/fonts/flaticon/flaticon.css"/>
<link rel="stylesheet" href="assets/fonts/icofont/icofont.min.css"/>
<link rel="stylesheet" href="assets/fonts/fontawesome/fontawesome.min.css"/>
<link rel="stylesheet" href="assets/vendor/venobox/venobox.min.css"/>
<link rel="stylesheet" href="assets/vendor/slickslider/slick.min.css"/>
<link rel="stylesheet" href="assets/vendor/niceselect/nice-select.min.css"/>
<link rel="stylesheet" href="assets/vendor/bootstrap/bootstrap.min.css"/>
<link rel="stylesheet" href="assets/css/main.css"/>
<link rel="stylesheet" href="assets/css/index.css"/>
            </head>

            <header class="header-part">
            <div class="container">
                <div class="header-content">
                    <div class="header-media-group">
                        <button class="header-user"><img src="images/user.png" alt="user"/></button>
                        <a href="index.html"><img src="images/logo.png" alt="logo"/></a>
                        <button class="header-src"><i class="fas fa-search"></i></button>
                    </div>

                    <a href="index.html" class="header-logo">
                        <img src="images/logo.png" alt="logo"/>
                    </a>
                    <a href="login.html" class="header-widget" title="My Account">
                        <img src="images/user.png" alt="user"/>
                        <span>join</span>
                    </a>

                    <form class="header-form">
                        <input type="text" placeholder="Search anything..."/>
                        <button><i class="fas fa-search"></i></button>
                    </form>

                    <div class="header-widget-group">
                        <a href="compare.html" class="header-widget" title="Compare List">
                            <i class="fas fa-random"></i>
                            <sup>0</sup>
                        </a>
                        <a href="wishlist.html" class="header-widget" title="Wishlist">
                            <i class="fas fa-heart"></i>
                            <sup>0</sup>
                        </a>
                        <button class="header-widget header-cart" title="Cartlist">
                            <i class="fas fa-shopping-basket"></i>
                            <sup>9+</sup>
                            <span>total price<small>$345.00</small></span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
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
  )
}

export default Head