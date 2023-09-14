import React, { useEffect, useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import { auth, db, storage, changeIsLoading, changeIsTesting, testLoading } from "../firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { selectuserID } from '../redux/slice/authSlice'
import { ref as sRef } from 'firebase/storage';
import { getDoc, updateDoc, doc } from "firebase/firestore";
import {uploadBytes, getDownloadURL,} from "firebase/storage";
import { v4 } from "uuid";
import { ToastContainer, toast } from 'react-toastify';
import { Helmet } from "react-helmet";


function Profile() {
    const [user] = useAuthState(auth);
    const [username, setName] = useState({})
    const [loggedUser, setLoggedUser] = useState({})
    const [completeLoading, setCompleLoading] = useState(false)
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const [test, setTest] = useState(true)
    const userID = useSelector(selectuserID)
    const [newPhone, setPhone] = useState({ changeState: 0 });
    const [city, setCity] = useState({ changeState: 0 });;
    const [country, setCountry] = useState({ changeState: 0 });;
    const [adress, setAdress] = useState({ changeState: 0 });;
    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);
    const notifySuccess = () => toast.success("Vos données étaient enregistrées");
    const navigate = useNavigate();
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
                            setLoggedUser(docSnap.data())
                            setIsLoading(true);
                            changeIsLoading(true);
                            changeIsTesting(true);
                            setCompleLoading(testLoading())
                            localStorage.setItem("isCompleting", true);
                        }
                    })
                }
            }else{
                return navigate("/login");
            }
        })
    }, [dispatch, completeLoading])


    //----------upload file
    const uploadFile = async () => {
        if (!imageUpload) {
            updateUser();
            return 
        }
        const imageRef = sRef(storage, `users/${imageUpload.name + v4()}`);
//to do add loader here
        uploadBytes(imageRef, imageUpload).then(async (snapshot) => {
            await getDownloadURL(snapshot.ref).then((url) => {
                const washingtonRef = doc(db, "users", user.uid);
                updateDoc(washingtonRef, {
                    photo: url
                }).then(function()
                {
                    updateUser()
                }
                );
                if(url){
                }
            });
            
        })
        
    }
    //--------update user    
    const updateUser = async (e) => {
        try{
            if (city.changeState == 1) {
                const washingtonRef = doc(db, "users", user.uid);
                await updateDoc(washingtonRef, {
                    city: city.City
                });
            }
            if (username.changeState == 1) {
                const washingtonRef = doc(db, "users", user.uid);
                await updateDoc(washingtonRef, {
                    userName: username.username
                });
            }
            if (country.changeState == 1) {
                const washingtonRef = doc(db, "users", user.uid);
                await updateDoc(washingtonRef, {
                    country: country.country
                });
            }
            if (newPhone.changeState == 1) {
                const washingtonRef = doc(db, "users", user.uid);
                await updateDoc(washingtonRef, {
                    phone: newPhone.phone
                });
            }
            if (adress.changeState == 1) {
                const washingtonRef = doc(db, "users", user.uid);
                await updateDoc(washingtonRef, {
                    adress: adress.adress
                });
            }
            notifySuccess()
            window.location.reload(false);
        }catch (e) {
            alert(e)
          }
    };
    //-----handling changes    
    function handleNameChange(event) {
        setName({
            username: event.target.value,
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
    //--------html conditions
    function checkCity(loggedUser) {
        if (loggedUser.city) {
            return (
                <><option selected disabled hidden>{loggedUser.city}</option></>
            )
        } else {
            return (
                <><option selected disabled hidden>Choisir votre ville</option></>
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
                <><option selected disabled hidden>Choisir votre pays</option></>
            )
        }
    }


    return (
        <>
            <head>
                <Helmet>
                <meta charSet="UTF-8" />
                <title>Cook Tounsi - Profile</title>
                <meta name="name" content="Cook Tounsi" />
                <meta name="title" content="Cook Tounsi: vente de vos plats tunisiens préférés 2023" />
                <meta name="keywords" content="cuisine, Tunisie, cuisine tunisienne, 
                traditionnel, plats, épices, patisserie, healthy, lifestyle, recettes,
                 food, livraison, ماكلة تونسية , أطباق , معلبة, " />
                <meta property="og:title" content="Cook Tounsi - Profile" />
                <meta property="og:image" content="assets/images/about/1.jpg" />
                </Helmet>
            
                <link rel="icon" href="assets/images/favicon.png" />
                <link rel="stylesheet" href="assets/fonts/flaticon/flaticon.css" />
                <link rel="stylesheet" href="assets/fonts/icofont/icofont.min.css" />
                <link rel="stylesheet" href="assets/fonts/fontawesome/fontawesome.min.css" />
                <link rel="stylesheet" href="assets/vendor/venobox/venobox.min.css" />
                <link rel="stylesheet" href="assets/vendor/slickslider/slick.min.css" />
                <link rel="stylesheet" href="assets/vendor/niceselect/nice-select.min.css" />
                <link rel="stylesheet" href="assets/vendor/bootstrap/bootstrap.min.css" />
                <link rel="stylesheet" href="assets/css/main.css" />
                <link rel="stylesheet" href="assets/css/profile.css" />
                <link rel="stylesheet" href="assets/css/home-classic.css" />
            </head>
            <body>
                <ToastContainer />
                <div className="backdrop"></div>
               <a className="backtop fas fa-arrow-up" href="#"></a>
                <section className="inner-section single-banner" style={{ backgroundImage: "url(assets/images/profileBanner.jpg)", backgroundRepeat: "no-repeat", backgroundPosition: "center", }}>
                    <div className="container">
                        <h2>Modifier votre profile</h2>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Accueil</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">profile</li>
                        </ol>
                    </div>
                </section>
                <div >
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <form className="modal-form" onSubmit={(event) => event.preventDefault()}>
                                <div className="form-title">
                                    <h3>Modifier vos données</h3>

                                </div>
                                <div className="form-group">
                                    <label className="form-label">Votre photo  </label> <span> : </span>
                                    {loggedUser.photo!=undefined&&
                                    <img src={loggedUser.photo} style={{borderRadius:"50px",height:"100px"}} />
                                    }
                                    
                                    <input className="form-control" type="file"
                                        onChange={(event) => {
                                            setImageUpload(event.target.files[0]);
                                        }} />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Votre Nom</label>
                                    <input className="form-control" type="text" defaultValue={loggedUser.userName} onChange={handleNameChange} placeholder="Type your new name..." />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Pays</label>
                                    <select className="form-select" onChange={handleCountryChange} >
                                        {checkCountry(loggedUser)}
                                        <option value="France">France</option>
                                        <option value="Belgique">Belgique</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Ville</label>
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
                                <div className="form-group">
                                    <label className="form-label">Adresse</label>
                                    <input className="form-control" type="text" defaultValue={loggedUser.adress} onChange={handleAdressChange} placeholder="Votre adresse..." />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Numéro de Téléphone</label>
                                    <input className="form-control" type="text" defaultValue={loggedUser.phone} onChange={handlePhoneChange} placeholder="Téléphone..." />
                                </div>
                                <button className="btn btn-outline" type="submit" onClick={() => uploadFile()} >Sauvegarder</button>
                            </form>
                        </div>
                    </div>
                </div>

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

            </body>
        </>
    );
}


export default Profile;