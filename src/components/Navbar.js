import React from "react";
import { Link } from "react-router-dom";
class Navbar extends React.Component{
     render() {

          return (
    <>
        <head>
               <meta charSet="UTF-8"/>
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
                                    <li className="navbar-item">
                                        <span className="feature-name"><Link to="/" className="navbar-link" >  
                                        Accueil </Link></span>
                                        </li>
                                        <li className="navbar-item">
                                        <span className="feature-name"><Link to="ShopProduct" className="navbar-link" >  Produits </Link></span>
                                        </li>
                                        <li className="navbar-item">
                                        <span className="feature-name"><Link to="About" className="navbar-link" >Concept</Link></span>
                                        </li>
                                        <li className="navbar-item">
                                        <span className="feature-name"><Link to="Blog" className="navbar-link" > Blog </Link></span>
                                        </li>
                                        <li className="navbar-item">
                                        <span className="feature-name"><Link to="Contact" className="navbar-link" > Contact </Link></span>
                                        </li>
                                        <li className="navbar-item">
                                        <span className="feature-name"><Link to="Faq" className="navbar-link" > FAQ </Link></span>
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
                <li className="category-item" >
                  <a className="category-link"  href="/ShopProduct">
                    Produits</a>
                </li>
                <li className="category-item">
                <a href="About" className="category-link" >  
                    A propos</a>
                </li>
                <li className="category-item">
                <a href="Blog" className="category-link" >  
                    Blogs</a>
                </li>
                <li className="category-item">
                <a href="Blog" className="category-link" >  
                    Offres</a>
                </li>
                <li className="category-item">
                <a href="Contact" className="category-link" >  
                    Contacts</a>
                </li>
            </ul>
            <div className="category-footer">
                <p>Tous droits réservés par <a href="/">Cooktounsi</a></p>
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
     </>
   );

}
}

export default Navbar;