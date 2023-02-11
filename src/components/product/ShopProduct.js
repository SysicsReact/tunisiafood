import {React, useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import useFetchCollection from '../customHooks/useFetchCollection'
import { STORE_PRODUCTS, selectProducts } from '../../redux/slice/productSlice'
import { Link } from 'react-router-dom'
import Intro from '../Intro'
import ProductList from './productList'
import { ADD_TO_CART } from '../../redux/slice/cartSlice'
import {  ToastContainer, toast } from "react-toastify";


const ShopProduct = () => {
    const {data, isLoading} = useFetchCollection("products")
    const products = useSelector(selectProducts)
    const [grid, setGrid] = useState(true);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(
            STORE_PRODUCTS({
                products:  data,
            })
          );
    },[dispatch,data]);

   const addToCart = (e) => {
dispatch(ADD_TO_CART(e));
   };
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
     <body>

    
     <ToastContainer></ToastContainer>
     <div className="backdrop"></div>
               <a class="backtop fas fa-arrow-up" href="#"></a>
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
                            <div class="form-group">
                                    <label class="form-label">Trier par:</label>
                                    <select class="form-select" >
                                        <option value="latest">Les plus récents</option>
                                        <option value="popular">Les plus populaires</option>
                                        <option value="lowest-price">Les moins chers</option>
                                        <option value="highest-price">Les plus chers</option>
                                    </select>
                            </div>
                            <div class="form-group">
                                    <label class="form-label">Catégory:</label>
                                    <select class="form-select" >
                                        <option value="sucré">Patisserie</option>
                                        <option value="plat">Nos Plats</option>
                                        <option value="epices">Nos Epices</option>
                                    </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-9">
                    <div class="row">
                            <div class="col-lg-12">
                                <div class="top-filter">
                                    <div class="filter-show">
                                        <label class="filter-label">Afficher :</label>
                                        <select class="form-select filter-select">
                                            <option value="1">9</option>
                                            <option value="2">12</option>
                                            <option value="3">15</option>
                                        </select>
                                    </div>
                                    <div class="filter-short">
                                        <label class="filter-label">Filtrer Par:</label>
                                        <select class="form-select filter-select">
                                            <option selected>Par Défaut</option>
                                            <option value="3">Catégory</option>
                                            <option value="1">Les plus plopulaires</option>
                                            <option value="2">Recommenddé</option>
                                        </select>
                                    </div>
                                    <div class="filter-action">
                                    </div>
                                    <div class="filter-action">
                                        <button  className="header-widget" title="Three Column">
                                            <i class="fas fa-th" onClick={()=>setGrid(true)}></i></button>
                                       <button className="header-widget" title="Item List"> 
                                       <i class="fas fa-th-list" onClick={()=>setGrid(false)}>
                                        </i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                            </div>
                        </div>
                        {grid &&
            <div class="row row-cols-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-3">
                        {grid &&products.slice(0,12).map((e) => {
                       const { id, tag, category,photo,name,price } = e;
                    return (    
                            <div class="col">    
                                <div class="product-card">
                                    <div class="product-media">
                                        <div class="product-label">
                                             {tag=="nouveau"&&
                                            <label class="label-text new">{tag}</label>}

                                            {tag=="solde"&&
                                            <label class="label-text sale">{tag}</label>}

                                            {tag=="populaire"&&
                                            <label class="label-text feat">{tag}</label>}

                                        </div>
                                        <button class="product-wish wish">
                                        {category=="plat"&&
                                            <label class="label-text order">{category}</label>}
                                        {category=="epice"&&
                                            <label class="label-text rate">{category}</label>}
                                        {category=="sucré"&&
                                            <label class="label-text sucre">{category}</label>}
                                        </button>
                                        <a class="product-image" href="product-video.html">
                                            <img src={photo} alt="product"/>
                                        </a>
                                        <div class="product-widget">
                                            <a title="Product Compare" href="compare.html" class="fas fa-random"></a>
                                            <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" class="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                            <a title="Product View" href="#" class="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                        </div>
                                    </div>
                                    <div class="product-content">
                                      
                                            <i class="product-mass">200 G</i>
                                      
                                        <h6 class="product-name">
                                            <a href="product-video.html">{name}</a>
                                        </h6>
                                        <h6 class="product-price">
                                            <del>€{price}</del>
                                            <span>€{price}<small>/Plat</small></span>
                                        </h6>
                                        <button class="product-add" title="Add to Cart" 
                                        onClick={()=> addToCart(e)}>
                                            <i class="fas fa-shopping-basket"></i>
                                            <span>Ajouter</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                               );
                              })}
                        
                    </div>
                    }
                    {!grid &&products.slice(0,12).map((e) => {
                       const { id, tag, category,photo,name,price,description } = e;
                    return (
                        
                        <ProductList {...products} />
                               );
                              })}      
            </div>
            </div></div>
            </section>
            <Intro/>
     
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
  )
}

export default ShopProduct