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
import { Helmet } from "react-helmet";




const ProductItems = () => {
   
     //const {id} = useParams();
     const location = useLocation(); 
     //var idProduct = Location.state.id;
     const [product, setProduct] = useState(null);
     const dispatch = useDispatch();
     const searchParams = new URLSearchParams(location.search);
     const id = searchParams.get('id');

     useEffect(() => {
        if(id){
            const q = query(
                collection(db, "products"),
                where(documentId(), "==", id)
              );
              const unsubscribe = onSnapshot(q, (querySnapshot) => {
                querySnapshot.forEach((doc) => {
                  setProduct(doc.data());
                  console.log(id)
                });
              });
        }

    }, [id]);

    const addToCart = (e) => {
        dispatch(ADD_TO_CART(e));
           };

    return(
   

        <>
        <head>
            <link rel="stylesheet" href="assets/vendor/bootstrap/bootstrap.min.css" />
            <link rel="stylesheet" href="assets/css/main.css" />
            <link rel="stylesheet" href="assets/css/home-classic.css" />
            <link rel="stylesheet" href="assets/css/product-details.css"/>
            {product!=null &&
            <Helmet>
                    {/* SEO metadata */}
                    <meta charset="utf-8" />
                    <title>{product.name}</title>
                    <meta name="name" content="Cook Tounsi" />
                    <meta name="description" content={product.description} />
                    <meta name="keywords" content={`cuisine, boissons, Tunisie, cuisine tunisienne, 
    traditionnel, plats, épices, europe, patisserie, livraison, ${product.searchTags.join(', ')} `} />
                     {/* Open Graph (OG) metadata for social media */}
                    <meta property="og:title" content={product.name} />
                    <meta property="og:image" content={product.photo} />
                  </Helmet>}
        </head>
        <ToastContainer />


            <section className="inner-section single-banner" style={{ backgroundImage: "url(assets/images/profileBanner.jpg)", backgroundRepeat: "no-repeat", backgroundPosition: "center", }}>
                <div className="container">
                    <h2>Tout Les Produits</h2>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Accueil</Link></li>
                        <li className="breadcrumb-item"><Link to="/ShopProduct">Tous Les Produits</Link></li>
                        <li className="breadcrumb-item active" aria-current="page"></li>
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

   
            </>
     );
};

export default ProductItems;