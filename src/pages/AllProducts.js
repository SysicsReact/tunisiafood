import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ref as sRef } from 'firebase/storage';
import { db } from "../firebase.config";
import { query, onSnapshot } from "firebase/firestore";
import { collection, doc } from "firebase/firestore";

function AllProducts() {
     const [products, setProducts] = useState([]);
     useEffect(() => {
          const q = query(collection(db, "products"));
          onSnapshot(q, (querySnapshot) => {
            setProducts(
              querySnapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
              }))
            );
          });
        }, []);

    return (
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
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
            <section class="inner-section single-banner" style={{ backgroundImage: "url(assets/images/banner.jpg)", backgroundRepeat: "no-repeat", backgroundPosition: "center", }}>
                    <div class="container">
                        <h2>Tout Les Produits</h2>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/">Accueil</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">Shop</li>
                        </ol>
                    </div>
            </section>
            <section class="inner-section shop-part">
            <div class="container">
                <div class="row content-reverse">
                    <div class="col-lg-3">
                        <div class="shop-widget">
                            <h6 class="shop-widget-title">Filter</h6>
                            <form>
                                <div class="shop-widget-group">
                                    <input type="text" placeholder="Min - 00"/>
                                    <input type="text" placeholder="Max - 5k"/>
                                </div>
                                <button class="shop-widget-btn">
                                    <i class="fas fa-search"></i>
                                    <span>Chercher</span>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-9">
                        <div class="row">
                            <div class="col-lg-12">
                            </div>
                        </div>
                        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-3">
                        {products.map((e) => {
                    return (
                                <div class="col">
                                <div class="product-card">
                                    <div class="product-media">
                                        <div class="product-label">
                                             {e.data.tag=="nouveau"&&
                                            <label class="label-text new">{e.data.tag}</label>}

                                            {e.data.tag=="solde"&&
                                            <label class="label-text sale">{e.data.tag}</label>}

                                            {e.data.tag=="populaire"&&
                                            <label class="label-text feat">{e.data.tag}</label>}

                                        </div>
                                        <button class="product-wish wish">
                                        {e.data.category=="plat"&&
                                            <label class="label-text order">{e.data.category}</label>}
                                        {e.data.category=="epice"&&
                                            <label class="label-text rate">{e.data.category}</label>}
                                        {e.data.category=="sucré"&&
                                            <label class="label-text sucre">{e.data.category}</label>}
                                        </button>
                                        <a class="product-image" href="product-video.html">
                                            <img src={e.data.photo} alt="product"/>
                                        </a>
                                        <div class="product-widget">
                                            <a title="Product Compare" href="compare.html" class="fas fa-random"></a>
                                            <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" class="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                            <a title="Product View" href="#" class="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                        </div>
                                    </div>
                                    <div class="product-content">
                                        <div class="product-rating">
                                            <i class="active icofont-star"></i>
                                            <i class="active icofont-star"></i>
                                            <i class="active icofont-star"></i>
                                            <i class="active icofont-star"></i>
                                            <i class="icofont-star"></i>
                                        </div>
                                        <h6 class="product-name">
                                            <a href="product-video.html">{e.data.name}</a>
                                        </h6>
                                        <h6 class="product-price">
                                            <del>€{e.data.price}</del>
                                            <span>€{e.data.price}<small>/Plat</small></span>
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
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="bottom-paginate">
                                    <p class="page-info">Showing 12 of 60 Results</p>
                                    <ul class="pagination">
                                        <li class="page-item">
                                            <a class="page-link" href="#">
                                                <i class="fas fa-long-arrow-alt-left"></i>
                                            </a>
                                        </li>
                                        <li class="page-item"><a class="page-link active" href="#">1</a></li>
                                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                        <li class="page-item">...</li>
                                        <li class="page-item"><a class="page-link" href="#">60</a></li>
                                        <li class="page-item">
                                            <a class="page-link" href="#">
                                                <i class="fas fa-long-arrow-alt-right"></i>
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