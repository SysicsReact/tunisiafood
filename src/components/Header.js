import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useLocation, NavLink, useNavigate } from "react-router-dom";
import {app, auth, db, logout, changeIsLoading,changeIsTesting,testLoading, GetCardDetails, RemoveRefCommand } from "../firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { SET_ACTIVE_USER,Remove_ACTIVE_USER } from "../redux/slice/authSlice";
import ShowOnLogin, { ShowOnLogOut } from "./hiddenLink";
import { useDispatch, useSelector } from "react-redux";
import { async } from "q";
import { doc, getDoc, addDoc, setDoc } from "@firebase/firestore";
import Loader from "../components/loader/Loader";
import Cart from "./Cart";
import { query, where, onSnapshot, documentId, updateDoc, collection } from "firebase/firestore";
import { selectCarTotalAmount, selectCarTotalQuantity } from "../redux/slice/cartSlice";
import { CALCULATE_TOTAL_QUANTITY, CALCULATE_SUBTOTAL, selectCartItems } from "../redux/slice/cartSlice";
import { selectWishItems } from "../redux/slice/wishSlice";
import { selectProducts } from "../redux/slice/productSlice";
import { getAnalytics } from "firebase/analytics";

const locations={}
function checkIfTrue(){
    var str=window.location.href.toLowerCase()
   var strsplit= str.split("/");
   //alert(strsplit[strsplit.length-1]);
   if(strsplit[strsplit.length-1]=="")
   {
    return true;
   }
   else{
    if ((strsplit[strsplit.length-1].includes("product"))) {
        return true;
    }
    if ((strsplit[strsplit.length-1].includes("result"))) {
        return true;
    }
    
    else{
        return false;
    }
   }
   
   
}
let x=0;
export function updatex(value)
{
    x=value;
}
const Header = () => {
    const [user] = useAuthState(auth);
    const[displayName,setDisplayName]=useState("");
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const [logUser, setLogUser] = useState({})
    const [isLoading, setIsLoading ] = useState(true);
    const[test, setTest]=useState(true)
    const [completeLoading,setCompleLoading]=useState(false)
    const [isLoggedIn,setIsloggin]=useState(false); 
    const[valueCardDetails,SetCardValueDetails]=useState(0); 
    const products = useSelector(selectProducts)
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
                    let url = window.location.href.toLowerCase();

                    if(!url.includes("checkoutsuccess") ){
                        RemoveRefCommand(true,uid);
                    }
                   
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
        if (value.length > 0) {
            setResult([]);
            let searchQuery = value.toLowerCase();
            let tempResult =[]
            for (const item in products) {
                if(products[item].searchTags){
                    for(const tag in products[item].searchTags)
                    {
                        let fruit = products[item].searchTags[tag];
                        if(fruit.includes(searchQuery)){
                            
                            if(tempResult.findIndex(x => x.id === products[item].id) == -1){
                                tempResult.push(products[item]);
                            }
                        }
                    }
                }
                setResult(tempResult)
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
                <Link to="/"> Déconnecter </Link> </button>
                <span><Link to="MyProfile"> Profile </Link></span>
                </>
            )
        } else {
            return (
                <span><Link to="/Login"> S'inscrire </Link></span>
            )
        }
    } 
    const view = async (id) => {
        navigate("/ProductItems", { state: { id: id } });
        setResult([]);
          };

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const firebaseAnalytics = getAnalytics(app);
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize',handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
          };
        }, []);
        const shouldHideDiv = windowWidth < 700;
    
        const keyWord = async () => {
            
              try {
                const docRef = await addDoc(collection(db, "search"), {
                  Keyword: value,
                });
                console.log("Document written with ID: ", docRef.id);
                localStorage.setItem('searchResults', JSON.stringify(result));
                navigate("/SearchResult");
              } catch (error) {
                console.error("Error adding document:", error);
              }
           
          };

          useEffect(() => {
            setResult([]);
            setValue('');
          }, [location.pathname]);
          
    return (  
        <>
            {(!completeLoading) &&<Loader/>}

            {isLoggedIn &&
            <aside className="nav-sidebar">
            <div className="nav-header">
                <a href=""><img src={window.location.origin +'/assets/images/cook.png'}   alt="Cook Tounsi"/></a>
                <button className="nav-close"><i className="icofont-close"></i></button>
            </div>
            <div className="nav-content">
               <div className="nav-profile">
                  
                    {logUser.photo!=undefined&&
                    <a className="nav-user" href=""><img src={logUser.photo} alt={displayName}/></a>
                    }
                    
                    <h4 className="nav-name"><a href="">{displayName}</a></h4>
                </div> 
                <ul className="nav-list">
                    <li>
                    <a className="nav-link" href="/MyProfile">
                        <i className="icofont-bag-alt"></i>Profile</a>
                    </li>
                    <li>
                    <a className="nav-link" href="/OrderHistory"><i className="icofont-page"></i>
                    Commandes</a>
                    </li>
                    <li>
                    <a className="nav-link" href="/Politics">
                        <i name="confidentialité" className="icofont-warning"></i>
                        confidentialité</a>
                    </li>
                    <li> 
                    <a className="nav-link" href="/" onClick={logout}>
                        <i className="icofont-logout"></i>Se déconnecter</a>
                    </li>
                </ul>
                <div className="nav-info-group">
                    <div className="nav-info">
                        <i className="icofont-ui-touch-phone"></i>
                        <p>
                            <small>Appelez-nous</small>
                            <a style={{color:'var(--primary-tshadow)'}} href="tel:+216 51 320 220">(+216) 51 320 220</a >
                        </p>
                    </div>
                    <div className="nav-info">
                        <i className="icofont-ui-email"></i>
                        <p>
                            <small>Envoyez-nous un email</small>
                            <span>contact@cooktounsi.com</span>
                        </p>
                    </div>
                </div>
                <div className="nav-footer">
                    <p>Tous droits réservés par <a href="">Cook Tounsi</a></p>
                </div>
            </div>

        </aside>}
        {!isLoggedIn &&
        <aside className="nav-sidebar">
            <div className="nav-header">
                <a href="#"><img src="assets/images/cook.png" alt="logo"/></a>
                <button className="nav-close"><i className="icofont-close"></i></button>
            </div>
            <div className="nav-content">
                <div className="nav-btn">
                    <a href="/Login" className="btn btn-inline">
                        <i className="fa fa-unlock-alt"></i>
                        <span>S'inscrire</span>
                    </a>
                </div>
                <div className="nav-info-group">
                    <div className="nav-info">
                        <i className="icofont-ui-touch-phone"></i>
                        <p>
                            <small>Appelez-nous</small>
                            <a style={{color:'var(--primary-tshadow)'}} href="tel:+216 51 320 220">(+216) 51 320 220</a>
                        </p>
                    </div>
                    <div className="nav-info">
                        <i className="icofont-ui-email"></i>
                        <p>
                            <small>Envoyez-nous un email</small>
                            <span>contact@cooktounsi.com</span>
                        </p>
                    </div>
                </div>
                <div className="nav-footer">
                    <p>Tous droits réservés par <a href="">Cook Tounsi</a></p>
                </div>
            </div>

        </aside>}
        <header className="header-part" >  
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
                            <img src="assets/images/cook.png" alt="Cook Tounsi" />
                        </Link>
                    </a>
                    {checkIfTrue()&&
                     <button className="header-src"><i className="fas fa-search"></i></button>
                    }
                     </div>
                    <a className="header-logo">
                        <Link to="/">
                            <img src="assets/images/cook.png" alt="logo" />
                        </Link>
                    </a>
                    {checkIfTrue()&&
                        <> 
                        <form className="header-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="dropdown">
                        <input type="text"  placeholder="Cherchez..." value={value} onChange={(e) => setValue(e.target.value)} />
                        <div className="rounded dropdown-content show">
                        {result.slice(0,5).map((result, id) => (
                        
                            <div className="" >
                        <a key={{id}} >
                                <img src={result.photo} className="mx-3 rounded" height="30" onClick={() => view(result.id)}/>
                                <span onClick={() => view(result.id)}>{result.name}</span> 
                        </a>
                        </div>
                        
                            ))
                        } </div>
                        
                    </div>
                    <button type="button" className="fas fa-search" onClick={() => keyWord()}></button>
                    </form>
                        </>
                    }
                    {!checkIfTrue()&&
                    <>
                    {shouldHideDiv ?null:
                    <form className="">
                <div className="">
                    <span style={{fontSize:"22px"}}>
                        Tout est une question de sens et de souvenirs d’enfance 
                    </span>
                </div>
                </form>}
                    </>
                    
                }
<div className="header-widget-group">
    <a href="" className="header-widget" hidden title="Compare List">
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
            <span ><Link to="/Login"> S'inscrire </Link></span>
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
            <Link to="/"> Déconnecter </Link> </button></li>
        </ul>
        </span>
    }


</li>
                </div>
            </div>
        </header>
            
            <div className="mobile-menu">
            <Link to="/"> <a  title="Home Page">
                        <i className="fas fa-home"></i>
                        
                            <span>  Accueil </span>
                    </a></Link>
                    <button className="cate-btn" title="Category List">
                        <i className="fas fa-list"></i>
                        <span>Pages</span>
                    </button>
                    <button className="cart-btn" title="Cartlist">
                        <i className="fas fa-shopping-basket"></i>
                        <span>Chariot</span>
                        <sup>{cartItems.length}</sup>
                    </button>
                   <Link to="/wishDetails"><a href="" title="Wishlist">
                        <i className="fas fa-heart"></i>
                        <span>wishlist</span>
                        <sup>{wishItems.length}</sup>
                    </a></Link> 
                   
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
        </>
    );
}
export default Header;