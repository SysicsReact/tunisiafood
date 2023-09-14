import React, { useState } from "react";
import { Link } from "react-router-dom";
import Intro from '../components/Intro';
import { serverTimestamp } from "firebase/firestore";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';
import { db } from "../firebase.config";
import { collection, addDoc } from "firebase/firestore";
import { Helmet } from 'react-helmet';

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
        });
    }
    return (
    <>
        <Helmet>
    <title>Contactez-nous</title>
    <meta charSet="UTF-8" />
    <meta name="name" content="Cook Tounsi" />
    <meta name="description" content="Cook Tounsi: Conactez-nous" />
    <meta name="keywords" content="cuisine, Tunisie, cuisine tunisienne, 
        traditionnel, plats, épices, patisserie, healthy, lifestyle, recettes,
            food, livraison, ماكلة تونسية , أطباق , معلبة, "  />
    <meta property="og:title" content="Cook Tounsi - Contactez-nous" />
    <meta property="og:image" content="assets/images/contact-us-banner.jpg" />
        </Helmet>
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
                                    <Link to={"/Concept"} style={{color:'grey'}}> <p>Par Ici:</p>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="contact-card active">
                                    <i className="icofont-phone"></i>
                                    <h4>Appelez-Nous</h4>
                                    <p>
                                    <a style={{color:'var(--primary-tshadow)'}} href="tel:+216 51 320 220">(+216) 51 320 220</a >
                                        
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="contact-card">
                                    <i className="icofont-email"></i>
                                    <h4>Support technique</h4>
                                    <p>
                                        <a href="/">contact@cooktounsi.com</a>
                                        
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
                                    <img src="assets/images/product/P2.jpeg" alt="branch" />
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
            </>
        
    )

}

export default Contact;