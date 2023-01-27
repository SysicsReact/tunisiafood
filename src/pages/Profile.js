import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db, logout } from "../firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
import {  updateProfile } from "firebase/auth";
import { getDatabase, ref, child, get,onValue,update } from "firebase/database";

function Profile() {
    const [user] = useAuthState(auth);
    const [newName, setName] = useState('');
    const [newEmail, setEmail] = useState('');
    const [newPhone, setPhone] = useState('');
    var loggedUser;

    const starCountRef = ref(db, 'users/' + user.uid );
    onValue(starCountRef, (snapshot) => {
       loggedUser = snapshot.val();
    });
   
  

    const updateUser =({ newName, newEmail,newPhone }) => {
        console.log(newName)
       update(ref(db, `users/${user.uid}`), {
        username: newName,
        email: newEmail,

        phone: newPhone,

    
      });
      
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
                            <form class="modal-form"  onSubmit={(event) => event.preventDefault()}>
                                <div class="form-title">
                                    <h3>Edit profile info</h3>

                                </div>
                                <div class="form-group">
                                    <label class="form-label">profile image</label>
                                    <img src={loggedUser.photo}/>
                                    <input class="form-control" type="file" />
                                </div>
                                <div class="form-group">
                                    <label class="form-label">name: </label>
                                    <label class="form-label">{loggedUser.name}</label>


                                    <input class="form-control" type="text" value={newName}   onChange={(e) => setName(e.target.value)}   placeholder="Type your new name..." />
                                </div>
                                <div class="form-group">
                                    <label class="form-label">email: </label>
                                    <label class="form-label">{loggedUser.email}</label>


                                    <input class="form-control" type="email"  value={newEmail} onChange={(e) => setEmail(e.target.value)} placeholder="Type your new email..."  /></div>
                                <div class="form-group">
                                    <label class="form-label">Country</label>
                                    <select class="form-select">
                                        <option selected>choose Country</option>
                                        <option value="primary">France</option>
                                        <option value="secondary">Belgique</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label class="form-label">City</label>
                                    <select class="form-select">
                                        <option selected>Choose City</option>
                                        <option value="primary">Paris</option>
                                        <option value="secondary">Lyon</option>
                                        <option value="secondary">Marseille</option>
                                        <option value="secondary">Toulouse</option>
                                        <option value="primary">Lille</option>
                                        <option value="secondary">Nice</option>
                                        <option value="secondary">Nantes</option>
                                        <option value="secondary">Strasbourg</option>
                                        <option value="primary">Rennes</option>
                                        <option value="secondary">Grenoble</option>
                                        <option value="secondary">Rouen</option>
                                        <option value="secondary">Toulon</option>
                                        <option value="secondary">Montpelier</option>
                                        <option value="primary">Douai et Lens</option>
                                        <option value="secondary">Avignon</option>
                                        <option value="secondary">Saint-Etienne</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label class="form-label">Phone Number</label>
                                    <span>{loggedUser.phone}</span>

                                    <input class="form-control" type="text" value={newPhone} onChange={(e) => setPhone(e.target.value)}   placeholder="Type your number..." />
                                </div>
                                <button class="form-btn"   onClick={()=>updateUser(newName,newEmail,newPhone)}>save profile info</button>
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