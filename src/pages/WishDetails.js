import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_FROM_WISH, selectWishItems } from "../redux/slice/wishSlice";
import { ADD_TO_CART } from "../redux/slice/cartSlice";
import { Link } from "react-router-dom";

const WishDetails = () => {
    const navigate = useNavigate();
    const wishItems = useSelector(selectWishItems);
    const dispatch = useDispatch();
    const addToCart = (wish) => {
        dispatch(
           

            ADD_TO_CART(wish),
            
            );
            dispatch(
           
                REMOVE_FROM_WISH(wish),
                
                
                );
           };
    const removeFromWish = (wish) => {
        dispatch(
            REMOVE_FROM_WISH(wish));
    }

    return (
        <html lang="en">
          <head>
          <meta charSet="UTF-8" />
    <meta name="name" content="Cook Tounsi" />
    <meta name="title" content="Cook Tounsi: vente de vos plats tunisiens préférés 2023" />
    <meta name="keywords" content="cuisine, Tunisie, cuisine tunisienne, 
        traditionnel, plats, épices, patisserie, healthy, lifestyle, food,  " />
    <title>Liste des souhaits - Cook Tounsi</title>
          <link rel="icon" href="assets/images/favicon.png" />
          <link rel="stylesheet" href="assets/fonts/flaticon/flaticon.css" />
          <link rel="stylesheet" href="assets/fonts/icofont/icofont.min.css" />
          <link rel="stylesheet" href="assets/fonts/fontawesome/fontawesome.min.css" />
          <link rel="stylesheet" href="assets/vendor/venobox/venobox.min.css" />
          <link rel="stylesheet" href="assets/vendor/slickslider/slick.min.css" />
          <link rel="stylesheet" href="assets/vendor/niceselect/nice-select.min.css" />
          <link rel="stylesheet" href="assets/vendor/bootstrap/bootstrap.min.css" />
          <link rel="stylesheet" href="assets/css/main.css" />
          <link rel="stylesheet" href="assets/css/user-auth.css" />
          <link rel="stylesheet" href="assets/css/checkout.css"></link>
          </head>
          <body>
          <div className="backdrop"></div>
                <a className="backtop fas fa-arrow-up" href="#"></a>
                <section className="inner-section single-banner" style={{ backgroundImage: "url(assets/images/spices.jpg)", backgroundRepeat: "no-repeat", backgroundPosition: "center", }}>
                    <div className="container">
                        <h2>Votre Liste des souhaits</h2>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Accueil</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Liste des souhaits</li>
                        </ol>
                    </div>
                </section>

            {wishItems.length === 0 ? (
                <>
                    <div className="cart-info-group">
                        <div className="cart-footer">
                            <h6 className="coupon-btn">Votre Chariot Est Vide !</h6>
                        </div>
                    </div>
                    <div className="cart-footer">
                        <a className="cart-checkout-btn" href="#">
                            <span className="checkout-label">Parcourir les produits</span>
                            <span className="checkout-price"><i className="fas fa-shopping-basket"></i></span>
                        </a>
                    </div>
                </>
            ) : (
                <>
                      
             <section className="inner-section checkout-part">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="alert-info">
                            <p> <Link to="/ShopProduct"><a href="">Retour aux achats ?</a></Link></p>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="account-card">
                            <div className="account-title">
                                <h4>Votre liste de souhaits</h4>
                            </div>
                            <div className="account-content">
                                <div className="table-scroll">
                                    <table className="table-list">
                                    <thead>
                                    <tr>
                                        <th scope="col">Product</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">shopping</th>
                                        <th scope="col">action</th>
                                    </tr>
                                </thead>
                                        {wishItems.map((wish, index) => {
                            const { id, name, price, photo,} = wish;
                            return (
                                <>
                                        <tbody>
                                            <tr>
                                        <td className="table-image"><img src={photo} alt="product"/></td>
                                        <td className="table-name"><h6>{name}</h6></td>
                                        <td className="table-price"><h6>${price}<small>/kilo</small></h6></td>
                                        <td className="table-shop">
                                            <button className="product-add" title="Ajouter" onClick={() => addToCart(wish)} >Ajouter</button>
                                        </td>
                                        <td className="table-action">
                                            <a className="trash"  title="Supprimer" onClick={() => removeFromWish(wish)}><i className="icofont-trash"></i></a>
                                        </td>
                                    </tr>
                                        </tbody>
                                </>)
                        })}

                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
                
            </div>
               </section>
                                

                </>)
            }
        </body>
        </html>
    )
}
export default WishDetails;