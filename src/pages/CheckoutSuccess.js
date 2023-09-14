import React, { useEffect, useState } from 'react';
import { redirect, useNavigate, Link } from "react-router-dom";
import { auth, db,removePaymentByUserId } from "../firebase.config";
import { useDispatch, useSelector } from "react-redux";
import {  CALCULATE_TOTAL_QUANTITY, CALCULATE_SUBTOTAL, CLEAR_CART,
     selectCartItems, selectPreviousURL, selectCarTotalAmount} from "../redux/slice/cartSlice";
import { doc, getDoc,updateDoc, addDoc, Timestamp, collection,query,where, getDocs, } from "@firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';
import { useAuthState } from "react-firebase-hooks/auth";
import { selectEmail, selectUserID  } from '../redux/slice/authSlice';
import { selectShippingAddress, CLEAR_SHIPPING_ADDRESS } from '../redux/slice/checkoutSlice';
import { Helmet } from 'react-helmet';

const GenerateOrder = async(refID,ID)=>{
  saveOrder(refID)
  .then((isRemoved) => {
      if (isRemoved) {
          removePaymentByUserId(ID)
          }
          })
      .catch((error) => {
      });
}
const saveOrder = async (param,ID) => {

  try {
    const q = query(collection(db, 'paymentstostart'), where('userId', '==', ID),where('commandReference', '==', param));
    const querySnapshot = await getDocs(q);
    if(querySnapshot.docs.length<=0){
    }
    const addPromises = querySnapshot.docs.map(async (doc) => {
      const orderData = doc.data();
      
      // Replace 'orders' with the name of the collection you want to add the documents to
      await addDoc(collection(db, 'orders'), orderData);
    });
    await Promise.all(addPromises);
    toast.success('Commande Réçue Avec Succès!');
    //setSaved(true);
    return true;
  } catch (error) {
    toast.error('Quelque chose s est mal passé:', error);
    return false;
  }
};
function CheckoutSuccess() {
    const [user] = useAuthState(auth);
  const [loggedUser, setLoggedUser] = useState({})
  const userEmail = useSelector(selectEmail);
  const navigate = useNavigate();
  const shippingAddress = useSelector(selectShippingAddress);
  const cartItems = useSelector(selectCartItems);
  const cartTotalAmount = useSelector(selectCarTotalAmount);
  const dispatch = useDispatch();
  const previousURL = useSelector(selectPreviousURL);
  const [saved, setSaved] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  
 
useEffect(() => {
    // This function will be called only once when the component mounts
    if(user && user.uid){
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
    
    // Accessing query string values
        const param1 = urlParams.get('refid');
        GenerateOrder(param1,user.uid);
    }
    
  }, [dispatch, user]);
  

  useEffect(() => {
    if(cartItems){
       // if(saved){
            dispatch(CALCULATE_SUBTOTAL())
            dispatch(CALCULATE_TOTAL_QUANTITY())
           //dispatch(CLEAR_SHIPPING_ADDRESS())
          // dispatch(CLEAR_CART())
       // }
        
    }
  }, [dispatch, cartItems, saved]);
  
    
  return (
     <>
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
          <link rel="stylesheet" href="assets/css/home-classic.css" />
          <link rel="stylesheet" href="assets/css/checkout.css" />
          </head>
          <Helmet>
          <meta charSet="UTF-8" />
            <title>Cook Tounsi - Commande Réçue</title>
            <meta name="name" content="Cook Tounsi" />
            <meta name="title" content="Cook Tounsi- Commande Réçue" />
            <meta name="keywords" content="cuisine, Tunisie, cuisine tunisienne, 
                traditionnel, plats, épices, patisserie, healthy, lifestyle, recettes,
                    food, livraison, ماكلة تونسية , أطباق , معلبة, "  />
            <meta property="og:title" content="Cook Tounsi - Commande Réçue" />
            <meta property="og:image" content="assets/images/about/1.jpg" />
          </Helmet>
     <body>
     <section className="section countdown-part">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 mx-auto">
                        <div className="countdown-content">
                        <h3 style={{visibility:"hidden"}}>Merci ! </h3>
                            <h3>Merci ! Nous avons reçu votre commande.</h3>
                            <Link to={"/OrderHistory"}> <a href="" className="btn btn-inline">
                                <i className="fas fa-eye"></i>
                                <span>commandes</span>
                            </a></Link>
                           <a style={{visibility:"hidden"}} className="">
                                        <span>A</span>
                                    </a>
                                    <Link to={"/"}>  <a href="" className="btn btn-inline">
                                <i className="fas fa-home"></i>
                                <span>Accueil</span>
                            </a></Link>
                        </div>
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-5">
                        <div className="countdown-img">
                            <img src="assets/images/heart.png"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     </body>
     </>
  )
}

export default CheckoutSuccess