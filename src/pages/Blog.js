import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
function Blog()
{
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
            </head>
<body>
<div className="backdrop"></div>
               <a class="backtop fas fa-arrow-up" href="#"></a>
          <section class="inner-section single-banner" style={{ backgroundImage: "url(assets/images/spices.jpg)", backgroundRepeat: "no-repeat", backgroundPosition: "center", }}>
            <div class="container">
                <h2>blogs</h2>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to="/">Accueil</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">Tout les blogs</li>
                </ol>
            </div>
          </section>
          <section class="inner-section blog-standard">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="row">
                            <div class="col-lg-12">
                            </div>
                            <div class="col-lg-12">
                                <div class="blog-card">
                                    <div class="blog-media">
                                        <a class="blog-img" href="#">
                                            <img src="assets/images/blog/B1.png" alt="blog"/>
                                        </a>
                                    </div>
                                    <div class="blog-content">
                                        <ul class="blog-meta">
                                            <li>
                                                <i class="icofont-ui-calendar"></i>
                                                <span>31, 03, 2023</span>
                                            </li>
                                            <li>
                                                <i class="icofont-user-alt-3"></i>
                                                <span>Miron mahmud</span>
                                            </li>
                                        </ul>
                                        <h4 class="blog-title">
                                            <a href="blog-details.html">Santé et alimentation.</a>
                                        </h4>
                                        <p class="blog-desc">Santé et alimentation
La santé est directement liée à l'alimentation. Une alimentation saine est la base d'une bonne santé, car la nourriture est à la fois une maladie et une drogue. Chacun doit faire attention à la qualité des aliments qu'il consomme car la santé dépend des groupes alimentaires de base qui y pénètrent par l'alimentation. La santé du corps, et l'harmonie entre eux, dépend de l'équilibre des substances essentielles qu'il acquiert.</p>
                                        <a class="blog-btn" href="blog-details.html">
                                            <span>Lire</span>
                                            <i class="icofont-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                                <div class="blog-card">
                                    <div class="blog-media">
                                        <a class="blog-img" href="#">
                                            <img src="assets/images/blog/B2.jpg" alt="blog"/>
                                        </a>
                                    </div>
                                    <div class="blog-content">
                                        <ul class="blog-meta">
                                            <li>
                                                <i class="icofont-ui-calendar"></i>
                                                <span>25, 01, 2023</span>
                                            </li>
                                            <li>
                                                <i class="icofont-user-alt-3"></i>
                                                <span>Miron mahmud</span>
                                            </li>
                                        </ul>
                                        <h4 class="blog-title">
                                            <a href="blog-details.html">Avantages des amandes.</a>
                                        </h4>
                                        <p class="blog-desc">Amandes
L'amandier remonte au sud-ouest et à l'Asie centrale et est utilisé depuis environ 4000 av. Il existe deux types d'amandes, les amandes douces et les amandes amères selon le type d'arbre. Ceci est différent des amandes amères, qui contiennent une substance appelée acide cyanhydrique. Par conséquent, la consommation orale n'est pas considérée comme sûre. Cependant, ses noyaux ont été utilisés pour fabriquer des médicaments pour certains problèmes de santé tels que la toux, les convulsions et la toux.</p>
                                        <a class="blog-btn" href="blog-details.html">
                                            <span>Lire</span>
                                            <i class="icofont-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                                <div class="blog-card">
                                    <div class="blog-media">
                                        <a class="blog-img" href="#">
                                            <img src="assets/images/blog/B3.jpg" alt="blog"/>
                                        </a>
                                    </div>
                                    <div class="blog-content">
                                        <ul class="blog-meta">
                                            <li>
                                                <i class="icofont-ui-calendar"></i>
                                                <span>25, 01, 2023</span>
                                            </li>
                                            <li>
                                                <i class="icofont-user-alt-3"></i>
                                                <span>Alex Novak</span>
                                            </li>
                                        </ul>
                                        <h4 class="blog-title">
                                            <a href="blog-details.html">Ces aliments peuvent-ils être bénéfiques pour notre santé?</a>
                                        </h4>
                                        <p class="blog-desc">
                                        Bien que le domaine de la médecine continue de progresser et de se diversifier à bien des égards, les nutritionnistes et les experts de la santé continuent de vanter les bienfaits de certains aliments. 
                                        En fait, il a été démontré que manger sainement réduit le risque d'obésité, de maladies cardiovasculaires et même de certains types de cancer.
                                        Cependant, comprendre quels aliments 
                                        manger pour des avantages spécifiques peut parfois être difficile, c'est pourquoi Medical News Today a précédemment fourni une liste des 10 meilleurs aliments sains.</p>
                                        <a class="blog-btn" href="blog-details.html">
                                            <span>Lire</span>
                                            <i class="icofont-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="bottom-paginate">
                                    <p class="page-info"></p>
                                    <ul class="pagination">
                                        <li class="page-item">
                                            <a class="page-link" href="#">
                                                <i class="fas fa-long-arrow-alt-left"></i>
                                            </a>
                                        </li>
                                        <li class="page-item"><a class="page-link active" href="#">1</a></li>
                                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                        <li class="page-item">...</li>
                                        <li class="page-item"><a class="page-link" href="#">60</a></li>
                                        <li class="page-item">
                                            <a class="page-link" href="#">
                                                <i class="fas fa-long-arrow-alt-right"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-10 col-md-7 col-lg-4">
                        <div class="blog-widget">
                            <h3 class="blog-widget-title">Les Plus Populaires</h3>
                            <ul class="blog-widget-feed">
                                <li>
                                    <a class="blog-widget-media" href="#">
                                        <img src="assets/images/blog-widget/2.jpg" alt="blog-widget"/>
                                    </a>
                                    <h6 class="blog-widget-text">
                                        <a href="#">Découvrir les avantages des amandes.</a>
                                        <br></br>
                                        <span>25, 01, 2023</span>
                                    </h6>
                                </li>
                                <li>
                                    <a class="blog-widget-media" href="#">
                                        <img src="assets/images/blog-widget/1.png" alt="blog-widget"/>
                                    </a>
                                    <h6 class="blog-widget-text">
                                        <a href="#">Une alimentation saine est la base d'une bonne santé.</a>
                                        <span>31, 01, 2023</span>
                                    </h6>
                                </li>
                                <li>
                                    <a class="blog-widget-media" href="#">
                                        <img src="assets/images/blog-widget/3.jpg" alt="blog-widget"/>
                                    </a>
                                    <h6 class="blog-widget-text">
                                        <a href="#">Ces aliments peuvent-ils être bénéfiques pour notre santé?</a>
                                        <span>21, 01, 2023</span>
                                    </h6>
                                </li>
                            </ul>
                        </div>
                        <div class="blog-widget">
                            <h3 class="blog-widget-title">follow us</h3>
                            <ul class="blog-widget-social">
                                <li><a href="#" class="icofont-facebook"></a></li>
                                <li><a href="#" class="icofont-twitter"></a></li>
                                <li><a href="#" class="icofont-linkedin"></a></li>
                                <li><a href="#" class="icofont-pinterest"></a></li>
                                <li><a href="#" class="icofont-instagram"></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

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

export default Blog;