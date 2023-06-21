import React from "react";
import { Link, redirect, useNavigate, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Intro from "../Intro";
import { query, where, onSnapshot,collection, documentId, doc } from "firebase/firestore";
import useFetchDocument from "../customHooks/useFetchDocument";
import { db } from "../../firebase.config";
import { ADD_TO_CART } from "../../redux/slice/cartSlice";
import { useDispatch } from "react-redux";




const ProductItems = () => {
   
     //const {id} = useParams();
     const Location = useLocation(); 
     var idProduct = Location.state.id;
     const [product, setProduct] = useState(null);
     const dispatch = useDispatch();
     
     useEffect(() => {
        //alert(id)
        const q = query(
            collection(db, "products"),
            where(documentId(), "==", idProduct)
          );
          const unsubscribe = onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
              setProduct(doc.data());
            });
          });
    }, [idProduct]);

    const addToCart = (e) => {
        dispatch(ADD_TO_CART(e));
           };

     
    return(
        <html lang="en">
        <head>
        <meta charSet="UTF-8" />
        <meta name="name" content="Cook Tounsi" />
        <meta name="title" content="Cook Tounsi: vente de vos plats tunisiens préférés 2023" />
        <meta name="keywords" content="cuisine, Tunisie, cuisine tunisienne, 
        traditionnel, plats, épices, patisserie, healthy, lifestyle, food,  " />
         <title>Cook Tounsi- Détails du produit</title>
            <link rel="icon" href="assets/images/favicon.png" />
            <link rel="stylesheet" href="assets/fonts/flaticon/flaticon.css" />
            <link rel="stylesheet" href="assets/fonts/icofont/icofont.min.css" />
            <link rel="stylesheet" href="assets/fonts/fontawesome/fontawesome.min.css" />
            <link rel="stylesheet" href="assets/vendor/venobox/venobox.min.css" />
            <link rel="stylesheet" href="assets/vendor/slickslider/slick.min.css" />
            <link rel="stylesheet" href="assets/vendor/niceselect/nice-select.min.css" />
            <link rel="stylesheet" href="assets/vendor/bootstrap/bootstrap.min.css" />
            <link rel="stylesheet" href="assets/css/main.css" />
            <link rel="stylesheet" href="assets/css/product-details.css"></link>
        </head>
        <body>
        <ToastContainer></ToastContainer>
      
                 
               <section className="inner-section single-banner" style={{ backgroundImage: "url(assets/images/banner.jpg)", backgroundRepeat: "no-repeat", backgroundPosition: "center", }}>
                       <div className="container">
                           <h2>Tout Les Produits</h2>
                           <ol className="breadcrumb">
                               <li className="breadcrumb-item"><Link to="/">Accueil</Link></li>
                               <li className="breadcrumb-item active" aria-current="page">Détails du produit</li>
                           </ol>
                       </div>
               </section>
            <section className="inner-section">
            {product!=null &&
                  <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="details-gallery">
                            <div className="details-label-group">
                            {product.category=="plat"&&
                                            <label className="label-text order">{product.category}</label>}
                                        {product.category=="epice"&&
                                            <label className="label-text rate">{product.category}</label>}
                                            {product.category=="Boisson"&&
                                            <label className="label-text drink">{product.category}</label>}
                                        {product.category=="Sucré"&&
                                            <label className="label-text sucre">Pâtisserie</label>}
                                <label className="details-label off">-{product.discount}%</label>
                                {product.tag=="nouveau"&&
                                            <label className="label-text new">{product.tag}</label>}
                                            {product.tag=="solde"&&
                                            <label className="label-text sale">{product.tag}</label>}
                                            {product.tag=="populaire"&&
                                            <label className="label-text feat">{product.tag}</label>}
                            </div>
                            <ul className="details-thumb">
                                <li><img  alt= {product.name} src={product.photo} /></li>
                                
                            </ul>
                        </div>
                    </div>
                  
                    <div className="col-lg-6">
                        <div className="details-content">
                            <h3 className="details-name"><a href="#">{product.name}</a></h3>
                            <div className="details-meta">
                                <p>Réf:<span>{idProduct}</span></p>
                                <p>BRAND:<a href="#">Cool Tounsi</a></p>
                            </div>
                            {product.discount !== 0 &&
                            <h3 className="details-price">
                                <del> €{product.price}</del>
                                <span> € {Math.round((product.price-(product.price*product.discount)/100)*100)/100}<small>/ {product.weight} G</small></span>
                            </h3>}
                            {product.discount=="0"&&
                            <h3 className="details-price">
                                <span> € {product.price}<small>/ {product.weight} G</small></span>
                            </h3>}
                            <p className="details-desc">{product.description}</p>
                            <p className="details-desc">{product.longDescription}</p>
                            <div className="details-list-group">
                                <label className="details-list-title">tags:</label>
                               <ul className="details-tag-list">
                                    <li><a href="#">{product.tag}</a></li>
                                    <li><a href="#">{product.category}</a></li>
                                </ul>
                            </div>

                            <div className="details-add-group">
                                <button className="product-add" title="Add to Cart" 
                                onClick={()=> addToCart(product)}>
                                    <i className="fas fa-shopping-basket"></i>
                                    <span>Ajouter au chariot</span>
                                </button>
                                <div className="product-action">
                                    <button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button>
                                    <input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/>
                                    <button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button>
                                </div>
                            </div>
                            <div className="details-action-group">
                                <a className="details-wish wish" href="#" title="Add Your Wishlist">
                                    <i className="icofont-heart"></i>
                                    <span>Ajouter au wishlist</span>
                                </a>
                                <Link to="/ShopProduct"><a className="details-compare" href="" title="Compare This Item" >
                                    <i className="fas fa-random"></i>
                                    <span>Retour aux produits</span>
                                </a></Link>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            </>}
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
     );
};

export default ProductItems;