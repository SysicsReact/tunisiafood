import React from "react";
import { Link,  } from "react-router-dom";


function About() {


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
                <link rel="stylesheet" href="assets/css/orderlist.css" />
                <link rel="stylesheet" href="assets/css/about.css"/>
            </head>

            <body>
                <section className="inner-section single-banner" style={{ backgroundImage: "url(assets/images/profileBanner.jpg)", backgroundRepeat: "no-repeat", backgroundPosition: "center", }}>
                    <div className="container">
                        <h2>About Us</h2>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">About</li>
                        </ol>
                    </div>
                </section>
            <section className="inner-section about-company">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-content">
                            <h2>Notre objectif est de fournir le meilleur pour ceux qui le m??ritent.</h2>
                            <p>Pour tout est une question de sens et de souvenirs d???enfance de r??unions de famille. L???odeur des ??pices fra??ches, le go??t des produits typiques, l???une de nos gourmandises sp??ciales et m??me, le son des festins bruyants partag??s avec nos proches. Vous l???aurez compris, nous partageons l???amour comme nous partageons la nourriture : de la mani??re la plus authentique, mais toujours avec une touche locale.</p>
                        </div>
                        <ul className="about-list">
                            <li>
                                <h3>1785</h3>
                                <h6>Clients fid??les</h6>
                            </li>
                            <li>
                                <h3>5623</h3>
                                <h6>Visiteurs/ mois</h6>
                            </li>
                            <li>
                                <h3>189</h3>
                                <h6>Produits divers</h6>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-img">
                            <img src="assets/images/about/1.jpg" alt="about"/>
                            <img src="assets/images/about/2.jpg" alt="about"/>
                            <img src="assets/images/about/4.jpg" alt="about"/>
                            <img src="assets/images/about/5.jpg" alt="about"/>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            <section className="inner-section about-testimonial">
            <div className="container">
                <ul className="testi-slider slider-arrow">
                    <li>
                        <div className="testi-content">
                            <a className="testi-img" href="#">
                                <img src="assets/images/about/01.jpg" alt="testimonial"/>
                            </a>
                            <div className="testi-quote">
                                <i className="icofont-quote-left"></i>
                                <p>Tout ce que j'ai achet?? ??tait exceptionnel. L'entreprise est vraiment fiable et rapide, je donnerais 5/5 ??toiles pour le go??t et 5 autres pour le service.</p>
                                <h4>Maryam Abbassi</h4>
                                <h6>Assisstante financi??re</h6>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            </section>
        <section class="about-choose">
            <div class="container">
                <div class="row">
                    <div class="col-11 col-md-9 col-lg-7 col-xl-6 mx-auto">
                        <div class="section-heading">
                            <h2>Pourquoi les consommateurs nous choisissent</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="choose-card">
                            <div class="choose-icon">
                                <i class="icofont-fruits"></i>
                            </div>
                            <div class="choose-text">
                                <h4>100% aliments et ingr??dients frais </h4>
                                <p>
Nous croyons que notre application cons??quente et continue du principe ?? la qualit?? d'abord ?? est le secret de notre r??ussite.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="choose-card">
                            <div class="choose-icon">
                                <i class="icofont-vehicle-delivery-van"></i>
                            </div>
                            <div class="choose-text">
                                <h4>
    Livraison rapide</h4>
                                <p>A partir de la r??ception de la demande d???achat, nous respectons les d??lais d??finis. Nous assurons la livraison de tout les produits,dans des courtes d??lais o?? que vous soyez.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="choose-card">
                            <div class="choose-icon">
                                <i class="icofont-loop"></i>
                            </div>
                            <div class="choose-text">
                                <h4>convivialit?? et s??curit?? des donn??es</h4>
                                <p>Nous faisons de la commande de nourriture une exp??rience agr??able pour nos d??taillants et nos clients.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="choose-card">
                            <div class="choose-icon">
                                <i class="icofont-support"></i>
                            </div>
                            <div class="choose-text">
                                <h4>
??quipe d'assistance instantan??e</h4>
                                <p>L'assistance via messagerie instantan??e. Veuillez vous identifier pour utiliser la messagerie instantan??e avec un membre de l'??quipe d'assistance.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="news-part" style={{ backgroundImage: "url(assets/images/bann.jpg)", backgroundRepeat: "no-repeat", backgroundPosition: "center", borderRadius: "10px", }}>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-5 col-lg-6 col-xl-7">
                        <div class="news-text">
                            <h2>Get 20% Discount for Subscriber</h2>
                            <p>Lorem ipsum dolor consectetur adipisicing accusantium</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

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

export default About;