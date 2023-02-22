import React, { useState } from "react";
import { Link } from "react-router-dom";
import Intro from '../components/Intro';
import { serverTimestamp } from "firebase/firestore";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';
import { db } from "../firebase.config";
import { collection, addDoc } from "firebase/firestore";

function Contact() {

    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const notifySuccess = () => toast.success("Message sent with success");
    const notifyError = (err) => toast.error(err);

    const contactUs = async () => {
        const docRef = await addDoc(collection(db, "contacts"), {
            name: name,
            email: email,
            subject: subject,
            message: message,
            timestamp: serverTimestamp()
        }).then(() => {
            notifySuccess();

        }).catch((error) => {
            notifyError(error.message);
        });;
    }
    return (
        <html lang='en'>
            <head>
                <meta charset="UTF-8" />
                <meta name="name" content="Tunisian Food" />
                <meta name="title" content="Tunisian Food - ecommerce " />
                <title>Accueil - Tunisian Food</title>
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
                <link rel="stylesheet" href="assets/css/slider.css" />
                <link rel="stylesheet" href="assets/css/contact.css" />
            </head>
            <body>
            <ToastContainer />

                <div className="backdrop"></div>
                <a class="backtop fas fa-arrow-up" href="#"></a>
                <section class="inner-section single-banner" style={{ backgroundImage: "url(assets/images/spices.jpg)", backgroundRepeat: "no-repeat", backgroundPosition: "center", }}>
                    <div class="container">
                        <h2>Contact</h2>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/">Accueil</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">Contactez-Nous</li>
                        </ol>
                    </div>
                </section>
                <section class="inner-section contact-part">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 col-lg-4">
                                <div class="contact-card">
                                    <i class="icofont-location-pin"></i>
                                    <h4>Plus D'informations</h4>
                                    <p>Découvrir Notre Concept:</p>
                                   <Link to={"/Concept"}> <p style={{color:"grey"}}>Par Ici</p></Link>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <div class="contact-card active">
                                    <i class="icofont-phone"></i>
                                    <h4>Appelez-Nous</h4>
                                    <p>
                                        <a href="#">+216 50 450 960</a>
                                        <a href="#">+216 50 450 960</a>
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <div class="contact-card">
                                    <i class="icofont-email"></i>
                                    <h4>Support technique</h4>
                                    <p>
                                        <a href="#">contact@example.com</a>
                                        <a href="#">info@example.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <h4>RESTONS EN CONTACT</h4>
                        <br></br>
                        <div class="row">
                            <div class="col-lg-6">
                                <form class="contact-form">
                                    <h4>Veuillez remplir le formulaire ci-dessous pour nous contacter:</h4>
                                    <div class="form-group">
                                        <div class="form-input-group">
                                            <input class="form-control" type="text" value={name}
                                                onChange={(e) => setName(e.target.value)} placeholder="Votre Prénom" />
                                            <i class="icofont-user-alt-3"></i>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="form-input-group">
                                            <input class="form-control" type="text" value={email}
                                                onChange={(e) => setEmail(e.target.value)} placeholder="Votre Email" />
                                            <i class="icofont-email"></i>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="form-input-group">
                                            <input class="form-control" type="text" value={subject}
                                                onChange={(e) => setSubject(e.target.value)} placeholder="Sujet" />
                                            <i class="icofont-book-mark"></i>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="form-input-group">
                                            <textarea class="form-control" value={message}
                                                onChange={(e) => setMessage(e.target.value)} placeholder="Votre Message"></textarea>
                                            <i class="icofont-paragraph"></i>
                                        </div>
                                    </div>
                                    <button onClick={() => contactUs()} type="submit" class="form-btn-group">
                                        <i class="fas fa-envelope"></i>
                                        <span>Envoyer</span>
                                    </button>
                                </form>
                            </div>
                        </div>
                        <br></br>
                        <div class="row">
                           <div class="col-sm-6 col-md-6 col-lg-3">
                           <Link to="/ShopProduct"> <div class="branch-card">
                                    <img src="assets/images/product/P19.jpg" alt="branch" />
                                    <div class="branch-overlay">
                                        <h3>Tout les produits</h3>
                                    </div>
                                </div></Link>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-3">
                            <Link to="/Blog">  <div class="branch-card">
                                    <img src="assets/images/B1.png" alt="branch" />
                                    <div class="branch-overlay">
                                        <h3>Les Blogs</h3>
                                    </div>
                                </div></Link>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-3">
                            <Link to="/Blog">  <div class="branch-card">
                                    <img src="assets/images/product/P2.jpg" alt="branch" />
                                    <div class="branch-overlay">
                                        <h3>Recettes</h3>
                                    </div>
                                </div></Link>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-3">
                            <Link to="/OrderHistory"> <div class="branch-card">
                                    <img src="assets/images/product/P13.jpg" alt="branch" />
                                    <div class="branch-overlay">
                                        <h3>Vos Achats</h3>
                                    </div>
                                </div></Link>
                            </div>
                        </div>
                    </div>
                </section>
                <Intro />

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
    )

}

export default Contact;