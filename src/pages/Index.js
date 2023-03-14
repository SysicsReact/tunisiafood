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
import { query, onSnapshot } from "firebase/firestore";
import { collection } from "firebase/firestore";


function Dashboard() {
    const [blogs, setBlogs] = useState([]);
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
        
        useEffect(() => {
            const q = query(collection(db, "blogs"));
            onSnapshot(q, (querySnapshot) => {
              setBlogs(
                querySnapshot.docs.map((doc) => ({
                  id: doc.id,
                  data: doc.data(),
                }))
              );
    
            });
            
          }, []);
          const viewB = async (idb) => {
            navigate("/BlogDetails", { state: { id: idb } });
                  };

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
                    style={{ backgroundImage: "url(assets/images/chef.jpg)", backgroundRepeat: "no-repeat", backgroundPosition: "center", borderRadius: "10px" }}>
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
                                    <a className="product-image"  onClick={() => ShowItem(e)}>
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
        
                    <div class="product-view">
                        <div class="row"key={singleProduct.id}>
                            <div class="col-md-6 col-lg-6">
                                <div class="view-gallery">
                                    <div class="product-wish wish">
                                    {singleProduct.category=="plat"&&
                                        <label class="view-label order">{singleProduct.category}</label>}
                                    {singleProduct.category=="epice"&&
                                        <label class="view-label rate">{singleProduct.category}</label>}
                                    {singleProduct.category=="sucré"&&
                                        <label class="view-label sucre">{singleProduct.category}</label>}   
                                    </div>
                                    <div class="product-label">
                    {singleProduct.tag=="nouveau"&&
                    <label className="label-text new">{singleProduct.tag}</label>}
                    {singleProduct.tag=="solde"&&
                    <label className="label-text sale">{singleProduct.tag}</label>}
                    {singleProduct.tag=="populaire"&&
                    <label className="label-text feat">{singleProduct.tag}</label>}
                    </div>
                                    <ul class="preview-slider slider-arrow"> 
                                        <li><img src={singleProduct.photo} alt="product"/></li>
                            
                                    </ul>
                                   
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-6">
                                <div class="view-details">
                                    <h3 class="view-name">
                                        <a href="product-video.html">{singleProduct.name}</a>
                                    </h3>
                                    <div class="view-meta">
                                        
                                        <p>Catégorie:<a href="#">{singleProduct.category}</a></p>
                                    </div>

                                    <h3 class="view-price">
                                        {singleProduct.discount!="0"&&
                                    <>
                                        <del> €{singleProduct.price}</del>
                                        <span> € {Math.round((singleProduct.price-(singleProduct.price*singleProduct.discount)/100)*100)/100}<small></small></span>
                                        </>
                                    }
                                    {singleProduct.discount=="0"&&
                                        <>
                                       
                                        <span> € {singleProduct.price}<small>/{singleProduct.weight} G</small></span>
                                        </>
                                    }
                                    </h3>
                                    <p class="view-desc">{shortenText(singleProduct.description, 180)}</p>
                                    <div class="view-list-group">
                                        <label class="view-list-title">tags:</label>
                                        <ul class="view-tag-list">
                                            <li><a href="#">Tunisien</a></li>
                                            <li><a href="#">Gastronomie</a></li>
                                            <li><a href="#">Home Made</a></li>
                                        </ul>
                                    </div>
                                    <div class="view-add-group">
                                        <button class="product-add" title="Add to Cart" onClick={()=> addToCart(e)}>
                                            <i class="fas fa-shopping-basket"></i>
                                            <span>Ajouter</span>
                                        </button>
                                    </div>
                                    <div class="view-action-group">
                                        <a class="view-wish wish" href="" onClick={() => view(singleProduct.id)} title="Add Your Wishlist" >
                                            <i class="icofont-eye"></i>
                                            <span>Voir plus de détails</span>
                                        </a>
                                    </div>
                                    <br/>
                                    <div class="view-action-group">
                                        <a class="view-wish wish" href="" onClick={()=> addToWish(e)} title="Add Your Wishlist" >
                                            <i class="icofont-heart"></i>
                                            <span>Ajouter au wishlist</span>
                                        </a>
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
                {!isLoading &&products.slice(0,6).map((e) => {
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
                                       <button onClick={() => addToWish(e)} className="product-v"><i className="fas fa-heart" style={{color:"white"}}></i></button>
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

                {blogs.slice(0,1).map((blog, index) =>
                            { const {id, author, longDescription, photo, timestamp, shortDescription, tags, title} = blog
                            
                                return(
                                    <>
                                    <div className="row">
                    <div className="col-lg-12">
                        <div className="blog-slider slider-arrow">
                            <div className="blog-card">
                                <div className="blog-media">
                                    <a className="blog-img" href="#">
                                        <img src={blog.data.photo} alt="blog"/>
                                    </a>
                                </div>
                                <div className="blog-content">
                                    <ul className="blog-meta">
                                        <li>
                                            <i className="fas fa-user"></i>
                                            <span>{blog.data.author}</span>
                                        </li>
                                        <li>
                                            <i className="fas fa-calendar-alt"></i>
                                            <span>february 02, 2021</span>
                                        </li>
                                    </ul>
                                    <h4 className="blog-title">
                                        <a href="blog-details.html">{blog.data.title}</a>
                                    </h4>
                                    <p className="blog-desc">
                                    {blog.data.shortDescription}
                                    </p>
                                    <a className="blog-btn" href="" onClick={() => viewB(id)}>
                                        <span>Lire</span>
                                        <i className="icofont-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                                    </>
                                ) })}
                                  
                


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