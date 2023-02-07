import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth, db, storage } from "../firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
import { ref, onValue, update } from "firebase/database";
import { ref as sRef } from 'firebase/storage';
import { query, where, onSnapshot, documentId, updateDoc, doc, collection } from "firebase/firestore";


import {

    uploadBytes,
    getDownloadURL,

} from "firebase/storage";
import { v4 } from "uuid";

import { ToastContainer, toast } from 'react-toastify';


function Profile() {

    //--------declarations

    const [user] = useAuthState(auth);
    var uid = user.uid
    const [username, setName] = useState({})
    const [loggedUser, setLoggedUser] = useState({})
    const [newPhone, setPhone] = useState({ changeState: 0 });
    const [city, setCity] = useState({ changeState: 0 });;
    const [country, setCountry] = useState({ changeState: 0 });;
    const [adress, setAdress] = useState({ changeState: 0 });;
    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);
    const notifySuccess = () => toast.success("User updated with sucess");

    //-------get user by ID

    useEffect(() => {

        const q = query(
            collection(db, "users"),
            where(documentId(), "==", uid)
        );
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                setLoggedUser(doc.data());
            });
        });
    }, [loggedUser]);


    //----------upload file

    const uploadFile = async () => {
        if (!imageUpload) {
            return updateUser();
        }
        const imageRef = sRef(storage, `products/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then(async (snapshot) => {
            await getDownloadURL(snapshot.ref).then((url) => {
                const washingtonRef = doc(db, "users", user.uid);
                updateDoc(washingtonRef, {
                    photo: url
                });
            });
        });
        updateUser()
    }

    //--------update user    

    const updateUser = async (e) => {

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
                <><option selected disabled hidden>Choose City</option></>
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
                <><option selected disabled hidden>Choose country</option></>
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
                        <h2>Edit profile</h2>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">profile</li>
                        </ol>
                    </div>
                </section>

                <div >
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <form class="modal-form" onSubmit={(event) => event.preventDefault()}>
                                <div class="form-title">
                                    <h3>Edit profile info</h3>

                                </div>
                                <div class="form-group">
                                    <label class="form-label">profile image</label>
                                    <img src={loggedUser.photo} height="200" />
                                    <input class="form-control" type="file"
                                        onChange={(event) => {
                                            setImageUpload(event.target.files[0]);
                                        }} />
                                </div>
                                <div class="form-group">
                                    <label class="form-label">Name</label>
                                    <input class="form-control" type="text" defaultValue={loggedUser.userName} onChange={handleNameChange} placeholder="Type your new name..." />
                                </div>
                                <div class="form-group">
                                    <label class="form-label">Country</label>
                                    <select class="form-select" onChange={handleCountryChange} >
                                        {checkCountry(loggedUser)}
                                        <option value="France">France</option>
                                        <option value="Belgique">Belgique</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label class="form-label">City</label>
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
                                    <label class="form-label">Adress</label>
                                    <input class="form-control" type="text" defaultValue={loggedUser.adress} onChange={handleAdressChange} placeholder="Type exact adress..." />
                                </div>
                                <div class="form-group">
                                    <label class="form-label">Phone Number</label>
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