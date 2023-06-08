import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ref as sRef } from 'firebase/storage';
import { SetCartDetails, db } from "../firebase.config";
import { query, onSnapshot } from "firebase/firestore";
import { collection, doc } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { STORE_PRODUCTS } from "../redux/slice/productSlice";
import { data } from "jquery";




function AllProducts() {

   
     const [_products, setProducts] = useState([]);

     const dispatch = useDispatch();
     useEffect(() => {
          const q = query(collection(db, "products"));
          onSnapshot(q, (querySnapshot) => {
            setProducts(
              querySnapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
              }))
            );
            dispatch(
                STORE_PRODUCTS({
                    products:  querySnapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                      }))
                })
              )

          });
         
        }, []);
        
const [cart, setCart] = useState([]);
const addToCart = (product) => {
    console.log("We are in Add to cart");
    
    setCart([...cart, product]);
    console.log(cart.length);
    SetCartDetails(cart);
};
const filteredProducts = useSelector(STORE_PRODUCTS);
console.log(filteredProducts);
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="title" content="Tunisian Food" />
                <meta name="keywords" content="organic, food, shop, ecommerce, store, agriculture, vegetables, farm, grocery, natural, online store" />
                <title>Tout les produits</title>
                <link rel="icon" href="assets/images/favicon.png" />
                <link rel="stylesheet" href="assets/fonts/flaticon/flaticon.css" />
                <link rel="stylesheet" href="assets/fonts/icofont/icofont.min.css" />
                <link rel="stylesheet" href="assets/fonts/fontawesome/fontawesome.min.css" />
                <link rel="stylesheet" href="assets/vendor/venobox/venobox.min.css" />
                <link rel="stylesheet" href="assets/vendor/slickslider/slick.min.css" />
                <link rel="stylesheet" href="assets/vendor/niceselect/nice-select.min.css" />
                <link rel="stylesheet" href="assets/vendor/bootstrap/bootstrap.min.css" />
                <link rel="stylesheet" href="assets/css/main.css" />
                <link rel="stylesheet" href="assets/css/profile.css" />
            </head>
               <div className="backdrop"></div>
               <a className="backtop fas fa-arrow-up" href="#"></a>
            <section className="inner-section single-banner" style={{ backgroundImage: "url(assets/images/banner.jpg)", backgroundRepeat: "no-repeat", backgroundPosition: "center", }}>
                    <div className="container">
                        <h2>Tout Les Produits</h2>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Accueil</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Shop</li>
                        </ol>
                    </div>
            </section>
            <section className="inner-section shop-part">
            <div className="container">
                <div className="row content-reverse">
                    <div className="col-lg-3">
                        <div className="shop-widget">
                            <h6 className="shop-widget-title">Filter</h6>
                            <form>
                                <div className="shop-widget-group">
                                    <input type="text" placeholder="Min - 00"/>
                                    <input type="text" placeholder="Max - 5k"/>
                                </div>
                                <button className="shop-widget-btn">
                                    <i className="fas fa-search"></i>
                                    <span>Chercher</span>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="row">
                            <div className="col-lg-12">
                            </div>
                        </div>
                        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-3">
                        {_products.map((e) => {
                    return (
                                
                                <div className="col">
                                   
                                <div className="product-card">
                                    <div className="product-media">
                                        <div className="product-label">
                                             {e.data.tag=="nouveau"&&
                                            <label className="label-text new">{e.data.tag}</label>}

                                            {e.data.tag=="solde"&&
                                            <label className="label-text sale">{e.data.tag}</label>}

                                            {e.data.tag=="populaire"&&
                                            <label className="label-text feat">{e.data.tag}</label>}

                                        </div>
                                        <button className="product-wish wish">
                                        {e.data.category=="plat"&&
                                            <label className="label-text order">{e.data.category}</label>}
                                        {e.data.category=="epice"&&
                                            <label className="label-text rate">{e.data.category}</label>}
                                        {e.data.category=="sucré"&&
                                            <label className="label-text sucre">{e.data.category}</label>}
                                        </button>
                                        <a className="product-image" href="product-video.html">
                                            <img src={e.data.photo} alt="product"/>
                                        </a>
                                        <div className="product-widget">
                                            <a title="Product Compare" href="compare.html" className="fas fa-random"></a>
                                            <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                            <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                      
                                            <i className="product-mass">200 G</i>
                                      
                                        <h6 className="product-name">
                                            <a href="product-video.html">{e.data.name}</a>
                                        </h6>
                                        <h6 className="product-price">
                                            <del>€{e.data.price}</del>
                                            <span>€{e.data.price}<small>/Plat</small></span>
                                        </h6>
                                        <button onClick={() => addToCart(e.data)} className="product-add" title="Add to Cart">
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
                                <div className="bottom-paginate">
                                    <p className="page-info">Showing 12 of 60 Results</p>
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                <i className="fas fa-long-arrow-alt-left"></i>
                                            </a>
                                        </li>
                                        <li className="page-item"><a className="page-link active" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item">...</li>
                                        <li className="page-item"><a className="page-link" href="#">60</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                <i className="fas fa-long-arrow-alt-right"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            <body>
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

            </body>
        </html>
    );
}

export default AllProducts;