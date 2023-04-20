import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase.config";
import { useDispatch, useSelector } from "react-redux";
import { SAVE_URL, CALCULATE_TOTAL_QUANTITY, 
     CALCULATE_SUBTOTAL, CLEAR_CART, REMOVE_FROM_CART, 
     selectCartItems, selectCarTotalAmount} from "../redux/slice/cartSlice";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc,updateDoc, addDoc, collection } from "@firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { selectuserID } from '../redux/slice/authSlice'
import MyComponent from "../components/test1";
const CartDetails = () => {

    const [user] = useAuthState(auth);
    const [username, setName] = useState({})
    const [loggedUser, setLoggedUser] = useState({})
    const userID = useSelector(selectuserID)
    const [newPhone, setPhone] = useState({ });
    const [city, setCity] = useState({ });;
    const [country, setCountry] = useState({ });
    const[livraisonType,SetLivraison]=useState({ })
    const[livraisonCost,SetLivraisonCost]=useState("10")
    const [adress, setAdress] = useState({ });;
    const [postal, setPostal] = useState({ });;
    const [carddetails,setCardDetails]=useState([])
    const notifyError = () => toast.error("Completez votre profile");
    const notifyErr = () => toast.error("Authentification requise");
    const navigate = useNavigate();
    const cartItems = useSelector(selectCartItems);
    const cartTotalAmount = useSelector(selectCarTotalAmount);
    const url = window.location.href;
    const dispatch = useDispatch();
    //const [checkout, setCheckout] = useState([]);
    const removeFromCart = (cart) => {
        dispatch(REMOVE_FROM_CART(cart));
    } 
    useEffect(() => {
        dispatch(CALCULATE_SUBTOTAL())
        dispatch(CALCULATE_TOTAL_QUANTITY())
        dispatch(SAVE_URL(""))
    }, [dispatch, cartItems]);
    
    useEffect(()=>
    {
        onAuthStateChanged(auth, (user) => {
        
            const uid = user.uid;
            if (uid) {
                const docRef = doc(db, "users", uid);
                getDoc(docRef).then(docSnap => {
                    if (docSnap.exists()) {
                        setLoggedUser(docSnap.data())
                        if (!docSnap.data().country || !docSnap.data().city || !docSnap.data().adress) {
                            notifyError()
                            navigate("/profile")
                        } 
                    }

                })
            }
    })
    
    }, [user])
    
    //-----handling changes    

    function handlePhoneChange(event) {
        setPhone({
            phone: event.target.value,
        });
    }
    function handleCityChange(event) {
        alert(event.target.value);
        setCity({
            city: event.target.value,
        });
    }
    function handleCountryChange(event) {
        setCountry({
            country: event.target.value,
        });
    }
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
        }
    
    }
    function handleAdressChange(event) {
        setAdress(
            {
                adress:event.target.value,
            }
            
        );
    }
    function handlePostalChange(event) {
        setPostal({
            postal: event.target.value,
        });
    }

    useEffect (()=>
    {
        
        if(loggedUser){
            setAdress(
                {
                    adress:loggedUser.adress,
                }
                 
                
           );
            setCity({
                city: loggedUser.city,
               
            });
            setCountry({
                country: loggedUser.country,
                
            });
            setPhone({
                phone: loggedUser.phone, 
            });
        }
    }, [loggedUser])

    // setIsLoading(true);

    const shippingAddress = {
        city:city.city,
        adress:adress.adress, 
        postal_code: postal.postal,
        country:country.country,
        newPhone:newPhone.phone,
        };
    //Save order
    const processToCheckout = () => {
      
            if (user) {
                const today = new Date();
                for(var index in cartItems){
                    setCardDetails({id:cartItems[index].id,
                        quantity: cartItems[index].quantity})
                }
                cartItems.map((cart) => {
                    setCardDetails({id:cart.id,
                        quantity: cart.quantity})
                })
                const date = today.toDateString();
                const uid = user.uid;
                const docRef = doc(db, "users", uid);
                const orderConfig = {
                    timestamp: date,
                    price_total: cartTotalAmount,
                    product: cartItems, 
                    shipping: shippingAddress,
                    state: 0,
                    user_id: uid,
                    livraisonType,
                };
                getDoc(docRef).then(docSnap => {
                    if (!docSnap.data().country || !docSnap.data().city || !docSnap.data().adress) {
                       // notifyError()
                       // navigate("/profile")
                    }else{
                        //-------proceed with checkout process
                        try {
                            addDoc(collection(db, "orders"), orderConfig);
                            toast.success("Votre commande était placé avec succès");
                            navigate("/Checkout");
                            dispatch(CLEAR_CART())
                          } catch (error) {
                            toast.error(error.message);
                          }
                    }
                })
            } else {
                notifyErr()
                dispatch(SAVE_URL(url))
                navigate("/Login")
            }
        
    }
    //Checkout: localStorage.getItem("orderConfig") ? JSON.parse(localStorage.getItem("orderConfig")):[],
    //--------html conditions

    function checkCity(loggedUser) {
        if (loggedUser.city) {
            return (
                <><option selected disabled hidden>{loggedUser.city}</option></>
            )
        } else {
            return (
                <><option selected disabled hidden>Choisir Ville</option></>
            )
        }
    }
    function checkCountry(loggedUser) {
        if (loggedUser.country) {
            return (
                <><option selected disabled hidden>{loggedUser.country}</option></>
            )
        } else {
            return (
                <><option selected disabled hidden>Choisir Pays</option></>
            )
        }
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
                            <h6 className="coupon-btn">Votre Chariot Est Vide !</h6>
                        </div>
                    </div>
                    <div class="cart-footer">
                        <a class="cart-checkout-btn" href="#">
                            <span class="checkout-label">Parcourir les produits</span>
                            <span class="checkout-price"><i class="fas fa-shopping-basket"></i></span>
                        </a>
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
                                <div class="table-scroll">
                                    <table class="table-list">
                                        <thead>
                                            <tr>
                                                <th scope="col">Produit</th>
                                                <th scope="col">Nom</th>
                                                <th scope="col">Catégorie</th>
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
                                                <td class="table-brand"><h6>{category}</h6></td>
                                                <td class="table-quantity"><h6>{cartQuantity}</h6></td>
                                                <td class="table-price"><h6>€{price}<small>/kilo</small></h6></td>
                                                <td class="table-price"><h6>€{(price * cartQuantity).toFixed(2)}<small>/</small></h6></td>
                                                <td class="table-action">
                                                    <a class="view" href="" title="Quick View" data-bs-toggle="modal" data-bs-target="#product-view"><i class="fas fa-eye"></i></a>
                                                    <a class="trash" href="" title="Remove Wishlist" onClick={() => removeFromCart(cart)}><i class="icofont-trash"></i></a>
                                                </td>
                                            </tr>
                                        </tbody>
                                </>)
                        })}
                                    </table>
                                </div>
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
            <div class="col-lg-12">
                <div class="account-card">
                    <div class="account-title">
                        <h4>Détails de livraison</h4>
                        <button data-bs-toggle="modal" >Modifier</button>
                    </div>
                    <form class="modal-content" onSubmit={(event) => event.preventDefault()}>
                        <div class="row">
                        <div class="col-md-6 col-lg-4 alert fade show" >
                                <div class="profile-card contact active" style={{backgroundColor:"#7ce4f5"}}>
                                
                                <label style={{Color:"white"}}>
                            Si vous voulez, vous pouvez changer les détails de livraisons par ici et confirmer.</label>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 alert fade show">
                                <div class="profile-card contact active">
                                    <h6>Pays</h6>
                                    <select class="form-select" onChange={handleCountryChange} >
                                    {checkCountry(loggedUser)}
                                        <option value="France">France</option>
                                        <option value="Belgique">Belgique</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 alert fade show">
                                <div class="profile-card contact active">
                                    <h6>Ville</h6>
                                    <select class="form-select" onChange={handleCityChange} >
                                        {checkCity(loggedUser)}
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
                                    <input class="form-control" type="text" defaultValue={loggedUser.adress} onChange={handleAdressChange} placeholder="Entrez votre adresse..." />
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 alert fade show">
                                <div class="profile-card contact active">
                                    <h6>Code Postal</h6>
                                    <input class="form-control" type="text" onChange={handlePostalChange} placeholder="Entrez le code postal..." />
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 alert fade show">
                                <div class="profile-card contact active">
                                    <h6>Téléphone</h6>
                                    <input class="form-control" type="text" defaultValue={loggedUser.phone} onChange={handlePhoneChange} placeholder="Entrez Votre numéro de téléphone..." />
                                </div>
                            </div>
                           
                        </div>
                    </form>
                    
                                <input type="checkbox" id="checkout-check"/>
                                <label for="checkout-check">
                             En effectuant cet achat, vous acceptez nos <Link to="/Cgv">Termes et conditions</Link>.</label>
                               
                </div>
                            <div class="checkout-proced">
                                <button href="" class="btn btn-inline" onClick={processToCheckout} >procédez au payment</button>
                            </div>
                            <div class="modal-dialog modal-dialog-centered">
            </div>
            <MyComponent/>
            </div>
           
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
export default CartDetails;