import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import useFetchCollection from '../components/customHooks/useFetchCollection';
import { useDispatch, useSelector } from 'react-redux';
import { STORE_ORDERS, CALC_TOTAL_ORDER_AMOUNT, selectOrderHistory, selectTotalOrderAmount } from '../redux/slice/orderSlice';
import { selectuserID } from '../redux/slice/authSlice';


const OrderHistory = () => {
    const {data, isLoading} = useFetchCollection("orders");
    const orders = useSelector(selectOrderHistory);
    const userId = useSelector(selectuserID);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(STORE_ORDERS(data));
    }, [dispatch, data] );

    

    const filteredOrders = orders.filter((order) => order.user_id === userId);
    const viewOrder = async (idOrder) => {
        navigate("/OrderDetails", { state: { id: idOrder } });
    };
    
    
    return (
    <html lang="en">
    <head>
    <meta charset="UTF-8" />
    <meta name="name" content="Cook Tounsi" />
    <meta name="title" content="Cook Tounsi: vente de vos plats tunisiens préférés 2023" />
    <meta name="keywords" content="cuisine, Tunisie, cuisine tunisienne, 
        traditionnel, plats, épices, patisserie, healthy, lifestyle, food,  " />
    <title>Historique des commandes - Cook Tounsi</title>
    <link rel="icon" href="assets/images/favicon.png" />
    <link rel="stylesheet" href="assets/fonts/flaticon/flaticon.css" />
    <link rel="stylesheet" href="assets/fonts/icofont/icofont.min.css" />
    <link rel="stylesheet" href="assets/fonts/fontawesome/fontawesome.min.css" />
    <link rel="stylesheet" href="assets/vendor/venobox/venobox.min.css" />
    <link rel="stylesheet" href="assets/vendor/slickslider/slick.min.css" />
    <link rel="stylesheet" href="assets/vendor/niceselect/nice-select.min.css" />
    <link rel="stylesheet" href="assets/vendor/bootstrap/bootstrap.min.css" />
    <link rel="stylesheet" href="assets/css/main.css" />
    <link rel="stylesheet" href="assets/css/user-auth.css" />
    <link rel="stylesheet" href="assets/css/orderlist.css"/>
    <link rel="stylesheet" href="assets/css/checkout.css"></link>
    </head>
    <body>
    <div className="backdrop"></div>
        <a class="backtop fas fa-arrow-up" href="#"></a>
        <section class="inner-section single-banner" style={{ backgroundImage: "url(assets/images/spices.jpg)", backgroundRepeat: "no-repeat", backgroundPosition: "center", }}>
                    <div class="container">
                        <h2>Checkout</h2>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/">Accueil</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">Historique de Commandes</li>
                        </ol>
                    </div>
        </section>
        <section class="inner-section orderlist-part">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                   
                    {filteredOrders.length === 0 ?
                       (
                        <p>No Order Found</p>
                       ):(
                        <>
                           <div className="row">
                            <div className="col-lg-12">
                            <div className="section-heading">
                                <h2>Historique de commande</h2>
                            </div>
                            </div>
                            </div>
                            <div class="row">
                            <div class="col-lg-12">
                                <div class="orderlist-filter">
                                    <h5>Total : <span>{filteredOrders.length}</span></h5>
                                    <div class="filter-short">
                                        <label class="form-label">Filtrer:</label>
                                        <select class="form-select">
                                            <option value="all" selected>Tout </option>
                                            <option value="recieved">Réçue</option>
                                            <option value="processed">Expédiée</option>
                                            <option value="shipped">Livrée</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        {filteredOrders.map((order, index) =>
                            { const {id, price_total, state, timestamp, totalAmount} = order
                                return(
                                    <>

                        <div class="orderlist">
                            <div class="orderlist-head">
                                <h5 onClick={() => viewOrder(order.id)}>Commande : {index+1}</h5>
                            </div>   
                            <div class="orderlist-body">
                                <div class="row">
                                    <div class="col-lg-12">

                                    </div>
                                    <div class="col-lg-5">
                                    <ul class="orderlist-details">
                                            <li>
                                                <h6>Index</h6>
                                                <p key={id}>{index+1}</p>
                                            </li>
                                            <li>
                                            <h6>Identifiant</h6>
                                                <p>{id}</p>
                                            </li>
                                            <li>
                                                <h6>Etat</h6>
                                                {state=="0"&&
                                            <label className="label-text feat" > Reçue </label>}
                                              {state=="1"&&
                                            <label className="label-text sale" > Expédiée </label>}
                                              {state=="2"&&
                                            <label className="label-text new" > Livrée </label>}
                                            </li>
                                        </ul>
                                       
                                    </div>
                                    <div class="col-lg-4">
                                        <ul class="orderlist-details">
                                        <li>
                                                <h6>Passée le:</h6>
                                                <p>{timestamp}</p>
                                            
                                            </li>
                                            <li>
                                                <h6>Total</h6>
                                                <p>€ {price_total.toFixed(2)}</p>
                                            </li>
                                            <li>
                                                <h6>Total<small>(H-TVA)</small></h6>
                                                <p>€ {parseFloat(10) + parseFloat(price_total.toFixed(2))}</p>
                                            </li>
                                        </ul>
                                    </div>
                                
                                    <div class="col-lg-3">
                                        <ul class="orderlist-details">
                                            <li>
                                                <h6>Pour Plus de Détails...</h6>
                                            </li>
                                            <li class="my-buttonf">
                                                <button  className="my-buttonf" onClick={() => viewOrder(order.id)}>Cliquez-ici</button>
                                            </li>
                                            <li>
                                                <p></p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </>
                            )
                        })}</>
                        
                    )}


                    
                </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <ul class="pagination">
                            <li class="page-item">
                                <a class="page-link" href="#">
                                    <i class="icofont-arrow-left"></i>
                                </a>
                            </li>
                            <li class="page-item"><a class="page-link active" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item">...</li>
                            <li class="page-item"><a class="page-link" href="#">65</a></li>
                            <li class="page-item">
                                <a class="page-link" href="#">
                                    <i class="icofont-arrow-right"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </body>
    </html>
  )
}

export default OrderHistory