import React from "react";
import { Link } from "react-router-dom";
class Navbar extends React.Component{
     render() {

          return (
    <>
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
     </>
   );

}
}

export default Navbar;