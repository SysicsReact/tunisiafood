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
    const notifySuccess = () => toast.success("Nous avons réçu votre message");
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
            <meta charSet="UTF-8" />
          <meta name="name" content="Cook Tounsi" />
        <meta name="title" content="Cook Tounsi: vente de vos plats tunisiens préférés 2023" />
        <meta name="keywords" content="cuisine, Tunisie, cuisine tunisienne, 
        traditionnel, plats, épices, patisserie, healthy, lifestyle, food,  " />
        <title>Contact - Cook Tounsi</title>
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
            <ToastContainer/>

                <div className="backdrop"></div>
                <a className="backtop fas fa-arrow-up" href="#"></a>
                <section className="inner-section single-banner" style={{ backgroundImage: "url(assets/images/contact-us-banner.jpg)", backgroundRepeat: "no-repeat", backgroundPosition: "center", }}>
                    <div className="container">
                        <h2>Contact</h2>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Accueil</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Contactez-Nous</li>
                        </ol>
                    </div>
                </section>
                <section className="inner-section contact-part">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-4">
                                <div className="contact-card">
                                    <i className="icofont-location-pin"></i>
                                    <h4>Plus D'informations</h4>
                                    <p>Découvrir Notre Concept:</p>
                                   <Link to={"/Concept"}> <p style={{color:"grey"}}>Par Ici</p></Link>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="contact-card active">
                                    <i className="icofont-phone"></i>
                                    <h4>Appelez-Nous</h4>
                                    <p>
                                        <a href="#">+216 50 450 960</a>
                                        <a href="#">+216 50 450 960</a>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="contact-card">
                                    <i className="icofont-email"></i>
                                    <h4>Support technique</h4>
                                    <p>
                                        <a href="#">contact@cooktounsi.com</a>
                                        <a href="#">info@cooktounsi.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <form className="modal-form">
                                <div className="form-title">
                                    <h3>Dites-nous vos pensées</h3>
                                </div>
                                <div className="form-group">
                                    <input className="form-control" type="text" value={name}
                                    onChange={(e) => setName(e.target.value)} placeholder="Votre Prénom" />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" type="text" value={email}
                                    onChange={(e) => setEmail(e.target.value)} placeholder="Votre Email" />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" type="text" value={subject}
                                    onChange={(e) => setSubject(e.target.value)} placeholder="Sujet"/>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" type="text" value={message}
                                    onChange={(e) => setMessage(e.target.value)} placeholder="Votre Message">
                                    </textarea>
                                </div>
                                <button className="form-btn-group" type="submit" onClick={() => contactUs()}>
                                <i className="fas fa-envelope"></i>
                                <span>Envoyer</span>
                                </button>
                            </form>
                        </div>
                    </div>
                        <div className="row">
                           <div className="col-sm-6 col-md-6 col-lg-3">
                           <Link to="/ShopProduct"> <div className="branch-card">
                                    <img src="assets/images/product/P19.jpg" alt="branch" />
                                    <div className="branch-overlay">
                                        <h3>Tout les produits</h3>
                                    </div>
                                </div></Link>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-3">
                            <Link to="/Blog">  <div className="branch-card">
                                    <img src="assets/images/B1.png" alt="branch" />
                                    <div className="branch-overlay">
                                        <h3>Les Blogs</h3>
                                    </div>
                                </div></Link>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-3">
                            <Link to="/Blog">  <div className="branch-card">
                                    <img src="assets/images/product/P2.jpg" alt="branch" />
                                    <div className="branch-overlay">
                                        <h3>Recettes</h3>
                                    </div>
                                </div></Link>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-3">
                            <Link to="/OrderHistory"> <div className="branch-card">
                                    <img src="assets/images/product/P13.jpg" alt="branch" />
                                    <div className="branch-overlay">
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