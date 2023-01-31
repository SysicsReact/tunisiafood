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
                <p>All Rights Reserved by <a href="#">Mironcoder</a></p>
            </div>
        </aside>

            <div className="mobile-menu">
                    <a href="index.html" title="Home Page">
                        <i className="fas fa-home"></i>
                        
                            <span><Link to="/">  Accueil </Link></span>
                    </a>
                    <button className="cate-btn" title="Category List">
                        <i className="fas fa-list"></i>
                        <span>Pages</span>
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