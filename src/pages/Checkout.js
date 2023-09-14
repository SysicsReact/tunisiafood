import React, { useEffect, useState } from 'react';
import {  json, useNavigate } from "react-router-dom";
import { getDoc, updateDoc, collection, query, where, onSnapshot, documentId, setDoc, doc } from "firebase/firestore";
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
import { Helmet } from 'react-helmet';

export default function Checkout() {
     const navigate = useNavigate();
     const [user] = useAuthState(auth);
     const [loggedUser, setLoggedUser] = useState({})
     const removeFromCart = (cart) => {
        dispatch(REMOVE_FROM_CART(cart));
    }
     const cartItems = useSelector(selectCartItems);
     const cartTotalAmount = useSelector(selectCarTotalAmount);
     var DBcountry = [];
     const [test, setTest] = useState([]);
     const [test1, setTest1] = useState([]);
     const [select, setSelect] = useState("France");
     const [optionSelected, setOptionSelected] = useState([]);
     const cartTotalQuantity = useSelector(selectCarTotalQuantity);
     const[livraisonCost,SetLivraisonCost]=useState("10");
     const[livraisonType,SetLivraison]=useState({});
     const dispatch = useDispatch();
     const initialAddressState = {
        address:"",
        city:"Paris",
        country:"France",
        postal:"",
        phone:"",
        livraisonType:"Livraison Standard",
    }
    const [shippingAddress, setShippingAddress] = useState({...initialAddressState});
    

    //---------get countries  

    useEffect(() => {
        DBcountry = []
        const q = query(
            collection(db, "regions")
        );
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if (!DBcountry.includes(doc.data().country)) {
                    DBcountry.push(doc.data().country)
                }
            });
        });
        setTest(DBcountry)
    }, []);
        //----------get selected cities based on selected country

        useEffect(() => {
            const q = query(
                collection(db, "regions"),
                where(documentId(), "==", select)
    
            );
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    setTest1(doc.data().optionSelected)
                });
            });
        }, [select]);
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
     <link rel="stylesheet" href="assets/css/checkout.css"></link>
     </head>
     <ToastContainer />
     <Helmet>
        <meta charSet="UTF-8" />
        <title>Cook Tounsi - Checkout</title>
        <meta name="name" content="Cook Tounsi" />
        <meta name="title" content="Cook Tounsi - Checkout" />
        <meta name="keywords" content="cuisine, Tunisie, cuisine tunisienne, 
        traditionnel, plats, épices, patisserie, healthy, lifestyle, recettes,
            food, livraison, ماكلة تونسية , أطباق , معلبة, "  />
    <meta property="og:title" content="Cook Tounsi - Contactez-nous" />
    <meta property="og:image" content="assets/images/about/1.jpg" />
     </Helmet>
        <div className="backdrop"></div>
        <a className="backtop fas fa-arrow-up" href="#"></a>
        <section className="inner-section single-banner" style={{ backgroundImage: "url(assets/images/spices.jpg)", backgroundRepeat: "no-repeat", backgroundPosition: "center", }}>
            <div className="container">
                <h2>Caisse</h2>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Accueil</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Checkout</li>
                </ol>
            </div>
        </section>

        {cartItems.length === 0 ? (
            <>
                <div className="cart-info-group">
                    <div className="cart-footer">
                        <h6 className="coupon-btn">Nous Avons Bien Reçu Votre Commande. Merci pour votre fidélité!</h6>
                    </div>
                </div> 
                <div className="cart-footer">
                    <Link to={"/OrderHistory"}> <a className="cart-checkout-btn" href="#">
                        <span className="checkout-label">Parcourir Votre Historique de Commandes</span>
                    </a></Link>
                </div>
                <div className="cart-footer">
                <Link to={"/ShopProduct"}>  <a className="cart-checkout-btn" href="#">
                        <span className="checkout-label">Parcourir les produits</span>
                    </a></Link>
                </div>
            </>
        ) : (
            <>      
        <section className="inner-section checkout-part">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <div className="account-card">
                                <div className="account-title">
                                    <h4>Votre Chariot</h4>
                                </div>
                                <div className="account-content">
                                    <div className="table-scroll">
                                        <table className="table-list">
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
                                                    <td className="table-image"><img src={photo} alt="product"/></td>
                                                    <td className="table-name"><h6>{name}</h6></td>
                                                    <td className="table-quantity"><h6>{cartQuantity}</h6></td>
                                                    <td className="table-price"><h6>€{price}<small>/kilo</small></h6></td>
                                                    <td className="table-price"><h6>€{(price * cartQuantity).toFixed(2)}<small>/</small></h6></td>
                                                    <td className="table-action">
                                                        <a className="trash" href="" title="Remove Wishlist" onClick={() => removeFromCart(cart)}><i className="icofont-trash"></i></a>
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
                                                <span>Livraison:</span>
                                        <select className="form-select" value={shippingAddress.livraisonType}
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
                <div className="col-lg-12">
                    <div className="account-card">
                        <div className="account-title">
                            <h4>Détails de livraison</h4>
                        </div>
                        <form className="modal-content" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6 col-lg-4 alert fade show">
                                    <div className="profile-card contact active">
                                        <h6>Pays</h6>
                                        <select className="form-select" 
                                        required
                                        value={select}
                                        name="country"
                                        onChange={(e) => {handleShipping(e);
                                            setSelect(e.target.value);} } >
                                            Choisir votre pays
                                            {test.map(fbb =>
                                <option  >{fbb}</option>
                            )};
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 alert fade show">
                                    <div className="profile-card contact active">
                                        <h6>Ville</h6>
                                        <select className="form-select"
                                        required
                                        name="city"
                                        onChange={(e) => handleShipping(e)}>
                                            {test1.map(b =>
                            <option  key={b.key} value={b.key}>{b}</option>
                        )};
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 alert fade show">
                                    <div className="profile-card contact active">
                                        <h6>Adresse</h6>
                                        <input className="form-control" type="text"
                                        onChange={(e) => handleShipping(e)}
                                        name="address"
                                        required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 alert fade show">
                                    <div className="profile-card contact active">
                                        <h6>Code Postal</h6>
                                        <input className="form-control" type="text" 
                                        onChange={(e) => handleShipping(e)}
                                        name="postal"
                                        required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 alert fade show">
                                    <div className="profile-card contact active">
                                        <h6>Téléphone</h6>
                                        <input className="form-control" type="text" 
                                        name="phone"
                                        required
                                        onChange={(e) => handleShipping(e)} />
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 alert fade show" >
                                    <div className="profile-card contact active" >
                                    <input type="checkbox" required id="checkout-check"/>
                                    <label >
                                    En effectuant cet achat, vous acceptez nos <Link to="/Cgv">Termes et conditions</Link>.</label>
                                    </div>
                                </div>
                            </div>
                            <div className="checkout-proced">
                                    <button href="" className="btn btn-inline" type='submit' >procédez au payment</button>
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
      </>
  )
}
