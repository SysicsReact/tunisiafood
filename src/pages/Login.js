import React from "react";

class Login extends React.Component{
render() {
return (
 <html lang="en">
 <head>
     <meta charset="UTF-8"/>
     <meta name="name" content="Tunisian Food"/>
     <meta name="title" content="Tunisian Food"/>
     <title>Tunisian Food</title>
     <link rel="icon" href="assets/images/favicon.png"/>
<link rel="stylesheet" href="assets/fonts/flaticon/flaticon.css"/>
<link rel="stylesheet" href="assets/fonts/icofont/icofont.min.css"/>
<link rel="stylesheet" href="assets/fonts/fontawesome/fontawesome.min.css"/>
<link rel="stylesheet" href="assets/vendor/venobox/venobox.min.css"/>
<link rel="stylesheet" href="assets/vendor/slickslider/slick.min.css"/>
<link rel="stylesheet" href="assets/vendor/niceselect/nice-select.min.css"/>
<link rel="stylesheet" href="assets/vendor/bootstrap/bootstrap.min.css"/>
<link rel="stylesheet" href="assets/css/main.css"/>
<link rel="stylesheet" href="assets/css/user-auth.css"/>
 </head>
 <body>
        <section className="user-form-part">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-10 col-md-12 col-lg-12 col-xl-10">
                        <div className="user-form-logo">
                         <img src="assets/images/logo.png" alt="logo"/>
                        </div>
                        <div className="user-form-card">
                            <div className="user-form-title">
                                <h2>welcome!</h2>
                                <p>Use your credentials to access</p>
                            </div>
                            <div className="user-form-group">
                                <ul className="user-form-social">
                                    <li><i className="fab fa-facebook-f"></i>login with facebook</li>
                                    <li><i className="fab fa-twitter"></i>login with twitter</li>
                                    <li><i className="fab fa-google"></i>login with google</li>
                                    <li><i className="fab fa-instagram"></i>login with instagram</li>
                                </ul>
                                <div className="user-form-divider">
                                    <p>or</p>
                                </div>
                                <form className="user-form">
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Enter your email"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Enter your password"/>
                                    </div>
                                    <div className="form-check mb-3">
                                        <input className="form-check-input" type="checkbox" value="" id="check"/>
                                        <label className="form-check-label" for="check">Remember Me</label>
                                    </div>
                                    <div className="form-button">
                                        <button type="submit">login</button>
                                        <p>Forgot your password?<a href="front/reset-password.html">reset here</a></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="user-form-remind">
                            <p>Don't have any account?<a href="front/register.html">register here</a></p>
                        </div>
                        <div className="user-form-footer">
                            <p>TunisianFood | &COPY; Copyright by TunisianFood</p>
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
}
export default Login;