import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { RemoveRefCommand, auth, db,removePaymentByUserId } from "../firebase.config";
import { useDispatch, useSelector } from "react-redux";
import { SAVE_URL, CALCULATE_TOTAL_QUANTITY, 
     CALCULATE_SUBTOTAL, CLEAR_CART, REMOVE_FROM_CART, 
     selectCartItems, selectCarTotalAmount} from "../redux/slice/cartSlice";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc,serverTimestamp, updateDoc, addDoc, Timestamp, collection } from "@firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { selectEmail, selectUserID  } from '../redux/slice/authSlice';
import { selectShippingAddress } from '../redux/slice/checkoutSlice';
import axios from 'axios';


function Payment() {

  const [user] = useAuthState(auth);
  const [loggedUser, setLoggedUser] = useState({})
  const userEmail = useSelector(selectEmail);
  const navigate = useNavigate();
  const shippingAddress = useSelector(selectShippingAddress);
  const[livraisonCost,SetLivraisonCost]=useState("10")
  const cartItems = useSelector(selectCartItems);
  const cartTotalAmount = useSelector(selectCarTotalAmount);
  const [commandReference, setCommandReference] = useState("1111")
  const url = window.location.href;
  const dispatch = useDispatch();
  const apiKonnectKey = process.env.REACT_APP_API_Konnect_Key;
  const ReciveWalletKey = process.env.REACT_APP_receiverWallet_Id;
  //Payment 
  const [responseData, setResponseData] = useState(null);
  const[canOpenWindow , setCanOpenWindow] = useState(false);
    const fees = shippingAddress.livraisonType;
    
    useEffect(() => {
        switch(fees){
            case "Livraison Standard":
                SetLivraisonCost("10")
                
            break;
            case "Livraison Standard En europe":
                SetLivraisonCost("15")
                break;
            case "Livraison rapide":
                SetLivraisonCost("25")
                break;
    }
    })
  let price= cartTotalAmount.toString();
  let priceFinal = (parseFloat(livraisonCost) + parseFloat(price)) * 100;
  priceFinal = priceFinal.toFixed(2);
  useEffect(() => {
      dispatch(CALCULATE_SUBTOTAL())
      dispatch(CALCULATE_TOTAL_QUANTITY())
      dispatch(SAVE_URL(url))
  }, [dispatch, cartItems]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            const docRef = doc(db, "users", uid);
            getDoc(docRef).then(docSnap => {
                if (docSnap.exists()) {
                    setLoggedUser(docSnap.data())
                }
            })
        }
    })
}, [dispatch])
  //Payment API
  const generateData = async() =>{
    removePaymentByUserId(user.uid)
    .then((isRemoved) => {
    if (isRemoved) {
        const randomId = Math.random().toString(36).substring(2) + Date.now().toString(36);
        setCommandReference(randomId);
        handleApiCall(randomId,priceFinal)
        console.log('Removal process completed.');
        
        } else {
        console.log('Removal process failed.');
        }
        })
    .catch((error) => {
        toast.error('Erreur lors du processus: ', error);
    });
  }
  const handleApiCall = async (refid,priceFinal) => {
      const url = "https://api.konnect.network/api/v2/payments/init-payment";
      const requestBody = {
        receiverWalletId: ReciveWalletKey,
        token: "EUR",
        amount: priceFinal ,
        type: "immediate",
        lifespan: 10,
        feesIncluded: false,
        orderId: refid,
        webhook: false,
        silentWebhook: true,
        //successUrl: "https://cooktounsi.com/CheckoutSuccess", 
        successUrl:`https://cooktounsi.com/CheckoutSuccess?refid=${refid}`,
        failUrl: "https://dev.konnect.network/gateway/payment-failure",
        checkoutForm: false,
      };
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key":apiKonnectKey
        },
        body: JSON.stringify(requestBody)
      });
      const jsonData = await response.json();
      if(response.ok){
        setResponseData(jsonData);
        setCanOpenWindow(true);
      }
      else{
        setResponseData(null);
        setCanOpenWindow(true);
      }
     
    };



    const callFirebaseFunction = async (refid, priceFinal) => {
        console.log(refid +" " + priceFinal);
        try {
          const requestBody = { refid, priceFinal };
          const response = await axios.post(
            "https://us-central1-startnewproject-983bc.cloudfunctions.net/handleApiCall",
            requestBody
          );
          const responseData = response.data;
          // Do something with the response data
          console.log(responseData);
        } catch (error) {
          console.error(error);
        }
      };

    useEffect(() => {
      // Open the link in a new tab when the countdown ends
      if (canOpenWindow === true) {
        // 👇 Open link in new tab programmatically
        if(responseData){
            if(responseData.payUrl != null)
        {
            //setCanOpenWindow(false);
            addPaymentToStart();
            //const checkIfComplete = await RemoveRefCommand(true,user.uid);
        }
        }
        else{
            toast.error("plz regenerate again");
        }
      }
    }, [responseData]);
    //Payment done
    const addPaymentToStart = async () => {
        const userId = 'USER_ID'; // Replace with the actual user ID
         // Replace with the actual command reference
    
        try {
          // Create a new document in "paymentstostart" collection
          const p =  await addDoc(collection(db, 'paymentstostarts'), {
            userId: user.uid,
            items: cartItems,
            totalAmount: priceFinal/100,
            commandReference: commandReference,
            shippingAddress,
            state: "-1",
            timestamp: serverTimestamp(),
          });
          window.location.href = responseData.payUrl;
        } catch (error) {
          console.error('Error adding payment: ', error);
        }
      };
     
  return (
    <html lang="en">
          <head>
          <meta charSet="UTF-8" />
    <meta name="name" content="Cook Tounsi" />
    <meta name="title" content="Cook Tounsi: vente de vos plats tunisiens préférés 2023" />
    <meta name="keywords" content="cuisine, Tunisie, cuisine tunisienne, 
        traditionnel, plats, épices, patisserie, healthy, lifestyle, food,  " />
    <title>Paiement - Cook Tounsi</title>
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
                        <h2>Checkout</h2>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Accueil</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Paiement</li>
                        </ol>
                    </div>
                </section>
          <section className="inner-section checkout-part">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="account-card">
                            <div className="account-title">
                                <h4>Votre Commande</h4>
                            </div>
                            <div className="account-content">
                                <div className="checkout-charge">
                                    <ul>
                                        <li>
                                            <span>Sub-total</span>
                                            <span>€{cartTotalAmount.toFixed(2)}</span>
                                        </li>
                                        <li>
                                            <span>Type de livraison</span>
                                            <span>{shippingAddress.livraisonType}</span>
                                        </li>
                                        <li>
                                            <span>Frais de livraison</span>
                                            {shippingAddress.livraisonType=="Livraison Standard"&&
                                            <span>€ 10</span>}
                                            {shippingAddress.livraisonType=="Livraison Standard En europe"&&
                                            <span>€ 15</span>}
                                            {shippingAddress.livraisonType=="Livraison rapide"&&
                                            <span>€ 25</span>}
                                        </li>
                                        <li>
                                            <span>Total<small>(Incl. VAT)</small></span>
                                            {shippingAddress.livraisonType=="Livraison Standard"&&
                                            <span>€{(10 + parseFloat(cartTotalAmount)).toFixed(2)}</span>}
                                            {shippingAddress.livraisonType=="Livraison Standard En europe"&&
                                            <span>€{(15 + parseFloat(cartTotalAmount)).toFixed(2)}</span>}
                                            {shippingAddress.livraisonType=="Livraison rapide"&&
                                            <span>€{(25 + parseFloat(cartTotalAmount)).toFixed(2)}</span>}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="account-card">
                            <div className="account-title">
                                <h4>Détails de livraison</h4>
                            </div>
                            <div className="account-content">
                                <div className="checkout-charge">
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
                                            <span>Code Postal</span>
                                            <span>{shippingAddress.postal}</span>
                                        </li>
                                        <li>
                                            <span>Téléphone</span>
                                            <span>{shippingAddress.phone}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
            <div className="col-lg-12">
                
            <div className="checkout-proced">
      <button className="btn btn-inline" onClick={generateData}>Accéder Au Paiement</button>
      <br/>
      
      {/*{responseData && (
        
        <>
        
        <div className="container-iframe">
            <iframe className="responsive-iframe" data={responseData.payUrl} width="1400" height="600" type="text/html">
            </iframe>
        </div>
       
        </>
       
      )}*/}
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