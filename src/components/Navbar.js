import React from "react";
import { Link } from "react-router-dom";
class Navbar extends React.Component{
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
        <nav className="navbar-part">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="navbar-content">
                                    <ul className="navbar-list">
                                    <li className="navbar-item dropdown-megamenu">
                                        <span className="feature-name"><Link to="/" className="navbar-link" >  
                                        Home </Link></span>
                                        </li>
                                        <li className="navbar-item dropdown-megamenu">
                                        <span className="feature-name"><Link to="Shop" className="navbar-link" >  shop </Link></span>
                                        </li>
                                        <li className="navbar-item dropdown-megamenu">
                                        <span className="feature-name"><Link to="About" className="navbar-link" >Concept</Link></span>
                                        </li>
                                        <li className="navbar-item dropdown"><Link to="Category" className="navbar-link" >  
                                            Catégories</Link>
                                            <ul className="dropdown-position-list">
                                                <li><a href="front/faq.html">Nos Plats</a></li>
                                                <li><a href="front/offer.html">Nos Epices</a></li>
                                                <li><a href="front/error.html">Produits Sucrés</a></li>
                                            </ul>
                                        </li>
                                        <li className="navbar-item dropdown-megamenu">
                                        <span className="feature-name"><Link to="Blog" className="navbar-link" > Blog </Link></span>
                                        </li>
                                        <li className="navbar-item dropdown-megamenu">
                                        <span className="feature-name"><Link to="Offre" className="navbar-link" > Offres </Link></span>
                                        </li>
                                        <li className="navbar-item dropdown-megamenu">
                                        <span className="feature-name"><Link to="Contact" className="navbar-link" > Contacts </Link></span>
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
                    <span>Pages</span>
                </h4>
                <button className="category-close"><i className="icofont-close"></i></button>
            </div>
            <ul className="category-list">
                <li className="category-item">
                <Link to="Category" className="category-link dropdown-link" >  
                    Catégories</Link>
                </li>
                <li className="category-item">
                <Link to="Shop" className="category-link dropdown-link" >  
                    Shop</Link>
                </li>
                <li className="category-item">
                <Link to="Shop" className="category-link dropdown-link" >  
                    A propos</Link>
                </li>
                <li className="category-item">
                <Link to="Category" className="category-link dropdown-link" >  
                    Catégories</Link>
                </li>
                <li className="category-item">
                <Link to="Blog" className="category-link dropdown-link" >  
                    Blogs</Link>
                </li>
                <li className="category-item">
                <Link to="Blog" className="category-link dropdown-link" >  
                    Offres</Link>
                </li>
                <li className="category-item">
                <Link to="Contact" className="category-link dropdown-link" >  
                    Contacts</Link>
                    <ul className="dropdown-list">
                        <li><a href="#">noodles</a></li>
                        <li><a href="#">Powdered milk</a></li>
                        <li><a href="#">nut & yeast</a></li>
                    </ul>
                </li>
            </ul>
            <div className="category-footer">
                <p>All Rights Reserved by <a href="#">Tunisia Food</a></p>
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
}

export default Navbar;