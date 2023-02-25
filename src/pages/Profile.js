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


function Profile() {

    //--------declarations

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
    const notifySuccess = () => toast.success("Vos étaient enregistrées");
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
            }
        })
    }, [dispatch, completeLoading])


    //----------upload file
    const uploadFile = async () => {
       
        if (!imageUpload) {
            updateUser();
            return 
        }
        const imageRef = sRef(storage, `products/${imageUpload.name + v4()}`);
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
        <html lang="en">
            <head>

                <meta charset="UTF-8" />
                <meta name="title" content="Tunisian Food" />
                <meta name="keywords" content="organic, food, shop, ecommerce, store, agriculture, vegetables, farm, grocery, natural, online store" />

                <title>Tunisian Food - Profile</title>

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
            </head>

            <body>
                <ToastContainer />
                <section class="inner-section single-banner" style={{ backgroundImage: "url(assets/images/profileBanner.jpg)", backgroundRepeat: "no-repeat", backgroundPosition: "center", }}>
                    <div class="container">
                        <h2>Modifier votre profile</h2>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/">Accueil</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">profile</li>
                        </ol>
                    </div>
                </section>

                <div >
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <form class="modal-form" onSubmit={(event) => event.preventDefault()}>
                                <div class="form-title">
                                    <h3>Modifier vos données</h3>

                                </div>
                                <div class="form-group">
                                    <label class="form-label">Votre photo  </label> <span> : </span>
                                    {loggedUser.photo!=undefined&&
                                    <img src={loggedUser.photo} style={{borderRadius:"50px",height:"100px"}} />
                                    }
                                    
                                    <input class="form-control" type="file"
                                        onChange={(event) => {
                                            setImageUpload(event.target.files[0]);
                                        }} />
                                </div>
                                <div class="form-group">
                                    <label class="form-label">Votre Nom</label>
                                    <input class="form-control" type="text" defaultValue={loggedUser.userName} onChange={handleNameChange} placeholder="Type your new name..." />
                                </div>
                                <div class="form-group">
                                    <label class="form-label">Pays</label>
                                    <select class="form-select" onChange={handleCountryChange} >
                                        {checkCountry(loggedUser)}
                                        <option value="France">France</option>
                                        <option value="Belgique">Belgique</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label class="form-label">Ville</label>
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
                                <div class="form-group">
                                    <label class="form-label">Adresse</label>
                                    <input class="form-control" type="text" defaultValue={loggedUser.adress} onChange={handleAdressChange} placeholder="Type exact adress..." />
                                </div>
                                <div class="form-group">
                                    <label class="form-label">Numéro de Téléphone</label>
                                    <input class="form-control" type="text" defaultValue={loggedUser.phone} onChange={handlePhoneChange} placeholder="Type your number..." />
                                </div>
                                <button class="form-btn" type="submit" onClick={() => uploadFile()} >save profile info</button>
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
        </html>
    );
}


export default Profile;