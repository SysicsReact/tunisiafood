import React, { useState } from "react";
import { Link } from "react-router-dom";
import Intro from '../components/Intro';
import { serverTimestamp } from "firebase/firestore";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';
import {  db } from "../firebase.config";
import { collection, addDoc } from "firebase/firestore";

function Contact()
{

    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const notifySuccess = () => toast.success("Message sent with success");
    const notifyError = (err) => toast.success(err);

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
return(
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
                <link rel="stylesheet" href="assets/css/contact.css"/>
            </head>
<body>
<div className="backdrop"></div>
               <a class="backtop fas fa-arrow-up" href="#"></a>
          <section class="inner-section single-banner" style={{ backgroundImage: "url(assets/images/spices.jpg)", backgroundRepeat: "no-repeat", backgroundPosition: "center", }}>
            <div class="container">
                <h2>blogs</h2>
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
                            <h4>head office</h4>
                            <p>1Hd- 50, 010 Avenue, NY 90001 United States</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="contact-card active">
                            <i class="icofont-phone"></i>
                            <h4>phone number</h4>
                            <p>
                                <a href="#">009-215-5596 <span>(toll free)</span></a>
                                <a href="#">009-215-5595</a>
                            </p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="contact-card">
                            <i class="icofont-email"></i>
                            <h4>Support mail</h4>
                            <p>
                                <a href="#">contact@example.com</a>
                                <a href="#">info@example.com</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="contact-map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.3406974350205!2d90.48469931445422!3d23.663771197998262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b0d5983f048d%3A0x754f30c82bcad3cd!2sJalkuri%20Bus%20Stop!5e0!3m2!1sen!2sbd!4v1605354966349!5m2!1sen!2sbd" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <form class="contact-form">
                            <h4>Drop Your Thoughts</h4>
                            <div class="form-group">
                                <div class="form-input-group">
                                    <input class="form-control" type="text" value={name}
                  onChange={(e) => setName(e.target.value)} placeholder="Your Name"/>
                                    <i class="icofont-user-alt-3"></i>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="form-input-group">
                                    <input class="form-control" type="text" value={email}
                  onChange={(e) => setEmail(e.target.value)} placeholder="Your Email"/>
                                    <i class="icofont-email"></i>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="form-input-group">
                                    <input class="form-control" type="text" value={subject}
                  onChange={(e) => setSubject(e.target.value)} placeholder="Your Subject"/>
                                    <i class="icofont-book-mark"></i>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="form-input-group">
                                    <textarea class="form-control" value={message}
                  onChange={(e) => setMessage(e.target.value)} placeholder="Your Message"></textarea>
                                    <i class="icofont-paragraph"></i>
                                </div>
                            </div>
                            <button onClick={() => contactUs()} type="submit" class="form-btn-group">
                                <i class="fas fa-envelope"></i>
                                <span>send message</span>
                            </button>
                        </form>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6 col-md-6 col-lg-3">
                        <div class="branch-card">
                            <img src="assets/images/branch/01.jpg" alt="branch"/>
                            <div class="branch-overlay">
                                <h3>dhaka</h3>
                                <p>kawran bazar, 1100 east tejgaon, dhaka.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3">
                        <div class="branch-card">
                            <img src="assets/images/branch/02.jpg" alt="branch"/>
                            <div class="branch-overlay">
                                <h3>Narayanganj</h3>
                                <p>west jalkuri, 1420 shiddirganj, narayanganj.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3">
                        <div class="branch-card">
                            <img src="assets/images/branch/03.jpg" alt="branch"/>
                            <div class="branch-overlay">
                                <h3>chandpur</h3>
                                <p>east lautuli, 2344 faridganj, chandpur.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3">
                        <div class="branch-card">
                            <img src="assets/images/branch/04.jpg" alt="branch"/>
                            <div class="branch-overlay">
                                <h3>noakhli</h3>
                                <p>begumganj, 3737 shonaimuri, noakhli.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Intro/>

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