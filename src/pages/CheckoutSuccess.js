import React, { useEffect, useState } from 'react';
import Loader from '../components/loader/Loader';
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase.config";
import { useDispatch, useSelector } from "react-redux";
import {  CALCULATE_TOTAL_QUANTITY, CALCULATE_SUBTOTAL, CLEAR_CART,
     selectCartItems, selectCarTotalAmount} from "../redux/slice/cartSlice";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc,updateDoc, addDoc, Timestamp, collection } from "@firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { selectEmail, selectUserID  } from '../redux/slice/authSlice';
import { selectShippingAddress } from '../redux/slice/checkoutSlice';

function CheckoutSuccess() {
    const [user] = useAuthState(auth);
  const [loggedUser, setLoggedUser] = useState({})
  const userEmail = useSelector(selectEmail);
  const navigate = useNavigate();
  const shippingAddress = useSelector(selectShippingAddress);
  const cartItems = useSelector(selectCartItems);
  const cartTotalAmount = useSelector(selectCarTotalAmount);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(CALCULATE_SUBTOTAL())
      dispatch(CALCULATE_TOTAL_QUANTITY())
  }, [dispatch, cartItems]);


    // Save Order In DB
const saveOrder = () => {
    const today = new Date();
    const date = today.toDateString();
    const time = today.toLocaleTimeString();
    const orderConfig = {
      userEmail,
      orderDate: date,
      orderAmount: cartTotalAmount,
      cartItems,
      shippingAddress,
      createdAt: Timestamp.now().toDate(),
    };
    try {
      addDoc(collection(db, "orders"), orderConfig);
      
      dispatch(CLEAR_CART());
      toast.success("Order saved");
    } catch (error) {
      toast.error("Something Went Wrong");
    }
  };
        toast.success("Payment successful");
        saveOrder();
  
    const [isLoading, setIsLoading] = useState(true);
  return (
     <html>
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
          {(isLoading) &&<Loader/>}
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
     <section class="inner-section invoice-part">
     <div class="container">
         <div class="row">
             <div class="col-lg-12">
                 <div class="alert-info">
                     <p>Merci! Nous avons reçu votre commande.</p>
                 </div>
             </div>
             <div class="col-lg-12">
                 <div class="account-card">
                     <div class="account-title">
                         <h4>Commande</h4>
                     </div>
                     <div class="account-content">
                         <div class="invoice-recieved">
                             <h6>order number <span>1665</span></h6>
                             <h6>order date <span>february 02, 2021</span></h6>
                             <h6>total amount <span>$24,176.00</span></h6>
                             <h6>payment method <span>Cash on delivery</span></h6>
                         </div>
                     </div>
                 </div>
             </div>
             
         </div>
         <div class="row">
             <div class="col-lg-12 text-center mt-5">
                 <a class="btn btn-inline" href="#">
                     <i class="icofont-download"></i>
                     <span>download invoice</span>
                 </a>
                 <div class="back-home">
                     <a href="index.html">Back to Home</a>
                 </div>
             </div>
         </div>
     </div>
     </section>
     </body>
     </html>
  )
}

export default CheckoutSuccess