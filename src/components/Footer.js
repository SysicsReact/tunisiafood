import React from "react";
import { Link } from "react-router-dom";
import ContactUs from "./ContactUs";
class Footer extends React.Component{
     render() {
    return (
    <>
        <footer className="footer-part">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-xl-3">
                        <div className="footer-widget">
                        <h3 className="footer-title">Cook Tounsi</h3>
                            <p className="footer-desc">Un voyage à travers les souvenirs, les recettes secrètes de famille et la bistronomie moderne de La Tunisie.</p>
                            <ul className="footer-social">
                                <li><a className="icofont-facebook" href="https://www.facebook.com/cooktounsi"></a></li>
                                <li><a className="icofont-instagram" href="https://www.instagram.com/cooktounsi.store/"></a></li>
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
                                    </p>
                                </li>
                                <li>
                                    <i className="icofont-ui-touch-phone"></i>
                                    <p>
                                        <a style={{color:'var(--primary-tshadow)'}} href="tel:+216 51 320 220">+216 51 320 220</a>
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
                                <li><Link to="MyProfile">Mon Profile</Link>
                                </li>
                                <li><Link to="Contact">Contact</Link>
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
                            <p className="footer-copytext">&copy;  Tous droits d'auteur réservés par <a target="_blank" href="">Sysics Studio</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
   );

}
}

export default Footer;