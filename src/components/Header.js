import React from "react";
import { Link } from "react-router-dom";
class Header extends React.Component{
     render() {
          return (
               <html lang="en">
               <head>
               <meta charset="UTF-8"/>
               <meta name="name" content="Greeny"/>
               <meta name="title" content="Greeny - eCommerce HTML Template"/>
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
               <link rel="stylesheet" href="assets/css/home-classic.css"/>
           </head>
   <header className="header-part">
               <div className="container">
                   <div className="header-content">
                       <div className="header-media-group">
                           <button className="header-user"><img src="assets/images/user.png" alt="user"/></button>
                           <a href="index.html"><img src="assets/images/Logo.jpg" alt="logo"/></a>
                           <button className="header-src"><i className="fas fa-search"></i></button>
                       </div>
   
                       <a href="index.html" className="header-logo">
                       <Link to="/">
                           <img src="assets/images/Logo.jpg" alt="logo"/>
                       </Link>
                       </a>
                       <li className="header-widget" title="My Account">
                         
                           <img src="assets/images/user.png" alt="user"/>
                           <span><Link to="/Login"> join </Link></span>
                       </li>
   
                       <form className="header-form">
                           <input type="text" placeholder="Search anything..."/>
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
}

export default Header;