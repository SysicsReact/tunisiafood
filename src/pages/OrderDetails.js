import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import useFetchDocument from "../components/customHooks/useFetchDocument";
import Intro from "../components/Intro";
import { useDispatch } from "react-redux";


const OrderDetails = () => {
   
     const Location = useLocation(); 
     var idOrder = Location.state.id;
     const [order, setOrder] = useState(null);
     const dispatch = useDispatch();
     const {document} = useFetchDocument("orders", idOrder)

     useEffect(() => {
       setOrder(document);
    }, [document]);
    return(
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="title" content="Tunisian Food" />
            <meta name="keywords" content="organic, food, shop, ecommerce, store, agriculture, vegetables, farm, grocery, natural, online store" />
            <title>Tout les produits</title>
            <link rel="icon" href="assets/images/favicon.png" />
            <link rel="stylesheet" href="assets/fonts/flaticon/flaticon.css" />
            <link rel="stylesheet" href="assets/fonts/icofont/icofont.min.css" />
            <link rel="stylesheet" href="assets/fonts/fontawesome/fontawesome.min.css" />
            <link rel="stylesheet" href="assets/vendor/venobox/venobox.min.css" />
            <link rel="stylesheet" href="assets/vendor/slickslider/slick.min.css" />
            <link rel="stylesheet" href="assets/vendor/niceselect/nice-select.min.css" />
            <link rel="stylesheet" href="assets/vendor/bootstrap/bootstrap.min.css" />
            <link rel="stylesheet" href="assets/css/main.css" />
            <link rel="stylesheet" href="assets/css/orderlist.css"/>
        </head>
        <body>
        <ToastContainer></ToastContainer>
        <section class="inner-section single-banner" style={{ backgroundImage: "url(assets/images/banner.jpg)", backgroundRepeat: "no-repeat", backgroundPosition: "center", }}>
                    <div class="container">
                         <h2>Détails de commande</h2>
                         <ol class="breadcrumb">
                              <li class="breadcrumb-item"><Link to="/">Accueil</Link></li>
                              <li class="breadcrumb-item active" aria-current="page"><Link to="/OrderHistory">Commandes</Link></li>
                              <li class="breadcrumb-item active" aria-current="page">Détails</li>
                         </ol>
                    </div>
          </section>
        {order!=null &&
          <>
          <section class="inner-section orderlist-part">
               <div class="container">
                    <div class="row">
                         <div class="col-lg-12">
                         <div class="orderlist">
                              <div class="orderlist-head">
                                   <h5 >Commande : </h5>
                              </div>
                              <div class="orderlist-body">
                                   <div class="row">
                                        <div class="col-lg-12">
                                        </div>
                                        <div class="col-lg-4">
                                        <ul class="orderlist-details">
                                             <li>
                                                  <h6>Identifiant:</h6>
                                                  <p>{order.id}</p>
                                             </li>
                                             <li>
                                                  <h6>Passée le:</h6>
                                                  <p>{order.timestamp}</p>
                                             </li>
                                             <li>
                                                  <h6>Etat:</h6>
                                             {order.state=="0"&&
                                            <label className="label-text feat" > Reçue </label>}
                                             {order.state=="1"&&
                                            <label className="label-text sale" > Expédiée </label>}
                                             {order.state=="2"&&
                                            <label className="label-text new" > Livrée </label>}
                                             </li>
                                             </ul>
                                        </div>
                                        
                                        <div class="col-lg-4">
                                        <ul class="orderlist-details">
                                            <li>
                                                <h6>Prix:</h6>
                                                <p>€ {order.price_total.toFixed(2)}</p>
                                            </li>
                                            <li>
                                                <h6>Frais de livraison:</h6>
                                                <p>€ 10</p>
                                            </li>
                                            <li>
                                                <h6>Total<small>(H-TVA)</small>:</h6>
                                                <p>€ {(parseFloat(10) + parseFloat(order.price_total)).toFixed(2)}</p>
                                            </li>
                                        </ul>
                                        </div>
                                        <div class="col-lg-4">
                                        <ul class="orderlist-details">
                                            <li>
                                                <h6>Pays:</h6>
                                                <p>{order.shipping.country}</p>
                                            </li>
                                            <li>
                                                <h6>Ville:</h6>
                                                <p>{order.shipping.city}</p>
                                            </li>
                                            <li>
                                                <h6>Adresse:</h6>
                                                <p>{order.shipping.adress}</p>
                                            </li>
                                        </ul>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    </div>
                    <div className="row">
                         <div class="col-lg-12">
                              <div class="table-scroll">
                                   <table class="table-list">
                                        <thead>
                                             <tr>
                                                  <th scope="col">Index</th>
                                                  <th scope="col">Produit</th>
                                                  <th scope="col">Libellé</th>
                                                  <th scope="col">Catégorie</th>
                                                  <th scope="col">Prix</th>
                                                  <th scope="col">Quantité</th>
                                                  <th scope="col">Total</th>
                                             </tr>
                                        </thead>
                                        <tbody>
                                        { order.product.map((cart, index) =>{
                                             const {id, name, price, photo, cartQuantity,weight , category} = cart
                                            return(
                                             <tr key={id}>
                                                  <td class="table-serial"><h6>{index+1}</h6></td>
                                                  <td class="table-image"><img src={photo} alt="product"/></td>
                                                  <td class="table-name"><h6>{name}</h6></td>
                                                  <td class="table-brand"><h6>{category}</h6></td>
                                                  <td class="table-price"><h6>€ {price}<small>/{weight}</small></h6></td>
                                                  <td class="table-brand"><h6>{cartQuantity}</h6></td>
                                                  <td class="table-quantity"><h6>{(price * cartQuantity).toFixed(2)}</h6></td>
                                             </tr>
                                            )}
                                        )}
                                        </tbody>
                                   </table>
                              </div>
                         </div>
                    </div>

               </div>
          </section>
          </>
        }          
         

          <Intro/>
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
};

export default OrderDetails;