import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link,useNavigate } from "react-router-dom";
import { auth, db, logout } from "../firebase.config";
import Loader from "../components/loader/Loader";
import Intro from "../components/Intro";
import { useSelector, useDispatch } from "react-redux";
import useFetchCollection from "../components/customHooks/useFetchCollection";
import { STORE_PRODUCTS,selectProducts } from "../redux/slice/productSlice";

function Dashboard() {
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();
    //const [isLoading, setIsLoading ] = useState(false);
    const {data, isLoading} = useFetchCollection("products")
    const products = useSelector(selectProducts)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(
            STORE_PRODUCTS({
                products:  data,
            })
          );
    },[dispatch,data]);


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
                <link rel="stylesheet" href="assets/css/slider.css" />
                <link rel="stylesheet" href="./components/loader/loader.css" />
            </head>
            <body>
            {isLoading && <Loader/>}
            {!isLoading &&
            <div>
                <div className="backdrop"></div>
                <a class="backtop fas fa-arrow-up" href="#"></a>
            <section className="home-classic-slider slider-arrow">
                    <div className="banner-part" style={{ backgroundImage: "url(assets/images/banner2.jpg)", backgroundRepeat: "no-repeat", backgroundPosition: "center", borderRadius: "10px" }}>
                    <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-lg-6">
                            <div className="banner-content">
                                <h1>Nous partageons l’amour comme nous partageons la nourriture</h1>
                                <p>Avec nous tout est une question de sens et de souvenirs d’enfance de réunions de famille. L’odeur des épices fraîches, le goût des plats traditionnels. </p>
                                <div className="banner-btn">
                                <Link to="/ShopProduct"><a className="btn btn-inline">
                                        <i className="fas fa-shopping-basket"></i>
                                        <span>Achat</span>
                                    </a></Link>
                                    <Link to="/Contact">  <a className="btn btn-outline">
                                   <i className="icofont-sale-discount"></i>
                                        <span>Contact</span>
                                    </a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    </div>
            </section>
            <section className="section recent-part">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-heading">
                            <h2>
    Articles vendus récemment</h2>
                        </div>
                    </div>
                </div>
                <div>
                <div>
                <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                        
                {!isLoading &&products.slice(0,10).map((e) => {
                       const { id, tag, category,photo,name,price } = e;
                      
                    return (
                        <div class="col">
                            <div class="product-card">
                                <div class="product-media">
                                    <div class="product-label">
                                        <label class="label-text sale">sale</label>
                                    </div>
                                    <button class="product-wish wish">
                                        <i class="fas fa-heart"></i>
                                    </button>
                                    <a class="product-image" href="front/product-video.html">
                                        <img src={photo} alt="product"/>
                                    </a>
                                    <div class="product-widget">
                                        <a title="Product Compare" href="Shop.js" class="fas fa-random"></a>
                                        <a title="Product Video" href="Shop.js" class="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                        <a title="Product View" href="Shop.js" class="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                    </div>
                                </div>
                                <div class="product-content">
                                    <div class="product-rating">
                                        <i class="active icofont-star"></i>
                                        <i class="active icofont-star"></i>
                                        <i class="active icofont-star"></i>
                                        <i class="active icofont-star"></i>
                                        <i class="icofont-star"></i>
                                        <a href="product-video.html">(3)</a>
                                    </div>
                                    <h6 class="product-name">
                                        <a href="product-video.html">{name}</a>
                                    </h6>
                                    <h6 class="product-price">
                                        <del>${price}</del>
                                        <span>${price}<small>/plat</small></span>
                                    </h6>
                                    <button class="product-add" title="Add to Cart">
                                        <i class="fas fa-shopping-basket"></i>
                                        <span>Ajouter</span>
                                    </button>
                                    <div class="product-action">
                                        <button class="action-minus" title="Quantity Minus"><i class="icofont-minus"></i></button>
                                        <input class="action-input" title="Quantity Number" type="text" name="quantity" value="1"/>
                                        <button class="action-plus" title="Quantity Plus"><i class="icofont-plus"></i></button>
                                    </div>
                                </div>
                            </div>
                            </div>  
                     );
                    })}
                              
              </div>
                     </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-btn-25">
                        <Link to="/Shop"> <a className="btn btn-outline">
                                <i className="fas fa-eye"></i>
                                <span>Voir Plus</span>
                            </a></Link>
                        </div>
                    </div>
                </div>
                </div>
            </section>
             <div className="section promo-part">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="promo-img">
                            <a href=""><img src="assets/images/spices.jpg" alt="promo"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section className="section feature-part">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-heading">
                            <h2>Articles à la une</h2>
                        </div>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2">
                {!isLoading &&products.slice(0,4).map((e) => {
                       const { id, tag, category,photo,name,price, description } = e;
                      
                    return (
                    <div className="col">
                        <div className="feature-card">
                            <div className="feature-media">
                                <div className="feature-label">
                                    <label className="label-text feat">{tag}</label>
                                </div>
                                <button className="feature-wish wish">
                                    <i className="fas fa-heart"></i>
                                </button>
                                <a className="feature-image" href="product-video.html">
                                    <img src={photo} alt="product"/>
                                </a>
                                <div className="feature-widget">
                                    <a title="Product Compare" href="compare.html" className="fas fa-random"></a>
                                    <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                    <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                </div>
                            </div>
                            <div className="feature-content">
                                <h6 className="feature-name">
                                    <a href="product-video.html">{name}</a>
                                </h6>
                                <div className="feature-rating">
                                    <i className="active icofont-star"></i>
                                    <i className="active icofont-star"></i>
                                    <i className="active icofont-star"></i>
                                    <i className="active icofont-star"></i>
                                    <i className="icofont-star"></i>
                                    <a href="product-video.html">(3 Reviews)</a>
                                </div>
                                <h6 className="feature-price">
                                    <del>${price}</del>
                                    <span>${price}<small>/plat</small></span>
                                </h6>
                                <p className="feature-desc">{description}</p>
                                <button className="product-add" title="Add to Cart">
                                    <i className="fas fa-shopping-basket"></i>
                                    <span>Ajouter</span>
                                </button>
                                <div className="product-action">
                                    <button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button>
                                    <input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/>
                                    <button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                      );
                    })}
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-btn-25">
                           <Link to="/Shop"> <a className="btn btn-outline">
                                <i className="fas fa-eye"></i>
                                <span>Voir Plus</span>
                            </a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Intro/>
        <section className="section blog-part">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                    <div className="section-heading">
                            <h2>   </h2>
                        </div>
                        <div className="section-heading">
                            <h2>Lire nos articles</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="blog-slider slider-arrow">
                            <div className="blog-card">
                                <div className="blog-media">
                                    <a className="blog-img" href="#">
                                        <img src="assets/images/blog/blog.jpg" alt="blog"/>
                                    </a>
                                </div>
                                <div className="blog-content">
                                    <ul className="blog-meta">
                                        <li>
                                            <i className="fas fa-user"></i>
                                            <span>admin</span>
                                        </li>
                                        <li>
                                            <i className="fas fa-calendar-alt"></i>
                                            <span>february 02, 2021</span>
                                        </li>
                                    </ul>
                                    <h4 className="blog-title">
                                        <a href="blog-details.html">Voluptate blanditiis provident Lorem ipsum dolor sit amet</a>
                                    </h4>
                                    <p className="blog-desc">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias autem recusandae deleniti nam dignissimos sequi ...
                                    </p>
                                    <a className="blog-btn" href="#">
                                        <span>read more</span>
                                        <i className="icofont-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-btn-25">
                        <Link to="/Blog"> <a href="blog-grid.html" className="btn btn-outline">
                                <i className="fas fa-eye"></i>
                                <span> Voir tous les blogs</span>
                            </a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    }   
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