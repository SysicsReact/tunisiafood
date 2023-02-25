import React, { useEffect, useState } from 'react';
import {  json, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SAVE_URL, CALCULATE_TOTAL_QUANTITY, 
     CALCULATE_SUBTOTAL, REMOVE_FROM_CART, 
     selectCartItems, selectCarTotalAmount, selectCarTotalQuantity } from "../redux/slice/cartSlice";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";

export default function Checkout() {
     const navigate = useNavigate();
     const cartItems = useSelector(selectCartItems);
     const cartTotalAmount = useSelector(selectCarTotalAmount);
     const cartTotalQuantity = useSelector(selectCarTotalQuantity);
     const url = window.location.href;
     const dispatch = useDispatch();
     
     const removeFromCart = (cart) => {
         dispatch(REMOVE_FROM_CART(cart));
     }
     useEffect(() => {
         dispatch(CALCULATE_SUBTOTAL())
         dispatch(CALCULATE_TOTAL_QUANTITY())
         dispatch(SAVE_URL(""))
     }, [dispatch, cartItems]);
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
                        <h2>Checkout</h2>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/">Accueil</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">Checkout</li>
                        </ol>
                    </div>
                </section>
            <ToastContainer />
     {cartItems.length === 0 ? (
          <>
              <div class="cart-info-group">
                  <div class="cart-footer">
                      <h6 className="coupon-btn">Nous Avons Bien Reçu Votre Commande. Merci pour votre fidélité!</h6>
                  </div>
              </div> 
              <div class="cart-footer">
                 <Link to={"/OrderHistory"}> <a class="cart-checkout-btn" href="#">
                      <span class="checkout-label">Parcourir Votre Historique de Commandes</span>
                  </a></Link>
              </div>
              <div class="cart-footer">
              <Link to={"/ShopProduct"}>  <a class="cart-checkout-btn" href="#">
                      <span class="checkout-label">Parcourir les produits</span>
                  </a></Link>
              </div>
          </>
      ) : (
          <>      
       <section class="inner-section checkout-part">
      <div class="container">
          <div class="row">
              <div class="col-lg-12">
                  <div class="alert-info">
                      <p>Vous n'avez pas terminé vos achats ? <Link to="/ShopProduct"><a href="">Retour aux achats</a></Link></p>
                  </div>
              </div>
              <div class="col-lg-12">
                  <div class="account-card">
                      <div class="account-title">
                          <h4>Votre Commande</h4>
                      </div>
                      <div class="account-content">
                          <div class="checkout-charge">
                              <ul>
                              <li>
                                      <span>Nb Produit</span>
                                      <span>{cartTotalQuantity}</span>
                                  </li>
                                  <li>
                                      <span>Sub-total</span>
                                      <span>${cartTotalAmount.toFixed(2)}</span>
                                  </li>
                                  <li>
                                      <span>Frais de livraison</span>
                                      <span>$10.00</span>
                                  </li>
                                  <li>
                                      <span>Total<small>(Incl. VAT)</small></span>
                                      <span>${parseFloat(10) + parseFloat(cartTotalAmount.toFixed(2))}</span>
                                  </li>
                              </ul>
                          </div>
                      </div>
                      <div class="checkout-check">
                          <input type="checkbox" id="checkout-check"/>
                          <label for="checkout-check">
En effectuant cet achat, vous acceptez nos <a href="#">Termes et conditions</a>.</label>
                      </div>
                      <div class="checkout-proced">
                          <button href="" class="btn btn-inline"  >procédez au payment</button>
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
