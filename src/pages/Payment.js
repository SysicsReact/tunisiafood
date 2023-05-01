import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase.config";
import { useDispatch, useSelector } from "react-redux";
import { SAVE_URL, CALCULATE_TOTAL_QUANTITY, 
     CALCULATE_SUBTOTAL, CLEAR_CART, REMOVE_FROM_CART, 
     selectCartItems, selectCarTotalAmount} from "../redux/slice/cartSlice";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc,updateDoc, addDoc, Timestamp, collection } from "@firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { selectEmail, selectUserID  } from '../redux/slice/authSlice';
import { selectShippingAddress } from '../redux/slice/checkoutSlice';
function Payment() {

  const [user] = useAuthState(auth);
  const [loggedUser, setLoggedUser] = useState({})
  const userEmail = useSelector(selectEmail);
  const navigate = useNavigate();
  const shippingAddress = useSelector(selectShippingAddress);
  const cartItems = useSelector(selectCartItems);
  const cartTotalAmount = useSelector(selectCarTotalAmount);
  const url = window.location.href;
  
  const dispatch = useDispatch();
  //Payment 
  const [responseData, setResponseData] = useState(null);
  const[canOpenWindow , setCanOpenWindow] = useState(false);


  let price= cartTotalAmount.toString();
  let priceFinal = parseFloat(price) * 100;
  useEffect(() => {
      dispatch(CALCULATE_SUBTOTAL())
      dispatch(CALCULATE_TOTAL_QUANTITY())
      dispatch(SAVE_URL(""))
  }, [dispatch, cartItems]);
  //console.log(shippingAddress.address);


  //Payment API
  const handleApiCall = async () => {
      const url = "https://api.konnect.network/api/v2/payments/init-payment";
      const requestBody = {
        receiverWalletId: "642a7d6c2e9c6ea045f6f07b",
        token: "EUR",
        amount:  priceFinal,
        type: "immediate",
        lifespan: 10,
        feesIncluded: false,
        webhook: false,
        silentWebhook: true,
        successUrl: "https://cooktounsi.com/CheckoutSuccess",
        failUrl: "https://dev.konnect.network/gateway/payment-failure",
        checkoutForm: true,

      };
  
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key":"642a7d6c2e9c6ea045f6f078:vQ0vuCOFUFExHuxzJ"
        },
        body: JSON.stringify(requestBody)
      });
      const jsonData = await response.json();
      setResponseData(jsonData);
      setCanOpenWindow(true);
      
      console.log(shippingAddress);
    };
    useEffect(() => {
      // Open the link in a new tab when the countdown ends
      if (canOpenWindow === true) {

        // 👇 Open link in new tab programmatically
        if(responseData.payUrl != null)
        {
      setCanOpenWindow(false);

        }
      }
    }, [responseData]);
    //Payment done


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
                            <li class="breadcrumb-item active" aria-current="page">Paiement</li>
                        </ol>
                    </div>
                </section>
          <section class="inner-section checkout-part">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="account-card">
                            <div class="account-title">
                                <h4>Votre Commande</h4>
                            </div>
                            <div class="account-content">
                                <div class="checkout-charge">
                                    <ul>
                                        <li>
                                            <span>Sub-total</span>
                                            <span>€{cartTotalAmount.toFixed(2)}</span>
                                        </li>
                                        <li>
                                            <span>Type de livraison</span>
                                            <span>€livraisonCost</span>
                                        </li>
                                        <li>
                                            <span>Frais de livraison</span>
                                            <span>€livraisonCost</span>
                                        </li>
                                        <li>
                                            <span>Total<small>(Incl. VAT)</small></span>
                                            <span>€{( parseFloat(cartTotalAmount)).toFixed(2)}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div class="account-card">
                            <div class="account-title">
                                <h4>Votre Commande</h4>
                            </div>
                            <div class="account-content">
                                <div class="checkout-charge">
                                    <ul>
                                        <li>
                                            <span>Pays</span>
                                            <span>{shippingAddress.country}</span>
                                        </li>
                                        <li>
                                            <span>Ville</span>
                                            <span>{shippingAddress.city}</span>
                                        </li>
                                        <li>
                                            <span>Adresse</span>
                                            <span>{shippingAddress.address}</span>
                                        </li>
                                        <li>
                                            <span>Téléphone</span>
                                            <span>{shippingAddress.phone}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
            <div class="col-lg-12">
                <div class="account-card">
                    
                    
                                <input type="checkbox" id="checkout-check"/>
                                <label for="checkout-check">
                             En effectuant cet achat, vous acceptez nos <Link to="/Cgv">Termes et conditions</Link>.</label>
                </div>

            <div class="checkout-proced">
      <button class="btn btn-inline" onClick={handleApiCall}>Accéder Au Paiement</button>
      {responseData && (
        <>
  <object data={responseData.payUrl} width="1400" height="600" type="text/html">
  </object>
        </>
      )}
    </div>
            </div>
                    </div>
                   
                </div>
                
            </div>
               </section>
          </body>

          </html>
  )
}

export default Payment