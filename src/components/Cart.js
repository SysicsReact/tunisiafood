import React, { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { GetCardDetails, auth, db } from "../firebase.config";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART, CALCULATE_TOTAL_QUANTITY, SAVE_URL, CALCULATE_SUBTOTAL,
     CLEAR_CART, DECREASE_CART, REMOVE_FROM_CART, selectCartItems, 
     selectCartItemAmount, selectCarTotalAmount, selectCarTotalQuantity } from "../redux/slice/cartSlice";
import { toast } from 'react-toastify';
import { useAuthState } from "react-firebase-hooks/auth";
import { selectuserID } from "../redux/slice/authSlice";
import { Link } from "react-router-dom";

const Cart = () => {
    let data = GetCardDetails();
    const notifyError = () => toast.error("Complete your profile");
    const notifyErr = () => toast.error("Authentification requise");
    const navigate = useNavigate();
    const [loggedUser, setLoggedUser] = useState({});
    const [user] = useAuthState(auth);
    const cartItems = useSelector(selectCartItems);
    const userID = useSelector(selectuserID)
    const url = window.location.href;
    const cartItemAmount = useSelector(selectCartItemAmount)
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
        if(user){
            navigate("/checkout")
        }
        else{
            notifyErr();
            navigate("/login")
        }
        
    }
    return (

        <aside className="cart-sidebar">
            {cartItems.length === 0 ? (
                <>
                    <div className="cart-header">
                        <div className="cart-total">
                            <i className="fas fa-shopping-basket"></i>
                            <span>totale: 0 </span>
                        </div>
                        <button className="cart-close"><i className="icofont-close"></i></button>
                    </div>
                    <div className="cart-info-group">
                        <div className="cart-footer">
                            <h6 className="coupon-btn">Votre Chariot Est Vide !</h6>
                        </div>
                    </div>
                    <div className="cart-footer">
                        <a className="cart-checkout-btn" href="">
                          <Link to="/ShopProduct">  <span className="checkout-label">Parcourir les produits</span></Link>
                            <span className="checkout-price"><i className=""></i></span>
                        </a>
                    </div>
                </>
            ) : (
                <>
                    <div className="cart-header">
                        <div className="cart-total">
                            <i className="fas fa-shopping-basket"></i>
                            <span>totale: {cartTotalQuantity} </span>
                        </div>
                        <button className="cart-close"><i className="icofont-close"></i></button>
                    </div>
                    <ul className="cart-list">
                        {cartItems.map((cart, index) => {
                            const { id, name, price, discount,  photo, cartQuantity, cartItemAmount } = cart;
                            return (
                                <>
                                    <li className="cart-item" key={{id}}>
                                        <div className="cart-media">
                                            <a href="#"><img src={photo} alt="product" /></a>
                                            <button className="cart-delete" onClick={() => removeFromCart(cart)}><i className="far fa-trash-alt"></i></button>
                                        </div>
                                        <div className="cart-info-group">
                                            <div className="cart-info">
                                                <h6><a href="">{name}</a></h6>
                                               {discount!= 0 &&
                                               <p>Prix Unitaire €{  (Math.round((price-(price*discount)/100)*100)/100)}</p>
                                               }
                                                {discount== 0 &&
                                               <p>Prix Unitaire €{price}</p>
                                               }
                                            </div>
                                            <div className="cart-action-group">
                                                <div className="product-action">
                                                    <button className="action-minus" title="Quantity Minus" onClick={() => (decreaseCart(cart))} ><i className="icofont-minus" ></i></button>
                                                    <h6>{cartQuantity}</h6>
                                                    <button className="action-plus" title="Quantity Plus" onClick={() => (increaseCart(cart))}><i className="icofont-plus"></i></button>
                                                </div>
                                                {discount != 0 &&
                                                <h6>Prix : €{((Math.round((price-(price*discount)/100)*100)/100) * cartQuantity).toFixed(2)}</h6>
                                                }
                                                 {discount == 0 &&
                                                <h6>Prix : €{(price * cartQuantity).toFixed(2)}</h6>
                                                }
                                            </div>
                                        </div>
                                    </li>
                                </>)
                        })}
                    </ul>
                    {cartItems.map((cart, index) => {
                        return (
                            <>
                                <div className="cart-footer">
                                   <a className="cart-checkout-btn" href="">
                                   <span className="checkout-label" onClick={processToCheckout} >Checkout</span>
                                        <span className="checkout-price">${cartTotalAmount.toFixed(2)}</span>
                                    </a>
                                </div>
                                <div className="cart-footer">
                                    <a className="cart-checkout-btn" href="" onClick={() => (clearCart(cart))}>
                                        <span className="checkout-label">Vider Le chariot  </span>
                                        <span className="checkout-price"><i className="far fa-trash-alt" ></i></span>
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