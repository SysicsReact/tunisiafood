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
import { Helmet } from "react-helmet";
const CartDetails = () => {

    const [user] = useAuthState(auth);
    const [loggedUser, setLoggedUser] = useState({})
    const [newPhone, setPhone] = useState({ });
    const [city, setCity] = useState({ });;
    const [country, setCountry] = useState({ });
    const[livraisonType,SetLivraison]=useState({ })
    const[livraisonCost,SetLivraisonCost]=useState("10")
    const [adress, setAdress] = useState({ });;
    const [postal, setPostal] = useState({ });;
    const notifyError = () => toast.error("Completez votre profile");
    const notifyErr = () => toast.error("Authentification requise");
    const navigate = useNavigate();
    const cartItems = useSelector(selectCartItems);
    const cartTotalAmount = useSelector(selectCarTotalAmount);
    const url = window.location.href;
    
    const dispatch = useDispatch();
    //Payment 
    const [responseData, setResponseData] = useState(null);
    const[canOpenWindow , setCanOpenWindow] = useState(false);

    //const [checkout, setCheckout] = useState([]);
    const removeFromCart = (cart) => {
        dispatch(REMOVE_FROM_CART(cart));
    }



    let price= cartTotalAmount.toString();
    
    let priceFinal = parseFloat(price) * 100;
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

    //Payment API
    const handleApiCall = async () => {
        const url = "https://api.konnect.network/api/v2/payments/init-payment";
        const requestBody = {
          receiverWalletId: "642a7d6c2e9c6ea045f6f07b",
          token: "EUR",
          amount:  priceFinal,
          type: "immediate",
          description: "This is a fucked up code, do better",
          lifespan: 10,
          feesIncluded: false,
          firstName: "John",
          lastName: "Doe",
          phoneNumber: "22777777",
          email: "john.doe@gmail.com",
          orderId: "1234657",
          webhook: false,
          silentWebhook: true,
          successUrl: "https://cooktounsi.com/CheckoutSuccess",
          failUrl: "https://dev.konnect.network/gateway/payment-failure",
          checkoutForm: true,
          acceptedPaymentMethods: [
            "wallet",
            "bank_card",
            "e-DINAR"
          ]
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
      };
      useEffect(() => {
        // Open the link in a new tab when the countdown ends
        if (canOpenWindow === true) {
    
          // 👇 Open link in new tab programmatically
          if(responseData.payUrl != null)
    
          //window.location.replace(responseData.payUrl, '_blank', 'noreferrer');
          //window.location.replace('https://cooktounsi.com/CheckoutSuccess', '_blank', 'noreferrer');
          setCanOpenWindow(false);
        }
      }, [responseData]);
      //Payment done
    return (
        <>
          <head>
          <meta charSet="UTF-8" />
          <meta name="name" content="Cook Tounsi" />
        <meta name="title" content="Cook Tounsi: vente de vos plats tunisiens préférés 2023" />
        <meta name="keywords" content="cuisine, Tunisie, cuisine tunisienne, 
        traditionnel, plats, épices, patisserie, healthy, lifestyle, food,  " />
        <title>Détails Chariot - Cook Tounsi</title>
          <link rel="icon" href="assets/images/favicon.png" />
          <link rel="stylesheet" href="assets/fonts/flaticon/flaticon.css" />
          <link rel="stylesheet" href="assets/fonts/icofont/icofont.min.css" />
          <link rel="stylesheet" href="assets/fonts/fontawesome/fontawesome.min.css" />
          <link rel="stylesheet" href="assets/vendor/venobox/venobox.min.css" />
          <link rel="stylesheet" href="assets/vendor/niceselect/nice-select.min.css" />
          <link rel="stylesheet" href="assets/vendor/bootstrap/bootstrap.min.css" />
          <link rel="stylesheet" href="assets/css/main.css" />
          <link rel="stylesheet" href="assets/css/user-auth.css" />
          <link rel="stylesheet" href="assets/css/checkout.css" />
          <link rel="stylesheet" href="assets/css/home-classic.css" />
          </head>
          <body>
          <div className="backdrop"></div>
                <a className="backtop fas fa-arrow-up" href="#"></a>
                <section className="inner-section single-banner" style={{ backgroundImage: "url(assets/images/spices.jpg)", backgroundRepeat: "no-repeat", backgroundPosition: "center", }}>
                    <div className="container">
                        <h2>Checkout</h2>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Accueil</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Checkout</li>
                        </ol>
                    </div>
                </section>
            <ToastContainer />
            <Helmet>
            <meta name="name" content="Cook Tounsi" />
            <title>Cook Tounsi - Blogs</title>
            <meta name="description" content="Blogs" />
            <meta name="keywords" content="cuisine, boissons, Tunisie, france, belgique, cuisine tunisienne, 
            traditionnel, plats, blogs, épices, europe, patisserie, livraison, services, lifestyle " />
            </Helmet>

            {cartItems.length === 0 ? (
                <>
                    <div className="cart-info-group">
                        <div className="cart-footer">
                            <h6 className="coupon-btn">Votre Chariot Est Vide !</h6>
                        </div>
                    </div>
                    <div className="cart-footer">
                        <a className="cart-checkout-btn" href="#">
                            <span className="checkout-label">Parcourir les produits</span>
                            <span className="checkout-price"><i className="fas fa-shopping-basket"></i></span>
                        </a>
                    </div>
                </>
            ) : (
                <>
            <section className="inner-section checkout-part">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="alert-info">
                                <p>Vous n'avez pas terminé vos achats ? <Link to="/ShopProduct"><a href="">Retour aux achats</a></Link></p>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="account-card">
                                <div className="account-title">
                                    <h4>Votre Commande</h4>
                                </div>
                                <div className="account-content">
                                    <div className="table-scroll">
                                        <table className="table-list">
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
                                                    <td className="table-image"><img src={photo} alt="product"/></td>
                                                    <td className="table-name"><h6>{name}</h6></td>
                                                    <td className="table-brand"><h6>{category}</h6></td>
                                                    <td className="table-quantity"><h6>{cartQuantity}</h6></td>
                                                    <td className="table-price"><h6>€{price}<small>/kilo</small></h6></td>
                                                    <td className="table-price"><h6>€{(price * cartQuantity).toFixed(2)}<small>/</small></h6></td>
                                                    <td className="table-action">
                                                        <a className="view" href="" title="Quick View" data-bs-toggle="modal" data-bs-target="#product-view"><i className="fas fa-eye"></i></a>
                                                        <a className="trash" href="" title="Remove Wishlist" onClick={() => removeFromCart(cart)}><i className="icofont-trash"></i></a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                    </>)
                            })}
                                        </table>
                                    </div>
                                    <div className="checkout-charge">
                                        <ul>
                                            <li>
                                                <span>Sub-total</span>
                                                <span>€{cartTotalAmount.toFixed(2)}</span>
                                            </li>
                                            <li>
                                                <span>Livraison:</span>
                                        <select className="form-select" onChange={handleLivraisonChange}>
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
                <div className="col-lg-12">
                    <div className="account-card">
                        <div className="account-title">
                            <h4>Détails de livraison</h4>
                            <button data-bs-toggle="modal" >Modifier</button>
                        </div>
                        <form className="modal-content" onSubmit={(event) => event.preventDefault()}>
                            <div className="row">
                            <div className="col-md-6 col-lg-4 alert fade show" >
                                    <div className="profile-card contact active" style={{backgroundColor:"#7ce4f5"}}>
                                    
                                    <label style={{Color:"white"}}>
                                Si vous voulez, vous pouvez changer les détails de livraisons par ici et confirmer.</label>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 alert fade show">
                                    <div className="profile-card contact active">
                                        <h6>Pays</h6>
                                        <select className="form-select" onChange={handleCountryChange} >
                                        {checkCountry(loggedUser)}
                                            <option value="France">France</option>
                                            <option value="Belgique">Belgique</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 alert fade show">
                                    <div className="profile-card contact active">
                                        <h6>Ville</h6>
                                        <select className="form-select" onChange={handleCityChange} >
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
                                <div className="col-md-6 col-lg-4 alert fade show">
                                    <div className="profile-card contact active">
                                        <h6>Adresse</h6>
                                        <input className="form-control" type="text" defaultValue={loggedUser.adress} onChange={handleAdressChange} placeholder="Entrez votre adresse..." />
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 alert fade show">
                                    <div className="profile-card contact active">
                                        <h6>Code Postal</h6>
                                        <input className="form-control" type="text" onChange={handlePostalChange} placeholder="Entrez le code postal..." />
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 alert fade show">
                                    <div className="profile-card contact active">
                                        <h6>Téléphone</h6>
                                        <input className="form-control" type="text" defaultValue={loggedUser.phone} onChange={handlePhoneChange} placeholder="Entrez Votre numéro de téléphone..." />
                                    </div>
                                </div>
                            
                            </div>
                        </form>
                        <input type="checkbox" id="checkout-check"/>
                        <label for="checkout-check">
                        En effectuant cet achat, vous acceptez nos <Link to="/Cgv">Termes et conditions</Link>.</label>   
                    </div>
                    <div className="checkout-proced">
                        <button href="" className="btn btn-inline" onClick={processToCheckout} >procédez au payment</button>
                    </div>

        <br/>

        <div className="checkout-proced">
        <button className="btn btn-inline" onClick={handleApiCall}>Accéder Au Paiement</button>
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
                </>)
            }
        </body>
        </>
    )
}
export default CartDetails;