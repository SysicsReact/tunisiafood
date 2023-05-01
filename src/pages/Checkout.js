import React, { useEffect, useState } from 'react';
import {  json, useNavigate } from "react-router-dom";
import { getDoc, updateDoc, doc } from "firebase/firestore";
import { db, auth } from '../firebase.config';
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import { SAVE_URL, CALCULATE_TOTAL_QUANTITY, 
     CALCULATE_SUBTOTAL, 
     selectCartItems, selectCarTotalAmount, selectCarTotalQuantity } from "../redux/slice/cartSlice";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";
import { SAVE_SHIPPING_ADDRESS } from '../redux/slice/checkoutSlice';

export default function Checkout() {
     const navigate = useNavigate();
     const [user] = useAuthState(auth);
     const cartItems = useSelector(selectCartItems);
     const cartTotalAmount = useSelector(selectCarTotalAmount);
     const cartTotalQuantity = useSelector(selectCarTotalQuantity);
     const[livraisonCost,SetLivraisonCost]=useState("10");
     const[livraisonType,SetLivraison]=useState({ });
     const [phone, setPhone] = useState({ changeState: 0 });
     const [city, setCity] = useState({ changeState: 0 });
     const [country, setCountry] = useState({ changeState: 0 });
     const [adress, setAdress] = useState({ changeState: 0 });
     const [postalCode, setPostalCode] = useState({ changeState: 0 });
     const dispatch = useDispatch();
     const initialAddressState = {
        address:"",
        city:"",
        country:"",
        postal:"",
        phone:"",
        livraisonType:"",
    }
    const [shippingAddress, setShippingAddress] = useState({...initialAddressState});


    const handleShipping = (e) =>{
        const {name, value} = e.target;
        setShippingAddress({
            ...shippingAddress,
            [name]: value,
          });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(SAVE_SHIPPING_ADDRESS(shippingAddress));
        navigate("/Payment");
        };
     function handleLivraisonChange(event){
        SetLivraison({
            livraisonType: event.target.value,
        });
        switch(event.target.value){
                case "Livraison Standard":
                    SetLivraisonCost("10")
                break;
                case "Livraison Standard En europe":
                    SetLivraisonCost("15")
                    break;
                case "Livraison rapide":
                    SetLivraisonCost("25")
                    break;
        }}

     useEffect(() => {
         dispatch(CALCULATE_SUBTOTAL())
         dispatch(CALCULATE_TOTAL_QUANTITY())
         dispatch(SAVE_URL(""))
     }, [dispatch, cartItems]);
     
    //--------update user    
    const updateUser = async (e) => {
       
        try{
            if (city.changeState == 1) {
                const washingtonRef = doc(db, "users", user.uid);
                await updateDoc(washingtonRef, {
                    city: city.City
                });
            }
            if (postalCode.changeState == 1) {
                const washingtonRef = doc(db, "users", user.uid);
                await updateDoc(washingtonRef, {
                    postalCode: postalCode.postalCode
                });
            }
            if (country.changeState == 1) {
                const washingtonRef = doc(db, "users", user.uid);
                await updateDoc(washingtonRef, {
                    country: country.country
                });
            }
            if (phone.changeState == 1) {
                const washingtonRef = doc(db, "users", user.uid);
                await updateDoc(washingtonRef, {
                    phone: phone.phone
                });
            }
            if (adress.changeState == 1) {
                const washingtonRef = doc(db, "users", user.uid);
                await updateDoc(washingtonRef, {
                    adress: adress.adress
                });
               
            }
        }catch (e) {
            alert(e)
          }

        
    };
    //-----handling changes    
    function handlePostalChange(event) {
        setPostalCode({
            postalCode: event.target.value,
            changeState: 1
        });
    }
    function handlePhoneChange(event) {
        setPhone({
            phone: event.target.value,
            changeState: 1
        });
    }
    function handleCityChange(event) {
        setCity({
            City: event.target.value,
            changeState: 1
        });
    }
    function handleCountryChange(event) {
        setCountry({
            country: event.target.value,
            changeState: 1
        });
    }
    function handleAdressChange(event) {
        setAdress({
            adress: event.target.value,
            changeState: 1
        });
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
                                            <span>Sub-total</span>
                                            <span>€{cartTotalAmount.toFixed(2)}</span>
                                        </li>
                                        <li>
                                            <span>Livraison:</span>
                                    <select class="form-select" onChange={handleLivraisonChange}>
                                        <option value="Livraison Standard">Livraison Standard</option>
                                        <option value="Livraison Standard En europe">Livraison Standard En europe</option>
                                        <option value="Livraison rapide">Livraison rapide</option>
                                    </select>
                                        </li>
                                        
                                        <li>
                                            <span>Frais de livraison</span>
                                            <span>€{livraisonCost}</span>
                                        </li>
                                        <li>
                                            <span>Total<small>(Incl. VAT)</small></span>
                                            <span>€{(parseFloat(livraisonCost) + parseFloat(cartTotalAmount)).toFixed(2)}</span>
                                        </li>
                                    </ul>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-lg-12">
                <div class="account-card">
                    <div class="account-title">
                        <h4>Détails de livraison</h4>
                    </div>
                    <form class="modal-content" onSubmit={handleSubmit}>
                        <div class="row">
                        <div class="col-md-6 col-lg-4 alert fade show" >
                                <div class="profile-card contact active" >
                                <label >
                            Si vous voulez, vous pouvez changer les détails de livraisons par ici et confirmer.</label>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 alert fade show">
                                <div class="profile-card contact active">
                                    <h6>Pays</h6>
                                    <select class="form-select" 
                                    value={shippingAddress.country}
                                    required
                                    name="country"
                                    onChange={(e) => handleShipping(e)} >
                                        <option value="France">France</option>
                                        <option value="Belgique">Belgique</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 alert fade show">
                                <div class="profile-card contact active">
                                    <h6>Ville</h6>
                                    <select class="form-select"
                                    value={shippingAddress.city}
                                    required
                                    name="city"
                                    onChange={(e) => handleShipping(e)}>
                                        <option value="Paris">Paris</option>
                                        <option value="Lyon">Lyon</option>
                                        <option value="Marseille">Marseille</option>
                                        <option value="Toulouse">Toulouse</option>
                                        <option value="Lille">Lille</option>
                                        <option value="Nice">Nice</option>
                                        <option value="Nantes">Nantes</option>
                                        <option value="Strasbourg">Strasbourg</option>
                                        <option value="Rennes">Rennes</option>
                                        <option value="Grenoble">Grenoble</option>
                                        <option value="Rouen">Rouen</option>
                                        <option value="Toulon">Toulon</option>
                                        <option value="Montpelier">Montpelier</option>
                                        <option value="Douai et Lens">Douai et Lens</option>
                                        <option value="Avignon">Avignon</option>
                                        <option value="Saint-Etienne">Saint-Etienne</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 alert fade show">
                                <div class="profile-card contact active">
                                    <h6>Adresse</h6>
                                    <input class="form-control" type="text"
                                    value={shippingAddress.address}
                                    onChange={(e) => handleShipping(e)}
                                    name="address"
                                    required
                                    placeholder="Entrez votre adresse..." />
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 alert fade show">
                                <div class="profile-card contact active">
                                    <h6>Code Postal</h6>
                                    <input class="form-control" type="text" 
                                    value={shippingAddress.postal}
                                    onChange={(e) => handleShipping(e)}
                                    name="postal"
                                    required
                                    placeholder="Entrez le code postal..." />
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 alert fade show">
                                <div class="profile-card contact active">
                                    <h6>Téléphone</h6>
                                    <input class="form-control" type="text" 
                                    value={shippingAddress.phone}
                                    name="phone"
                                    required
                                    onChange={(e) => handleShipping(e)}
                                    placeholder="Entrez Votre numéro de téléphone..." />
                                </div>
                            </div>
                        </div>
                           
                        <div class="checkout-proced">
                                <button href="" class="btn btn-inline" type='submit' >procédez au payment</button>
                        </div>
                    </form>
                    

                               
                </div>
                           

<br/>


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
