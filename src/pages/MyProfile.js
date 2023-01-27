import React, { Component, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { app,auth, db, logout} from "../firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
import {  updateProfile } from "firebase/auth";
import { getDatabase, ref, child, get,onValue } from "firebase/database";
class userdata {
  u;
  l;
    test(user){
    var logged
    
    if(user){
       const starCountRef = ref(db, 'users/' + user.uid);
       onValue(starCountRef, (snapshot) => {
         const data = snapshot.val();
         logged=data
       });
    }
    const ux=new userdata();
    ux.u=user;
    ux.l=logged
   return ux;
}
}

function MyProfile() {
    
    
    //const userda=useAuthState(auth);
    var logged;
   const user=auth.currentUser;
   const uid=auth.currentUser.uid;
    if(user==null||logged==null){
        const starCountRef = ref(db, 'users/' + uid);
        onValue(starCountRef, (snapshot) => {
          const data = snapshot.val();
          logged=data
        });
        return;
     }
     

    // console.log(logged)
    
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
                <link rel="stylesheet" href="Assets/css/orderlist.css" />
            </head>

            <body>
                <section class="inner-section single-banner" style={{ backgroundImage: "url(assets/images/profileBanner.jpg)", backgroundRepeat: "no-repeat", backgroundPosition: "center", }}>
                    <div class="container">
                        <h2>Profile</h2>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">profile</li>
                        </ol>
                    </div>
                </section>
                <section class="inner-section profile-part">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="account-card">
                                    <div class="account-title">
                                        <h4>Your Profile</h4>
                                        <button data-bs-toggle="modal"><Link to="/Profile">Edit Profile</Link></button>
                                    </div>
                                    <div class="account-content">
                                        <div class="row">
                                            <div class="col-lg-2">
                                                <div class="profile-image">
                                                    <img src="assets/images/user.png" alt="user" />
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-lg-4">
                                                <div class="form-group">
                                                    <label class="form-label">name</label>
                                                    <h5>{logged.username}</h5>
                                                    
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-lg-4">
                                                <div class="form-group">
                                                    <label class="form-label">Email</label>
                                                    <h5>{logged.email}</h5>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-heading">
                            <h2>Order History</h2>
                        </div>
                    </div>
                </div>
                <section class="inner-section orderlist-part">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="orderlist-filter">
                                    <h5>total order <span>- (4)</span></h5>
                                    <div class="filter-short">
                                        <label class="form-label">short by:</label>
                                        <select class="form-select">
                                            <option value="all" selected>all order</option>
                                            <option value="recieved">recieved order</option>
                                            <option value="processed">processed order</option>
                                            <option value="shipped">shipped order</option>
                                            <option value="delivered">delivered order</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="orderlist">
                                    <div class="orderlist-head">
                                        <h5>order#01</h5>
                                        <h5>order recieved</h5>
                                    </div>
                                    <div class="orderlist-body">
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="order-track">
                                                    <ul class="order-track-list">
                                                        <li class="order-track-item active">
                                                            <i class="icofont-check"></i>
                                                            <span>order recieved</span>
                                                        </li>
                                                        <li class="order-track-item">
                                                            <i class="icofont-close"></i>
                                                            <span>order processed</span>
                                                        </li>
                                                        <li class="order-track-item">
                                                            <i class="icofont-close"></i>
                                                            <span>order shipped</span>
                                                        </li>
                                                        <li class="order-track-item">
                                                            <i class="icofont-close"></i>
                                                            <span>order delivered</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-lg-5">
                                                <ul class="orderlist-details">
                                                    <li>
                                                        <h6>order id</h6>
                                                        <p>14667</p>
                                                    </li>
                                                    <li>
                                                        <h6>Total Item</h6>
                                                        <p>6 Items</p>
                                                    </li>
                                                    <li>
                                                        <h6>Order Time</h6>
                                                        <p>7th February 2021</p>
                                                    </li>
                                                    <li>
                                                        <h6>Delivery Time</h6>
                                                        <p>12th February 2021</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="col-lg-4">
                                                <ul class="orderlist-details">
                                                    <li>
                                                        <h6>Sub Total</h6>
                                                        <p>$10,864.00</p>
                                                    </li>
                                                    <li>
                                                        <h6>discount</h6>
                                                        <p>$20.00</p>
                                                    </li>
                                                    <li>
                                                        <h6>delivery fee</h6>
                                                        <p>$49.00</p>
                                                    </li>
                                                    <li>
                                                        <h6>Total<small>(Incl. VAT)</small></h6>
                                                        <p>$10,874.00</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="col-lg-3">
                                                <div class="orderlist-deliver">
                                                    <h6>Delivery location</h6>
                                                    <p>jalkuri, fatullah, narayanganj-1420. word no-09, road no-17/A</p>
                                                </div>
                                            </div>
                                            <div class="col-lg-12">
                                                <div class="table-scroll">
                                                    <table class="table-list">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">Serial</th>
                                                                <th scope="col">Product</th>
                                                                <th scope="col">Name</th>
                                                                <th scope="col">Price</th>
                                                                <th scope="col">brand</th>
                                                                <th scope="col">quantity</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td class="table-serial"><h6>01</h6></td>
                                                                <td class="table-image"><img src="assets/images/product/01.jpg" alt="product" /></td>
                                                                <td class="table-name"><h6>product name</h6></td>
                                                                <td class="table-price"><h6>$19<small>/kilo</small></h6></td>
                                                                <td class="table-brand"><h6>Fresh Company</h6></td>
                                                                <td class="table-quantity"><h6>3</h6></td>
                                                            </tr>
                                                            <tr>
                                                                <td class="table-serial"><h6>02</h6></td>
                                                                <td class="table-image"><img src="assets/images/product/02.jpg" alt="product" /></td>
                                                                <td class="table-name"><h6>product name</h6></td>
                                                                <td class="table-price"><h6>$19<small>/kilo</small></h6></td>
                                                                <td class="table-brand"><h6>Radhuni Masala</h6></td>
                                                                <td class="table-quantity"><h6>5</h6></td>
                                                            </tr>
                                                            <tr>
                                                                <td class="table-serial"><h6>03</h6></td>
                                                                <td class="table-image"><img src="assets/images/product/03.jpg" alt="product" /></td>
                                                                <td class="table-name"><h6>product name</h6></td>
                                                                <td class="table-price"><h6>$19<small>/kilo</small></h6></td>
                                                                <td class="table-brand"><h6>Pran Prio</h6></td>
                                                                <td class="table-quantity"><h6>2</h6></td>
                                                            </tr>
                                                            <tr>
                                                                <td class="table-serial"><h6>04</h6></td>
                                                                <td class="table-image"><img src="assets/images/product/04.jpg" alt="product" /></td>
                                                                <td class="table-name"><h6>product name</h6></td>
                                                                <td class="table-price"><h6>$19<small>/kilo</small></h6></td>
                                                                <td class="table-brand"><h6>Real Food</h6></td>
                                                                <td class="table-quantity"><h6>3</h6></td>
                                                            </tr>
                                                            <tr>
                                                                <td class="table-serial"><h6>05</h6></td>
                                                                <td class="table-image"><img src="assets/images/product/05.jpg" alt="product" /></td>
                                                                <td class="table-name"><h6>product name</h6></td>
                                                                <td class="table-price"><h6>$19<small>/kilo</small></h6></td>
                                                                <td class="table-brand"><h6>Rdhuni Company</h6></td>
                                                                <td class="table-quantity"><h6>7</h6></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="orderlist">
                                    <div class="orderlist-head">
                                        <h5>order#02</h5>
                                        <h5>order Processed</h5>
                                    </div>
                                    <div class="orderlist-body">
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="order-track">
                                                    <ul class="order-track-list">
                                                        <li class="order-track-item active">
                                                            <i class="icofont-check"></i>
                                                            <span>order recieved</span>
                                                        </li>
                                                        <li class="order-track-item active">
                                                            <i class="icofont-check"></i>
                                                            <span>order processed</span>
                                                        </li>
                                                        <li class="order-track-item">
                                                            <i class="icofont-close"></i>
                                                            <span>order shipped</span>
                                                        </li>
                                                        <li class="order-track-item">
                                                            <i class="icofont-close"></i>
                                                            <span>order delivered</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-lg-5">
                                                <ul class="orderlist-details">
                                                    <li>
                                                        <h6>order id</h6>
                                                        <p>14667</p>
                                                    </li>
                                                    <li>
                                                        <h6>Total Item</h6>
                                                        <p>6 Items</p>
                                                    </li>
                                                    <li>
                                                        <h6>Order Time</h6>
                                                        <p>7th February 2021</p>
                                                    </li>
                                                    <li>
                                                        <h6>Delivery Time</h6>
                                                        <p>12th February 2021</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="col-lg-4">
                                                <ul class="orderlist-details">
                                                    <li>
                                                        <h6>Sub Total</h6>
                                                        <p>$10,864.00</p>
                                                    </li>
                                                    <li>
                                                        <h6>discount</h6>
                                                        <p>$20.00</p>
                                                    </li>
                                                    <li>
                                                        <h6>delivery fee</h6>
                                                        <p>$49.00</p>
                                                    </li>
                                                    <li>
                                                        <h6>Total<small>(Incl. VAT)</small></h6>
                                                        <p>$10,874.00</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="col-lg-3">
                                                <div class="orderlist-deliver">
                                                    <h6>Delivery location</h6>
                                                    <p>jalkuri, fatullah, narayanganj-1420. word no-09, road no-17/A</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="orderlist">
                                    <div class="orderlist-head">
                                        <h5>order#03</h5>
                                        <h5>order shipped</h5>
                                    </div>
                                    <div class="orderlist-body">
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="order-track">
                                                    <ul class="order-track-list">
                                                        <li class="order-track-item active">
                                                            <i class="icofont-check"></i>
                                                            <span>order recieved</span>
                                                        </li>
                                                        <li class="order-track-item active">
                                                            <i class="icofont-check"></i>
                                                            <span>order processed</span>
                                                        </li>
                                                        <li class="order-track-item active">
                                                            <i class="icofont-check"></i>
                                                            <span>order shipped</span>
                                                        </li>
                                                        <li class="order-track-item">
                                                            <i class="icofont-close"></i>
                                                            <span>order delivered</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-lg-5">
                                                <ul class="orderlist-details">
                                                    <li>
                                                        <h6>order id</h6>
                                                        <p>14667</p>
                                                    </li>
                                                    <li>
                                                        <h6>Total Item</h6>
                                                        <p>6 Items</p>
                                                    </li>
                                                    <li>
                                                        <h6>Order Time</h6>
                                                        <p>7th February 2021</p>
                                                    </li>
                                                    <li>
                                                        <h6>Delivery Time</h6>
                                                        <p>12th February 2021</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="col-lg-4">
                                                <ul class="orderlist-details">
                                                    <li>
                                                        <h6>Sub Total</h6>
                                                        <p>$10,864.00</p>
                                                    </li>
                                                    <li>
                                                        <h6>discount</h6>
                                                        <p>$20.00</p>
                                                    </li>
                                                    <li>
                                                        <h6>delivery fee</h6>
                                                        <p>$49.00</p>
                                                    </li>
                                                    <li>
                                                        <h6>Total<small>(Incl. VAT)</small></h6>
                                                        <p>$10,874.00</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="col-lg-3">
                                                <div class="orderlist-deliver">
                                                    <h6>Delivery location</h6>
                                                    <p>jalkuri, fatullah, narayanganj-1420. word no-09, road no-17/A</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="orderlist">
                                    <div class="orderlist-head">
                                        <h5>order#04</h5>
                                        <h5>order delivered</h5>
                                    </div>
                                    <div class="orderlist-body">
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="order-track">
                                                    <ul class="order-track-list">
                                                        <li class="order-track-item active">
                                                            <i class="icofont-check"></i>
                                                            <span>order recieved</span>
                                                        </li>
                                                        <li class="order-track-item active">
                                                            <i class="icofont-check"></i>
                                                            <span>order processed</span>
                                                        </li>
                                                        <li class="order-track-item active">
                                                            <i class="icofont-check"></i>
                                                            <span>order shipped</span>
                                                        </li>
                                                        <li class="order-track-item active">
                                                            <i class="icofont-check"></i>
                                                            <span>order delivered</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-lg-5">
                                                <ul class="orderlist-details">
                                                    <li>
                                                        <h6>order id</h6>
                                                        <p>14667</p>
                                                    </li>
                                                    <li>
                                                        <h6>Total Item</h6>
                                                        <p>6 Items</p>
                                                    </li>
                                                    <li>
                                                        <h6>Order Time</h6>
                                                        <p>7th February 2021</p>
                                                    </li>
                                                    <li>
                                                        <h6>Delivery Time</h6>
                                                        <p>12th February 2021</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="col-lg-4">
                                                <ul class="orderlist-details">
                                                    <li>
                                                        <h6>Sub Total</h6>
                                                        <p>$10,864.00</p>
                                                    </li>
                                                    <li>
                                                        <h6>discount</h6>
                                                        <p>$20.00</p>
                                                    </li>
                                                    <li>
                                                        <h6>delivery fee</h6>
                                                        <p>$49.00</p>
                                                    </li>
                                                    <li>
                                                        <h6>Total<small>(Incl. VAT)</small></h6>
                                                        <p>$10,874.00</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="col-lg-3">
                                                <div class="orderlist-deliver">
                                                    <h6>Delivery location</h6>
                                                    <p>jalkuri, fatullah, narayanganj-1420. word no-09, road no-17/A</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                                <ul class="pagination">
                                    <li class="page-item">
                                        <i class="icofont-arrow-left"></i>
                                    </li>
                                    <li class="page-item">1</li>
                                    <li class="page-item">2</li>
                                    <li class="page-item">3</li>
                                    <li class="page-item">...</li>
                                    <li class="page-item">65</li>
                                    <li class="page-item">
                                        <i class="icofont-arrow-right"></i>
                                    </li>
                                </ul>
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

export default MyProfile;