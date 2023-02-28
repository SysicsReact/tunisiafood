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
                <a class="backtop fas fa-arrow-up" href="#"></a>
                <section class="inner-section single-banner" style={{ backgroundImage: "url(assets/images/spices.jpg)", backgroundRepeat: "no-repeat", backgroundPosition: "center", }}>
                    <div class="container">
                        <h2>Votre Liste des souhaits</h2>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/">Accueil</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">Liste des souhaits</li>
                        </ol>
                    </div>
                </section>

            {wishItems.length === 0 ? (
                <>
                    <div class="cart-info-group">
                        <div class="cart-footer">
                            <h6 className="coupon-btn">Votre Chariot Est Vide !</h6>
                        </div>
                    </div>
                    <div class="cart-footer">
                        <a class="cart-checkout-btn" href="#">
                            <span class="checkout-label">Parcourir les produits</span>
                            <span class="checkout-price"><i class="fas fa-shopping-basket"></i></span>
                        </a>
                    </div>
                </>
            ) : (
                <>
                      
             <section class="inner-section checkout-part">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="alert-info">
                            <p> <Link to="/ShopProduct"><a href="">Retour aux achats ?</a></Link></p>
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="account-card">
                            <div class="account-title">
                                <h4>Votre liste de souhaits</h4>
                            </div>
                            <div class="account-content">
                                <div class="table-scroll">
                                    <table class="table-list">
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
                                        <td class="table-image"><img src={photo} alt="product"/></td>
                                        <td class="table-name"><h6>{name}</h6></td>
                                        <td class="table-price"><h6>${price}<small>/kilo</small></h6></td>
                                        <td class="table-shop">
                                            <button class="product-add" title="Ajouter" onClick={() => addToCart(wish)} >Ajouter</button>
                                        </td>
                                        <td class="table-action">
                                            <a class="trash"  title="Supprimer" onClick={() => removeFromWish(wish)}><i class="icofont-trash"></i></a>
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