import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link,useLocation,useNavigate, useParams } from "react-router-dom";
import { auth, db, logout } from "../firebase.config";
import Loader from "../components/loader/Loader";
import Intro from "../components/Intro";
import { useSelector, useDispatch } from "react-redux";
import useFetchCollection from "../components/customHooks/useFetchCollection";
import { STORE_PRODUCTS, selectProducts } from "../redux/slice/productSlice";
import { ADD_TO_CART } from "../redux/slice/cartSlice";
import { ADD_TO_WISH, selectWishItems } from "../redux/slice/wishSlice";
import {Modal} from 'react-fade-modal';


function Dashboard() {
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const[singleProduct,setSingleProduct]=useState([])
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false)
    //const [isLoading, setIsLoading ] = useState(false);
    const {data, isLoading} = useFetchCollection("products")
    const products = useSelector(selectProducts)
    const wishItems = useSelector(selectWishItems);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(
            STORE_PRODUCTS({
                products:  data,
            })
          );
    },[dispatch,data]);
    const addToCart = (e) => {
        dispatch(ADD_TO_CART(e));
           };
    const addToWish = (e) => {
        dispatch(ADD_TO_WISH(e));
               };
    const ShowItem=(e)=>{
        //alert(e);
        setSingleProduct(e);
        setIsOpen(true)
           }
    const view = async (idp) => {
        navigate("/ProductItems", { state: { id: idp } });
          };
    const shortenText = (text, n) => {
        if (text.length > n) {
            const shortenedText = text.substring(0, n).concat("...");
            return shortenedText;
        }
        return text;
        };
    console.log(wishItems)
    return (
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="name" content="Greeny" />
                <meta name="title" content="Greeny - eCommerce HTML Template" />
                <title>Classic Home - Greeny</title>
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
                <link rel="stylesheet" href="./components/loader/loader.css" />
            </head>
            <body>
            {isLoading && <Loader/>}
            {!isLoading &&
            <div>
                <div className="backdrop"></div>
                <a className="backtop fas fa-arrow-up" href="#"></a>
            <section className="home-classic-slider slider-arrow">
                    <div className="banner-part" 
                    style={{ backgroundImage: "url(assets/images/banner2.jpg)", backgroundRepeat: "no-repeat", backgroundPosition: "center", borderRadius: "10px" }}>
                    <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-lg-6">
                            <div className="banner-content">
                                <h3 style={{color:"white"}}>
                                    Nous partageons l’amour comme nous partageons la nourriture</h3>
                                <p>Avec nous tout est une question de sens et de souvenirs d’enfance de réunions de famille. L’odeur des épices fraîches, le goût des plats traditionnels. </p>
                                <div className="banner-btn">
                                <Link to="/ShopProduct"><a className="btn btn-inline">
                                        <i className="fas fa-shopping-basket"></i>
                                        <span>Achat</span>
                                    </a></Link>
                                    <Link to="/Contact">  <a className="btn btn-outline">
                                   <i className="icofont-sale-discount"></i>
                                        <span>Contact</span>
                                    </a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    </div>
            </section>
            <section className="section recent-part">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-heading">
                            <h2>
    Articles vendus récemment</h2>
                        </div>
                    </div>
                </div>
                <div>
                <div>
                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                {!isLoading &&products.slice(0,10).map((e) => {
                       const { id, weight, tag, category, photo, name, price, discount, description } = e;
                      
                    return (
                        <>  
                        <div className="col" key={id}>
                            <div className="product-card">
                                <div className="product-media">
                                    <div className="product-label">
                                    {tag=="nouveau"&&
                                            <label className="label-text new">{tag}</label>}
                                            {tag=="solde"&&
                                            <label className="label-text sale">{tag}</label>}
                                            {tag=="populaire"&&
                                            <label className="label-text feat">{tag}</label>}
                                    </div>
                                    <button className="product-wish wish">
                                    {category=="plat"&&
                                            <label className="label-text order">{category}</label>}
                                        {category=="epice"&&
                                            <label className="label-text rate">{category}</label>}
                                        {category=="sucré"&&
                                            <label className="label-text sucre">{category}</label>}
                                    </button>
                                    <a className="product-image" href="front/product-video.html">
                                        <img src={photo} alt="product"/>
                                    </a>
                                    <div className="product-widget">
                                        <button onClick={() => ShowItem(e)} className="product-v"  ><i className="fas fa-eye" style={{color:"white"}}></i></button>
                                        <a title="Product Video" href="" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                       <button onClick={()=> addToWish(e)} className="product-v"><i className="fas fa-heart" style={{color:"white"}}></i></button>
                                    </div>
                                </div>
           {isOpen &&<Modal
          setIsOpen={setIsOpen}>  
        <div className="row" key={singleProduct.id}>
            <div class="col">
                <div class="product-standard">
                    <div class="standard-media">
                            <img class="product-image" src={singleProduct.photo} style={{width:"350px", borderRadius:"8px"}} alt="product"/>
                            <button className="product-wish wish">
                        {singleProduct.category=="plat"&&
                                <label className="label-text order">{singleProduct.category}</label>}
                        {singleProduct.category=="epice"&&
                                <label className="label-text rate">{singleProduct.category}</label>}
                        {singleProduct.category=="sucré"&&
                                <label className="label-text sucre">{singleProduct.category}</label>}
                    </button>
                    <div class="product-label">
                    {singleProduct.tag=="nouveau"&&
                    <label className="label-text new">{singleProduct.tag}</label>}
                    {singleProduct.tag=="solde"&&
                    <label className="label-text sale">{singleProduct.tag}</label>}
                    {singleProduct.tag=="populaire"&&
                    <label className="label-text feat">{singleProduct.tag}</label>}
                    </div>
                    </div>
                    <div class="standard-content">
                        <h4 class="standard-name">
                            <a href="product-video.html">{singleProduct.name}</a>
                        </h4>
                        <h5 class="standard-price">
                            <del> €{singleProduct.price}</del>
                            <span> €{singleProduct.price}<small>/{singleProduct.weight} G</small></span>
                        </h5>
                        <p class="standard-desc">{singleProduct.description}</p>
                        <div class="standard-action-group">
                            <button class="product-add" title="Add to Cart" onClick={()=> addToCart(e)}>
                                <i class="fas fa-shopping-basket"></i>
                                <span>Ajouter</span>
                            </button>
                            <div class="product-action">
                                <button class="action-minus" title="Quantity Minus"><i class="icofont-minus"></i></button>
                                <input class="action-input" title="Quantity Number" type="text" name="quantity" value="1"/>
                                <button class="action-plus" title="Quantity Plus"><i class="icofont-plus"></i></button>
                            </div>
                            <button class="standard-wish wish" title="Add to Wishlist">
                                <i class="fas fa-heart"></i>
                                <span>Ajouter au wishlist</span>
                            </button>
                    <button class="standard-wish wish" title="Add to Wishlist"
                     onClick={() => view(singleProduct.id)}>
                     Plus de Détails</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
          </Modal>}
                                <div className="product-content">
                                    <div className="product-rating">
                                    <i className="product-price" href="">{weight} G</i>
                                    </div>
                                    <h6 className="product-name">
                                        <a href="product-video.html">{name}</a>
                                    </h6>
                                    <h6 className="product-price">
                                    {discount!="0"&&
                                    <>
                                        <del> €{price}</del>
                                        <span> € {Math.round((price-(price*discount)/100)*100)/100}<small></small></span>
                                        </>
                                    }
                                    {discount=="0"&&
                                        <>
                                       
                                        <span> € {price}<small></small></span>
                                        </>
                                    }</h6>
                                    <button className="product-add" title="Add to Cart"
                                    onClick={()=> addToCart(e)}>
                                        <i className="fas fa-shopping-basket"></i>
                                        <span>Ajouter</span>
                                    </button>
                                    <div className="product-action">
                                        <button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button>
                                        <input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/>
                                        <button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>  
                            </>
                     );
                    })}
              </div>
               </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-btn-25">
                        <Link to="/ShopProduct"> <a className="btn btn-outline">
                                <i className="fas fa-eye"></i>
                                <span>Voir Plus</span>
                            </a></Link>
                        </div>
                    </div>
                </div>
                </div>
            </section>
             <div className="section promo-part">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="promo-img">
                            <a href=""><img src="assets/images/spices.jpg" alt="promo"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section className="section feature-part">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-heading">
                            <h2>Articles à la une</h2>
                        </div>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2">
                {!isLoading &&products.slice(0,4).map((e) => {
                       const { id, tag, category,photo,name,price, description } = e;
                      
                    return (
                    <div className="col">
                        <div className="feature-card">
                            <div className="feature-media">
                                <div className="feature-label">
                                {tag=="nouveau"&&
                                            <label className="label-text new">{tag}</label>}

                                            {tag=="solde"&&
                                            <label className="label-text sale">{tag}</label>}

                                            {tag=="populaire"&&
                                            <label className="label-text feat">{tag}</label>}
                                </div>
                                <button className="feature-wish wish">
                                {category=="plat"&&
                                            <label className="label-text order">{category}</label>}
                                        {category=="epice"&&
                                            <label className="label-text rate">{category}</label>}
                                        {category=="sucré"&&
                                            <label className="label-text sucre">{category}</label>}
                                </button>
                                <a className="feature-image" href="product-video.html">
                                    <img src={photo} style={{ borderRadius:"5px"}} alt={name}/>
                                </a>
                                <div className="feature-widget">
                                <button onClick={() => ShowItem(e)} className="product-v"  ><i className="fas fa-eye" style={{color:"white"}}></i></button>
                                        <a title="Product Video" href="" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                       <button onClick={() => ShowItem(e)} className="product-v"><i className="fas fa-heart" style={{color:"white"}}></i></button>
                                </div>
                            </div>
                            <div className="feature-content">
                                <h6 className="feature-name">
                                    <a href="product-video.html">{name}</a>
                                </h6>
                                <h6 className="feature-price">
                                    <del>${price}</del>
                                    <span>${price}<small>/plat</small></span>
                                </h6>
                                <p className="feature-desc">{shortenText(description, 150)}</p>
                                <button className="product-add" onClick={()=> addToCart(e)}>
                                    <i className="fas fa-shopping-basket"></i>
                                    <span>Ajouter</span>
                                </button>
                            </div>
                        </div>
                    </div>
                      );
                    })}
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-btn-25">
                           <Link to="/ShopProduct"> <a className="btn btn-outline">
                                <i className="fas fa-eye"></i>
                                <span>Voir Plus</span>
                            </a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Intro/>
        <section className="section blog-part">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                    <div className="section-heading">
                            <h2>   </h2>
                        </div>
                        <div className="section-heading">
                            <h2>Lire nos articles</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="blog-slider slider-arrow">
                            <div className="blog-card">
                                <div className="blog-media">
                                    <a className="blog-img" href="#">
                                        <img src="assets/images/blog/blog.jpg" alt="blog"/>
                                    </a>
                                </div>
                                <div className="blog-content">
                                    <ul className="blog-meta">
                                        <li>
                                            <i className="fas fa-user"></i>
                                            <span>admin</span>
                                        </li>
                                        <li>
                                            <i className="fas fa-calendar-alt"></i>
                                            <span>february 02, 2021</span>
                                        </li>
                                    </ul>
                                    <h4 className="blog-title">
                                        <a href="blog-details.html">Voluptate blanditiis provident Lorem ipsum dolor sit amet</a>
                                    </h4>
                                    <p className="blog-desc">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias autem recusandae deleniti nam dignissimos sequi ...
                                    </p>
                                    <a className="blog-btn" href="#">
                                        <span>read more</span>
                                        <i className="icofont-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-btn-25">
                        <Link to="/Blog"> <a href="blog-grid.html" className="btn btn-outline">
                                <i className="fas fa-eye"></i>
                                <span> Voir tous les blogs</span>
                            </a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            </div>
            }   
                <script src="assets/vendor/bootstrap/popper.min.js"></script>
                <script src="assets/vendor/bootstrap/bootstrap.min.js"></script>
                <script src="assets/vendor/countdown/countdown.min.js"></script>
                <script src="assets/vendor/niceselect/nice-select.min.js"></script>
                <script src="assets/vendor/slickslider/slick.min.js"></script>
                <script src="assets/vendor/venobox/venobox.min.js"></script>
                <script src="assets/js/nice-select.js"></script>
                <script src="assets/js/modalview.js"></script>
                <script src="assets/js/countdown.js"></script>
                <script src="assets/js/accordion.js"></script>
                <script src="assets/js/venobox.js"></script>
                <script src="assets/js/slick.js"></script>
                <script src="assets/js/main.js"></script>
            </body>
        </html>
    );}
export default Dashboard;