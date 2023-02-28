import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { auth, db, logout, changeIsLoading,changeIsTesting,testLoading, GetCardDetails } from "../firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { SET_ACTIVE_USER,Remove_ACTIVE_USER } from "../redux/slice/authSlice";
import ShowOnLogin, { ShowOnLogOut } from "./hiddenLink";
import { useDispatch, useSelector } from "react-redux";
import { async } from "q";
import { doc, getDoc, setDoc } from "@firebase/firestore";
import Loader from "../components/loader/Loader";
import Cart from "./Cart";
import { query, where, onSnapshot, documentId, updateDoc, collection } from "firebase/firestore";
import { selectCarTotalAmount, selectCarTotalQuantity } from "../redux/slice/cartSlice";
import { CALCULATE_TOTAL_QUANTITY, CALCULATE_SUBTOTAL, selectCartItems } from "../redux/slice/cartSlice";
import { selectWishItems } from "../redux/slice/wishSlice";


let x=0;
export function updatex(value)
{
    x=value;
}
const Dashboard=()=> {
    const [user] = useAuthState(auth);
    const[displayName,setDisplayName]=useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [logUser, setLogUser] = useState({})
    const [isLoading, setIsLoading ] = useState(true);
    const[test, setTest]=useState(true)
    const [completeLoading,setCompleLoading]=useState(false)
    const [isLoggedIn,setIsloggin]=useState(false); 
    const[valueCardDetails,SetCardValueDetails]=useState(0); 
    const [products, setProducts] = useState([]);
    const [value, setValue] = useState("");
    const [result, setResult] = useState([]);  
    const cartItems = useSelector(selectCartItems);
    const wishItems = useSelector(selectWishItems);
    const cartTotalQuantity = useSelector(selectCarTotalQuantity);
    const cartTotalAmount = useSelector(selectCarTotalAmount);
   
    
    //-------get user by ID

    useEffect(() => {
        // setIsLoading(true);
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                if (uid) {
                    const docRef = doc(db, "users", uid);
                    getDoc(docRef).then(docSnap => {
                        if (docSnap.exists()) {
                            setLogUser(docSnap.data())
                        }
                    })
                }
            }
        })
    }, [dispatch])
    //monitor currently siggnin user
    useEffect(()=>{
      
       // setIsLoading(true);
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const uid = user.uid;
              setIsloggin(true);
              if(uid){
                const docRef = doc(db, "users", uid);
                getDoc(docRef).then(docSnap => {
                    if (docSnap.exists()) {
                        setDisplayName(docSnap.data().userName)
                        setIsLoading(true);
                        changeIsLoading(true);
                        changeIsTesting(true);
                        setCompleLoading(testLoading())
                        localStorage.setItem("isCompleting",true);
                        //changeIsTesting(false); 
                    } else {   
                            const userRef = doc(db, "users", uid);
                             setDoc(docRef, {
                              userName: user.displayName,
                              email:user.email,
                              country:"",
                              city:"",
                              adress:"",
                              photo:auth.currentUser.photoURL,
                              

                          }).then(()=>{
                            setDisplayName(user.displayName)
                            setIsLoading(true);
                            changeIsLoading(true);
                            changeIsTesting(true);
                            setCompleLoading(testLoading())
                            //changeIsTesting(false);
                          }).catch((error) => {
                            setIsLoading(false);
                            changeIsLoading(true);
                            changeIsTesting(true);
                            setCompleLoading(testLoading())
                           
                          });
                          
                    }
                  }) 
                }
              //console.log(user.displayName)
              dispatch(SET_ACTIVE_USER({
                email: user.email,
                userName: user.displayName?user.displayName:displayName,
                userID: user.uid
              }))
              setIsloggin(true);
            } else {
              // User is signed out
              // ...
                setDisplayName("")
                dispatch(Remove_ACTIVE_USER());
                changeIsLoading(true);
                changeIsTesting(true);
                setCompleLoading(testLoading())
                setIsloggin(false);
            }
          });
          setCompleLoading(testLoading())
    },[dispatch,displayName,completeLoading])
    
    useEffect(() => {
        dispatch(CALCULATE_SUBTOTAL())
        dispatch(CALCULATE_TOTAL_QUANTITY())
       }, [dispatch, cartItems]);
  
    useEffect(() => {
        if (products.length == 0) {
            const q = query(
                collection(db, "products"),
            );
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    products.push(doc.data())
                });
            });
        }
        if (value.length > 0) {
            setResult([]);
            let searchQuery = value.toLowerCase();
            for (const key in products) {
                let fruit = products[key].description.toLowerCase();
                if (fruit.slice(0, searchQuery.length).indexOf(searchQuery) !== -1) {

                    setResult(prevResult => {
                        return [...prevResult, products[key]]
                    });
                }
            }
        } else {
            setResult([]);
        }
    }, [value]);    
    function loggedUser(user) {
        if (user) {
            return (
                <>
                <button className="dashboard__btn" onClick={logout}> 
                <Link to="/"> Logout </Link> </button>
                <span><Link to="MyProfile"> profile </Link></span>
                </>
            )
        } else {
            return (
                <span><Link to="/Login"> join </Link></span>
            )
        }
    } 
    return (  
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="name" content="Greeny" />
                <meta name="title" content="Greeny - eCommerce HTML Template" />
                <title>Classic Home - Greeny</title>
                <link rel="icon" href="assets/images/cook.png" />
                <link rel="stylesheet" href="assets/fonts/flaticon/flaticon.css" />
                <link rel="stylesheet" href="assets/fonts/icofont/icofont.min.css" />
                <link rel="stylesheet" href="assets/fonts/fontawesome/fontawesome.min.css" />
                <link rel="stylesheet" href="assets/vendor/venobox/venobox.min.css" />
                <link rel="stylesheet" href="assets/vendor/slickslider/slick.min.css" />
                <link rel="stylesheet" href="assets/vendor/niceselect/nice-select.min.css" />
                <link rel="stylesheet" href="assets/vendor/bootstrap/bootstrap.min.css" />
                <link rel="stylesheet" href="assets/css/main.css" />
                <link rel="stylesheet" href="assets/css/home-classic.css" />
            </head>
            {(!completeLoading) &&<Loader/>}

            {isLoggedIn &&
            <aside class="nav-sidebar">
            <div class="nav-header">
                <a href="#"><img src={window.location.origin +'/assets/images/cook.png'}   alt="logo"/></a>
                <button class="nav-close"><i class="icofont-close"></i></button>
            </div>
            <div class="nav-content">
               <div class="nav-profile">
                  
                    {logUser.photo!=undefined&&
                    <a class="nav-user" href="#"><img src={logUser.photo} alt="user"/></a>
                    }
                    
                    <h4 class="nav-name"><a href="profile.html">{displayName}</a></h4>
                </div> 
                <ul class="nav-list">
                    <li>
                    <NavLink to="/MyProfile" className="My-link" > <a class="nav-link dropdown-link" href="#"><i class="icofont-bag-alt"></i>Profile</a></NavLink>
                    </li>
                    <li>
                    <NavLink to="/OrderHistory" className="My-link" > <a class="nav-link dropdown-link" href="#"><i class="icofont-page"></i>
                    Commandes</a></NavLink>
                    <NavLink to="/" className="My-link" > <a class="nav-link dropdown-link" href="#"><i class="icofont-warning"></i>
confidentialité</a></NavLink>
                    </li>
                    <li>
                        <a class="nav-link dropdown-link" href="#"><i class="icofont-lock"></i>authentic</a>
                    </li>
                    <li>
                    <NavLink to="/" className="My-link" > <a class="nav-link dropdown-link" href="#" onClick={logout}><i class="icofont-logout"></i>Se déconnecter</a></NavLink>
                    </li>

                </ul>
                <div class="nav-info-group">
                    <div class="nav-info">
                        <i class="icofont-ui-touch-phone"></i>
                        <p>
                            <small>Appelez-nous</small>
                            <span>(+216) 50 450 960</span>
                        </p>
                    </div>
                    <div class="nav-info">
                        <i class="icofont-ui-email"></i>
                        <p>
                            <small>Envoyez-nous un email</small>
                            <span>contact@cooktoonsi.com</span>
                        </p>
                    </div>
                </div>
                <div class="nav-footer">
                    <p>Tous droits réservés par <a href="#">Cool Toonsi</a></p>
                </div>
            </div>

        </aside>}
        {!isLoggedIn &&
        <aside class="nav-sidebar">
            
            <div class="nav-header">
                <a href="#"><img src="assets/images/cook.png" alt="logo"/></a>
                <button class="nav-close"><i class="icofont-close"></i></button>
            </div>
            <div class="nav-content">
                <div class="nav-btn">
                    <Link to="/Login"><a href="" class="btn btn-inline">
                        <i class="fa fa-unlock-alt"></i>
                        <span>join here</span>
                    </a></Link>
                </div>
                <ul class="nav-list">
                    <li>
                        <a class="nav-link dropdown-link" href="#">
                        <i class="icofont-lock"></i>authentic</a>
                    </li>
                </ul>
                <div class="nav-info-group">
                    <div class="nav-info">
                        <i class="icofont-ui-touch-phone"></i>
                        <p>
                            <small>Appelez-nous</small>
                            <span>(+216) 50 450 960</span>
                        </p>
                    </div>
                    <div class="nav-info">
                        <i class="icofont-ui-email"></i>
                        <p>
                            <small>Envoyez-nous un email</small>
                            <span>support@cooltoonsi.com</span>
                        </p>
                    </div>
                </div>
                <div class="nav-footer">
                    <p>Tous droits réservés par <a href="#">Cool Toonsi</a></p>
                </div>
            </div>

        </aside>}
            <header className="header-part">  
                <div className="container">
                    <div className="header-content">
                        <div className="header-media-group">
                            
                            <button className="header-user">{logUser.photo!=undefined&&<img src={logUser.photo} alt="user" /> }
                            {logUser.photo==undefined&&
                             <img src={window.location.origin +'/assets/images/user.png'} alt="user" />
                            }
                              </button>
                           
                           
                            <a className="header-logo">
                            <Link to="/">
                                <img src="assets/images/cook.png" alt="logo" />
                            </Link>
                        </a>
                            <button className="header-src"><i className="fas fa-search"></i></button>
                        </div>
                        <a className="header-logo">
                            <Link to="/">
                                <img src="assets/images/cook.png" alt="logo" />
                            </Link>
                        </a>
                        <form className="header-form">
                        <div class="dropdown">
                            <input type="text"  placeholder="Cherchez..." value={value} onChange={(e) => setValue(e.target.value)} />
                            <div id="myDropdown" class="rounded dropdown-content show">
                                {result.slice(0,5).map((result, Index) => (
                                    <a  key={Index}>
                                        <img src={result.photo} class="mx-3 rounded" height="30"/>
                                        {result.name}
                                    </a>
                                ))}  
                            </div>
                        </div>
                        <button><i className="fas fa-search"></i></button>
                        </form>

    <div className="header-widget-group">
        <a href="front/compare.html" className="header-widget" title="Compare List">
            <i className="fas fa-random"></i>
            <sup>0</sup>
        </a>
       <a href="" className="header-widget" title="Wishlist">
       <Link to="WishDetails"> <i className="fas fa-heart"></i></Link>
            <sup>{wishItems.length}</sup>
        </a>
        <button className="header-widget header-cart" title="Cartlist">
            <i className="fas fa-shopping-basket"></i>
            <sup  >{cartTotalQuantity}</sup>
            <span>total price<small>${cartTotalAmount.toFixed(2)}</small></span>
            <span><small></small></span>
        </button>
    </div>
<li className="header-widget">
    {!isLoggedIn&&
               <span ><Link to="/Login"> join </Link></span>
            }
            
{isLoggedIn &&

<span className="navbar-item dropdown" >  
{logUser.photo!=undefined&&
            <img src={logUser.photo} alt="user" />
            }
            {logUser.photo==undefined&&
            <img src={window.location.origin + '/assets/images/user.png'}  alt="user" />
            }
<NavLink to="/MyProfile" className="My-link" >{displayName} </NavLink>
            <ul className="dropdown-position-list">
                <li><Link to="MyProfile"> profile </Link></li>
                <li alt="Mes commandes"><Link to="OrderHistory"> Commandes </Link></li>
                <li><button className="dashboard__btn"
                    onClick={logout}> 
                <Link to="/"> Logout </Link> </button></li>
            </ul>
            </span>
        }

    
</li>
                    </div>
                </div>
            </header>
            <div className="mobile-menu">
                    <a href="index.html" title="Home Page">
                        <i className="fas fa-home"></i>
                        
                            <span><Link to="/">  Accueil </Link></span>
                    </a>
                    <button className="cate-btn" title="Category List">
                        <i className="fas fa-list"></i>
                        <span>Pages</span>
                    </button>
                    <button className="cart-btn" title="Cartlist">
                        <i className="fas fa-shopping-basket"></i>
                        <span>Chariot</span>
                        <sup>{cartItems.length}</sup>
                    </button>
                    <a href="front/wishlist.html" title="Wishlist">
                        <i className="fas fa-heart"></i>
                        <span>wishlist</span>
                        <sup>0</sup>
                    </a>
                    <a href="front/compare.html" title="Compare List">
                        <i className="fas fa-random"></i>
                        <span>compare</span>
                        <sup>0</sup>
                    </a>
            </div>
            <Cart/>
            <script src="assets/vendor/bootstrap/jquery-1.12.4.min.js"></script>
            <script src="assets/vendor/bootstrap/popper.min.js"></script>
            <script src="assets/vendor/bootstrap/bootstrap.min.js"></script>
            <script src="assets/vendor/countdown/countdown.min.js"></script>
            <script src="assets/vendor/niceselect/nice-select.min.js"></script>
            <script src="assets/vendor/slickslider/slick.min.js"></script>
            <script src="assets/vendor/venobox/venobox.min.js"></script>
            <script src="assets/js/nice-select.js"></script>
            <script src="assets/js/countdown.js"></script>
            <script src="assets/js/accordion.js"></script>
            <script src="assets/js/venobox.js"></script>
            <script src="assets/js/slick.js"></script>
            <script src="assets/js/main.js"></script>
        </html>
    );
}
export default Dashboard;