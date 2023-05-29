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

const GenerateOrder = async(refID,ID)=>{
  saveOrder(refID)
  .then((isRemoved) => {
      if (isRemoved) {
          removePaymentByUserId(ID)
          }
          })
      .catch((error) => {
          //console.log('Error during removal process: ');
      });
}
const saveOrder = async (param,ID) => {

  try {
    const q = query(collection(db, 'paymentstostart'), where('userId', '==', ID),where('commandReference', '==', param));
    const querySnapshot = await getDocs(q);
    if(querySnapshot.docs.length<=0){
     // navigate('/OrderHistory') 
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
     <html>
          <head>
          <meta charset="UTF-8" />
          <meta name="name" content="Cook Tounsi" />
        <meta name="title" content="Cook Tounsi: vente de vos plats tunisiens préférés 2023" />
        <meta name="keywords" content="cuisine, Tunisie, cuisine tunisienne, 
        traditionnel, plats, épices, patisserie, healthy, lifestyle, food,  " />
        <title>Commande Réçu - Cook Tounsi</title>
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
     <section class="section countdown-part">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 mx-auto">
                        <div class="countdown-content">
                        <h3 style={{visibility:"hidden"}}>Merci ! </h3>
                            <h3>Merci ! Nous avons reçu votre commande.</h3>
                            <Link to={"/OrderHistory"}> <a href="" class="btn btn-inline">
                                <i class="fas fa-eye"></i>
                                <span>commandes</span>
                            </a></Link>
                           <a style={{visibility:"hidden"}} className="">
                                        <span>A</span>
                                    </a>
                                    <Link to={"/"}>  <a href="" class="btn btn-inline">
                                <i class="fas fa-home"></i>
                                <span>Accueil</span>
                            </a></Link>
                        </div>
                    </div>
                    <div class="col-lg-1"></div>
                    <div class="col-lg-5">
                        <div class="countdown-img">
                            <img src="assets/images/heart.png"/>
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