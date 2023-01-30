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
                            <h2>Our Motive is to Provide Best for Those Who Deserve</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis exercitationem commodi aliquam necessitatibus vero reiciendis quaerat illo est fuga ea temporibus natus doloremque ipsum voluptas quod deserunt expedita reprehenderit pariatur quidem quisquam, recusandae animi non! Voluptas totam repudiandae rerum molestiae possimus quis numquam sapiente sunt architecto quisquam Aliquam odio optio</p>
                        </div>
                        <ul className="about-list">
                            <li>
                                <h3>34785</h3>
                                <h6>registered users</h6>
                            </li>
                            <li>
                                <h3>2623</h3>
                                <h6>per day visitors</h6>
                            </li>
                            <li>
                                <h3>189</h3>
                                <h6>total products</h6>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-img">
                            <img src="assets/images/about/01.jpg" alt="about"/>
                            <img src="assets/images/about/02.jpg" alt="about"/>
                            <img src="assets/images/about/03.jpg" alt="about"/>
                            <img src="assets/images/about/04.jpg" alt="about"/>
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
                                <img src="assets/images/testimonial/01.jpg" alt="testimonial"/>
                            </a>
                            <div className="testi-quote">
                                <i className="icofont-quote-left"></i>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit neque earum sapiente vitae obcaecati magnam doloribus magni provident ab ipsam sint dolores repellat inventore sequi temporibus natus.</p>
                                <h4>tahmina labonno</h4>
                                <h6>Former MD - joomtech.com</h6>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="testi-content">
                            <a className="testi-img" href="#">
                                <img src="assets/images/testimonial/02.jpg" alt="testimonial"/>
                            </a>
                            <div className="testi-quote">
                                <i className="icofont-quote-left"></i>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit neque earum sapiente vitae obcaecati magnam doloribus magni provident ab ipsam sint dolores repellat inventore sequi temporibus natus.</p>
                                <h4>miron mahmud</h4>
                                <h6>Senior Accountant - farmfresh.com</h6>
                            </div>
                        </div>
                    </li>
                </ul>
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