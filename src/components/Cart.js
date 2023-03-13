import React, { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { GetCardDetails, auth, db } from "../firebase.config";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART, CALCULATE_TOTAL_QUANTITY, SAVE_URL, CALCULATE_SUBTOTAL, CLEAR_CART, DECREASE_CART, REMOVE_FROM_CART, selectCartItems, selectCarTotalAmount, selectCarTotalQuantity } from "../redux/slice/cartSlice";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc } from "@firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';
import { useAuthState } from "react-firebase-hooks/auth";
import { selectuserID } from "../redux/slice/authSlice";
import { Link } from "react-router-dom";

const Cart = () => {
    let data = GetCardDetails();
    const notifyError = () => toast.error("Complete your profile");
    const notifyErr = () => toast.error("Authentification required");
    const navigate = useNavigate();
    const [loggedUser, setLoggedUser] = useState({});
    const [user] = useAuthState(auth);
    const cartItems = useSelector(selectCartItems);
    const userID = useSelector(selectuserID)
    const url = window.location.href;
    const cartTotalAmount = useSelector(selectCarTotalAmount);
    const cartTotalQuantity = useSelector(selectCarTotalQuantity);
    const dispatch = useDispatch();
    const decreaseCart = (cart) => {
        dispatch(DECREASE_CART(cart));
    };
    const clearCart = (cart) => {
        dispatch(CLEAR_CART(cart));
    }
    const increaseCart = (cart) => {
        dispatch(ADD_TO_CART(cart));
    };
    const removeFromCart = (cart) => {
        dispatch(REMOVE_FROM_CART(cart));
    }
    useEffect(() => {
        dispatch(CALCULATE_SUBTOTAL())
        dispatch(CALCULATE_TOTAL_QUANTITY())
    }, [dispatch, cartItems]);
   
    const processToCheckout = () => {
      
        navigate("/CartDetails")
    }
    return (

        <aside class="cart-sidebar">
            

            {cartItems.length === 0 ? (
                <>
                                        <div class="cart-header">
                        <div class="cart-total">
                            <i class="fas fa-shopping-basket"></i>
                            <span>totale: 0 </span>
                        </div>
                        <button class="cart-close"><i class="icofont-close"></i></button>
                    </div>
                    <div class="cart-info-group">
                        <div class="cart-footer">
                            <h6 className="coupon-btn">Votre Chariot Est Vide !</h6>
                        </div>
                    </div>
                    <div class="cart-footer">
                        <a class="cart-checkout-btn" href="#">
                            <span class="checkout-label">Parcourir les produits</span>
                            <span class="checkout-price"><i class=""></i></span>
                        </a>
                    </div>
                    
                </>
            ) : (
                <>
                    <div class="cart-header">
                        <div class="cart-total">
                            <i class="fas fa-shopping-basket"></i>
                            <span>totale: {cartTotalQuantity} </span>
                        </div>
                        <button class="cart-close"><i class="icofont-close"></i></button>
                    </div>
                    <ul class="cart-list">
                        {cartItems.map((cart, index) => {
                            const { id, name, price, photo, cartQuantity } = cart;
                            return (
                                <>
                                    <li class="cart-item">
                                        <div class="cart-media">
                                            <a href="#"><img src={photo} alt="product" /></a>
                                            <button class="cart-delete" onClick={() => removeFromCart(cart)}><i class="far fa-trash-alt"></i></button>
                                        </div>
                                        <div class="cart-info-group">
                                            <div class="cart-info">
                                                <h6><a href="product-single.html">{name}</a></h6>
                                                <p>Prix Unitaire €{price}</p>
                                            </div>
                                            <div class="cart-action-group">
                                                <div class="product-action">
                                                    <button class="action-minus" title="Quantity Minus" onClick={() => (decreaseCart(cart))} ><i class="icofont-minus" ></i></button>
                                                    <h6>{cartQuantity}</h6>
                                                    <button class="action-plus" title="Quantity Plus" onClick={() => (increaseCart(cart))}><i class="icofont-plus"></i></button>
                                                </div>
                                                <h6>Prix : €{(price * cartQuantity).toFixed(2)}</h6>
                                            </div>
                                        </div>
                                    </li>
                                </>)
                        })}
                    </ul>
                    {cartItems.map((cart, index) => {
                        const { id, name, price, photo, cartQuantity } = cart;
                        return (
                            <>
                                <div class="cart-footer">
                                   <a class="cart-checkout-btn" href="">
                                   <span class="checkout-label" onClick={processToCheckout} >Checkout</span>
                                        <span class="checkout-price">${cartTotalAmount.toFixed(2)}</span>
                                    </a>
                                </div>
                                <div class="cart-footer">
                                    <a class="cart-checkout-btn" href="" onClick={() => (clearCart(cart))}>
                                        <span class="checkout-label">Vider Le chariot  </span>
                                        <span class="checkout-price"><i class="far fa-trash-alt" ></i></span>
                                    </a>
                                </div>
                            </>)
                    })}

                </>)
            }
        </aside>
    )
}
export default Cart;