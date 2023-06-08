import React from "react";
import { Link } from "react-router-dom";
import MyComponent from "./test1";
class Footer extends React.Component{
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
        <footer className="footer-part">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-xl-3">
                        <div className="footer-widget">
                        <h3 className="footer-title">Cook Tounsi</h3>
                            <p className="footer-desc">Un voyage à travers les souvenirs, les recettes secrètes de famille et la bistronomie moderne de La Tunisie.</p>
                            <ul className="footer-social">
                                <li><a className="icofont-facebook" href="#"></a></li>
                                <li><a className="icofont-twitter" href="#"></a></li>
                                <li><a className="icofont-linkedin" href="#"></a></li>
                                <li><a className="icofont-instagram" href="#"></a></li>
                                <li><a className="icofont-pinterest" href="#"></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className="footer-widget contact">
                            <h3 className="footer-title">Contactez-nous</h3>
                            <ul className="footer-contact">
                                <li>
                                    <i className="icofont-ui-email"></i>
                                    <p>
                                        <span>contact@cooktounsi.com</span>
                                        <span>carrer@cooktounsi.com</span>
                                    </p>
                                </li>
                                <li>
                                    <i className="icofont-ui-touch-phone"></i>
                                    <p>
                                        <span>+216 50 450 960</span>
                                        <span>+216 42 226 434</span>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className="footer-widget">
                            <h3 className="footer-title">Liens</h3>
                            <div className="footer-links">
                                <ul>
                                <li><Link to="/">Accueil</Link>
                                </li>
                                <li><Link to="Profile">Mon Profile</Link>
                                </li>
                                <li><Link to="Contact">Contacts</Link>
                                </li>
                                </ul>
                                <ul>
                                <li><Link to="ShopProduct">Shop</Link>
                                </li>
                                <li><Link to="About">Concept</Link>
                                </li>
                                <li><Link to="Blog">Blogs</Link>
                                </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className="footer-widget">
                        <h3 className="footer-title">Liens</h3>
                            <div className="footer-links">
                                <ul>
                                <li><Link to="/Politics">Confidentialité</Link>
                                </li>
                                <li><Link to="/Cgv">Conditions générales de ventes</Link>
                                </li>
                                </ul>
                                <ul>
                                <li><Link to="ShopProduct">Cookies</Link>
                                </li>
                                <li><Link to="/Faq">FAQ</Link>
                                </li>            
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="footer-bottom">
                            <p className="footer-copytext">&copy;  Tous droits d'auteur réservés par <a target="_blank" href="https://themeforest.net/user/mironcoder">Sysics Studio</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
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

export default Footer;