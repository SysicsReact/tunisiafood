import React, { useEffect, useState } from 'react';
import {  json, useNavigate } from "react-router-dom";
import { getDoc, updateDoc, doc } from "firebase/firestore";
import { db, auth } from '../firebase.config';
import { useAuthState } from "react-firebase-hooks/auth";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { SAVE_URL, CALCULATE_TOTAL_QUANTITY, 
     CALCULATE_SUBTOTAL,  REMOVE_FROM_CART,
     selectCartItems, selectCarTotalAmount, selectCarTotalQuantity } from "../redux/slice/cartSlice";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";
import { SAVE_SHIPPING_ADDRESS } from '../redux/slice/checkoutSlice';

export default function Checkout() {
     const navigate = useNavigate();
     const [user] = useAuthState(auth);
     const [loggedUser, setLoggedUser] = useState({})
     const removeFromCart = (cart) => {
        dispatch(REMOVE_FROM_CART(cart));
    }
     const cartItems = useSelector(selectCartItems);
     const cartTotalAmount = useSelector(selectCarTotalAmount);
     const cartTotalQuantity = useSelector(selectCarTotalQuantity);
     const[livraisonCost,SetLivraisonCost]=useState("10");
     const[livraisonType,SetLivraison]=useState({});
     const [phone, setPhone] = useState({ changeState: 0 });
     const [city, setCity] = useState({ changeState: 0 });
     const [country, setCountry] = useState({ changeState: 0 });
     const [adress, setAdress] = useState({ changeState: 0 });
     const dispatch = useDispatch();
     const initialAddressState = {
        address:"",
        city:"",
        country:"",
        postal:"",
        phone:"",
        livraisonType:"Livraison Standard",
    }
    const [shippingAddress, setShippingAddress] = useState({...initialAddressState});
       
    //-------get user by ID
        useEffect(() => {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    const uid = user.uid;
                    if (uid) {
                        const docRef = doc(db, "users", uid);
                        getDoc(docRef).then(docSnap => {
                            if (docSnap.exists()) {
                                setLoggedUser(docSnap.data())
                            }
                        })
                    }
                }
            })
        })
  
    const handleShipping = (e) =>{
        const {name, value} = e.target;
        setShippingAddress({
            ...shippingAddress,
            [name]: value,
          });
    };
    //console.log(loggedUser.country)
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(SAVE_SHIPPING_ADDRESS(shippingAddress));
        navigate("/Payment");
        };
     useEffect(() => {
         dispatch(CALCULATE_SUBTOTAL())
         dispatch(CALCULATE_TOTAL_QUANTITY())
         dispatch(SAVE_URL(""))
     }, [dispatch, cartItems]);
     
  return (
    
     <html lang="en">
     <head>
     <meta charset="UTF-8" />
          <meta name="name" content="Cook Tounsi" />
        <meta name="title" content="Cook Tounsi: vente de vos plats tunisiens préférés 2023" />
        <meta name="keywords" content="cuisine, Tunisie, cuisine tunisienne, 
        traditionnel, plats, épices, patisserie, healthy, lifestyle, food,  " />
        <title>Checkout - Cook Tounsi</title>
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
                        <h2>Caisse</h2>
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
              <div class="account-card">
                            <div class="account-title">
                                <h4>Votre Chariot</h4>
                            </div>
                            <div class="account-content">
                                <div class="table-scroll">
                                    <table class="table-list">
                                        <thead>
                                            <tr>
                                                <th scope="col">Produit</th>
                                                <th scope="col">Nom</th>
                                                <th scope="col">quantité</th>
                                                <th scope="col">Prix Unitaire</th>
                                                <th scope="col">Total</th>
                                                <th scope="col">action</th>
                                            </tr>
                                        </thead>
                                        {cartItems.map((cart, index) => {
                            const { id, name, price, photo, category, cartQuantity } = cart;
                            return (
                                <>
                                        <tbody>
                                            <tr key={id}>
                                                <td class="table-image"><img src={photo} alt="product"/></td>
                                                <td class="table-name"><h6>{name}</h6></td>
                                                <td class="table-quantity"><h6>{cartQuantity}</h6></td>
                                                <td class="table-price"><h6>€{price}<small>/kilo</small></h6></td>
                                                <td class="table-price"><h6>€{(price * cartQuantity).toFixed(2)}<small>/</small></h6></td>
                                                <td class="table-action">
                                                    <a class="trash" href="" title="Remove Wishlist" onClick={() => removeFromCart(cart)}><i class="icofont-trash"></i></a>
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
                                    <select class="form-select" value={shippingAddress.livraisonType}
                                    required
                                    defaultValue="Livraison Standard"
                                    name="livraisonType"
                                    onChange={(e) => handleShipping(e)}>
                                        <option value="Livraison Standard">Livraison Standard</option>
                                        <option value="Livraison Standard En europe">Livraison Standard En europe</option>
                                        <option value="Livraison rapide">Livraison rapide</option>
                                    </select>
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
              </div>
              <div class="col-lg-12">
                <div class="account-card">
                    <div class="account-title">
                        <h4>Détails de livraison</h4>
                    </div>
                    <form class="modal-content" onSubmit={handleSubmit}>
                        <div class="row">
                            <div class="col-md-6 col-lg-4 alert fade show">
                                <div class="profile-card contact active">
                                    <h6>Pays</h6>
                                    <select class="form-select" 
                                    required
                                    value={loggedUser.country}
                                    name="country"
                                    onChange={(e) => handleShipping(e)} >
                                        Choisir votre pays
                                        <option value="">Choisir votre pays</option>
                                        <option value="France">France</option>
                                        <option value="Belgique">Belgique</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 alert fade show">
                                <div class="profile-card contact active">
                                    <h6>Ville</h6>
                                    <select class="form-select"
                                    required
                                    name="city"
                                    onChange={(e) => handleShipping(e)}>
                                        <option value="">Choisir votre Ville</option>
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
                                    onChange={(e) => handleShipping(e)}
                                    name="address"
                                    required
                                    />
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 alert fade show">
                                <div class="profile-card contact active">
                                    <h6>Code Postal</h6>
                                    <input class="form-control" type="text" 
                                    onChange={(e) => handleShipping(e)}
                                    name="postal"
                                    required
                                    />
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 alert fade show">
                                <div class="profile-card contact active">
                                    <h6>Téléphone</h6>
                                    <input class="form-control" type="text" 
                                    name="phone"
                                    required
                                    onChange={(e) => handleShipping(e)} />
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 alert fade show" >
                                <div class="profile-card contact active" >
                                <label >
                            Veiller saisir les détails de livraisons par ici et confirmer. Veiller nous contacter si vous voulez changer l'adresse de livraison.</label>
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
