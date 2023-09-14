import React, { useEffect, useState } from "react";
import { Link, redirect } from "react-router-dom";
import { auth, db, changeIsLoading, changeIsTesting, testLoading } from "../firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux'
import { selectIsLoggedIn, selectuserID } from '../redux/slice/authSlice'
import { useNavigate } from "react-router-dom";
import { doc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { getDoc } from "@firebase/firestore";
import { Helmet } from "react-helmet";

function MyProfile() {
    const [user] = useAuthState(auth);
    const [loggedUser, setLoggedUser] = useState({})
    const [completeLoading, setCompleLoading] = useState(false)
    const issignIN = useSelector(selectIsLoggedIn);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const [test, setTest] = useState(true)
    const userID = useSelector(selectuserID)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                if (uid) {
                    const docRef = doc(db, "users", uid);
                    getDoc(docRef).then(docSnap => {
                        if (docSnap.exists()) {
                            setLoggedUser(docSnap.data())
                            setIsLoading(true);
                            changeIsLoading(true);
                            changeIsTesting(true);
                            setCompleLoading(testLoading())
                            localStorage.setItem("isCompleting", true);
                        }
                    })
                }
            }else{
                return navigate("/login");
            }
        })
    }, [dispatch, completeLoading])

    

    return (
        <>
            <head>
                <Helmet>
                <meta charSet="UTF-8" />
                <title>Cook Tounsi - Mon Profile</title>
                <meta name="name" content="Cook Tounsi" />
                <meta name="title" content="Cook Tounsi: vente de vos plats tunisiens préférés 2023" />
                <meta name="keywords" content="cuisine, Tunisie, cuisine tunisienne, 
                traditionnel, plats, épices, patisserie, healthy, lifestyle, recettes,
                 food, livraison, ماكلة تونسية , أطباق , معلبة, " />
                <meta property="og:title" content="Cook Tounsi- Mon Profile" />
                <meta property="og:image" content="assets\images\banner.jpg" />
                </Helmet>

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
                <link rel="stylesheet" href="assets/css/home-classic.css"></link>
            </head>

            <body>
                <section className="inner-section single-banner" style={{ backgroundImage: "url(assets/images/profileBanner.jpg)", backgroundRepeat: "no-repeat", backgroundPosition: "center", }}>
                    <div className="container">
                        <h2>Profile</h2>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">profile</li>
                        </ol>
                    </div>
                </section>
                <section className="inner-section profile-part">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="account-card">
                                    <div className="account-title">
                                        <h4>Votre Profile</h4>

                                        <button data-bs-toggle="modal"><Link to="/Profile">Modifier</Link></button>
                                    </div>
                                    <div className="account-content">
                                        <div className="row">
                                            <div className="col-lg-2">
                                                <div className="profile-image">
                                                    {loggedUser.photo!=undefined&&
                                                    <img src={loggedUser.photo} alt="user" style={{borderRadius:"70px",height:"100px"}} />
                                                    }
                                                     {loggedUser.photo==undefined&&
                                                    <img src={window.location.origin +'/assets/images/user.png'} alt="user" style={{borderRadius:"70px",height:"100px"}} />
                                                    }
                                                    
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4">
                                                <div className="form-group">
                                                    <label className="form-label">Prénom</label>
                                                    <h5>{loggedUser.userName}</h5>

                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4">
                                                <div className="form-group">
                                                    <label className="form-label">Email</label>
                                                    <h5>{loggedUser.email}</h5>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
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
        </>
    );
}

export default MyProfile;