import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link,useLocation,useNavigate, useParams } from "react-router-dom";
import { auth, db, logout,ReturnMeasurement } from "../firebase.config";
import Loader from "../components/loader/Loader";
import Intro from "../components/Intro";
import MyModal from "../components/Modal";
import { useSelector, useDispatch } from "react-redux";
import useFetchCollection from "../components/customHooks/useFetchCollection";
import { STORE_PRODUCTS, selectProducts } from "../redux/slice/productSlice";
import { ADD_TO_CART } from "../redux/slice/cartSlice";
import { ADD_TO_WISH, selectWishItems } from "../redux/slice/wishSlice";
import {Modal} from 'react-fade-modal';
import { query, onSnapshot } from "firebase/firestore";
import { collection } from "firebase/firestore";
import ContactUs from "../components/ContactUs";



function Dashboard() {
    const [blogs, setBlogs] = useState([]);
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const[singleProduct,setSingleProduct]=useState([])
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false)
    const [isVideo, setIsVideo] = useState(false)
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
        setSingleProduct(e);
        setIsOpen(true);
           }
    const ShowVideo=(e)=>{
    setSingleProduct(e);
    setIsVideo(true);
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
                <meta charSet="UTF-8" />
                <meta name="name" content="Cook Tounsi" />
                <meta name="title" content="Cook Tounsi: vente de vos plats tunisiens préférés 2023" />
                <meta name="keywords" content="cuisine, Tunisie, cuisine tunisienne, 
                traditionnel, plats, épices, patisserie, healthy, lifestyle, recettes,
                 food, livraison, ماكلة تونسية , أطباق , معلبة, " />
                <title>Cook Tounsi- Accueil</title>
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
                <a className="backtop fas fa-arrow-up" href="/"></a>
                
            <section className="home-classic-slider slider-arrow">
                    <div className="banner-part" 
                    style={{ backgroundImage: "url(assets/images/Chef01.png)", backgroundRepeat: "no-repeat", backgroundPosition: "center", borderRadius: "10px" }}>
                    <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-lg-6">
                            <div className="banner-content">
                                <h3 style={{color:"white"}}>
                                كي تتوحش ريحة البلاد و الماكلة التونسية البنينة كلمنا و خلي الباقي علينا 
</h3><br/>
                                <p> نحطو على ذمتكم أطباق معلبة، حلو و مشروبات تونسية بوصفات زمنية. التوصيل متوفر لثلاثة بلدان أوروبية
</p>
                                <div className="banner-btn">
                                <Link to="/ShopProduct"><a className="btn btn-inline">
                                        <i className="fas fa-shopping-basket"></i>
                                        <span>Achat</span>
                                    </a></Link>
                                    <Link to="/ShopProduct"><a style={{visibility:"hidden"}} className="">
                                        
                                        <span>A</span>
                                    </a></Link>
                                    <Link to="/Contact">  <a className="btn btn-outline">
                                   <i className="icofont-ui-email"></i>
                                        <span>Contact</span>
                                    </a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    </div>
            </section>


            <section className="inner-section contact-part">
                <div className="container">
                <div className="row">
                <div className="col-lg-12">
                            <div className="section-heading">
                                <h2>
                Nous Offrons une panoplie de produits  
                                </h2>
                            </div>
                        </div>
                            <div className="col-sm-6 col-md-6 col-lg-3">
                                    <div className="branch-card">
                                        <img src="assets/images/product/P19.jpg" alt="branch" />
                                        <div className="branch-overlay">
                                            <h3>Epicerie</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-3">
                                    <div className="branch-card">
                                        <img src="assets/images/product/P23.jpg" alt="branch" />
                                        <div className="branch-overlay">
                                            <h3>Boissons</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-3">
                                    <div className="branch-card">
                                        <img src="assets/images/product/P2.jpeg" alt="branch" />
                                        <div className="branch-overlay">
                                            <h3>Plats</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-3">
                                    <div className="branch-card">
                                        <img src="assets/images/product/P24.png" alt="branch" />
                                        <div className="branch-overlay">
                                            <h3>Pâtisserie</h3>
                                        </div>
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
                            <a href=""><img src="assets/images/Dbara.png" alt="Cook Tounsi"/></a>
                        </div>
                    </div>
                </div>
            </div>
            </div>

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
                       const { id, weight, tag, category, photo, name, price, video, discount, description,searchTags } = e;
                       let concatenatedString = '';
                       if(searchTags&& searchTags.length>0){
                        searchTags.forEach((element) => {
                            
                            concatenatedString+=  element ;
                          });
                       }
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
                                    {category=="Plat"&&
                                            <label className="label-text order">{category}</label>}
                                        {category=="Epice"&&
                                            <label className="label-text rate">{category}</label>}
                                        {category=="Sucré"&&
                                            <label className="label-text sucre">Pâtisserie</label>}
                                        {category=="Boisson"&&
                            <label className="label-text drink">{category}</label>}
                                    </button>
                                    <a className="product-image"  onClick={() => ShowItem(e)}>
                                        <img src={photo} meta={concatenatedString} alt={name}/>
                                    </a>
                                    <div className="product-widget">
                                        <button onClick={() => ShowItem(e)} className="product-v"  ><i className="fas fa-eye" style={{color:"white"}}></i></button>
                                        <a  href={video} className="venobox fas fa-play"></a>
                                       <button onClick={()=> addToWish(e)} className="product-v"><i className="fas fa-heart" style={{color:"white"}}></i></button>
                                    </div>
                                </div>
    {isOpen && <Modal modalCss = {"myModal"}

          setIsOpen={setIsOpen} >  
                    <div >
                        <div className="row" key={singleProduct.id}>
                            <div className="col-md-6 col-lg-6">
                <div className="view-gallery">
                    <button className="product-wish wish">
                    {singleProduct.category=="Plat"&&
                            <label className="label-text order">{singleProduct.category}</label>}
                    {singleProduct.category=="Epice"&&
                            <label className="label-text rate">{singleProduct.category}</label>}
                    {singleProduct.category=="Sucré"&&
                            <label className="label-text sucre">Pâtisserie</label>}
                    {singleProduct.category=="Boisson"&&
                            <label className="label-text drink">{singleProduct.category}</label>}
                    </button>
                    <div className="product-label">
                    {singleProduct.tag=="nouveau"&&
                    <label className="label-text new">{singleProduct.tag}</label>}
                    {singleProduct.tag=="solde"&&
                    <label className="label-text sale">{singleProduct.tag}</label>}
                    {singleProduct.tag=="populaire"&&
                    <label className="label-text feat">{singleProduct.tag}</label>}
                    </div>
                        <ul className="preview-slider"> 
                            <li><img src={singleProduct.photo} alt="product"/>
                            </li>
                        </ul>
                        </div>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <div className="view-details">
                                    <h3 className="view-name">
                                        <a href="">{singleProduct.name}</a>
                                    </h3>
                                    <div className="view-meta">
                                        
                                        <p>Catégorie:<a href="">{singleProduct.category}</a></p>
                                    </div>
                                    <h3 className="view-price">
                                        {singleProduct.discount!="0"&&
                                    <>
                                        <del> €{singleProduct.price}</del>
                                        <span> € {Math.round((singleProduct.price-(singleProduct.price*singleProduct.discount)/100)*100)/100}<small></small></span>
                                        </>
                                    }
                                    {singleProduct.discount=="0"&&
                                        <>
                                       
                                        <span> € {singleProduct.price}<small>/{singleProduct.weight} {ReturnMeasurement(singleProduct.category)}</small></span>
                                        </>
                                    }
                                    </h3>
                                    <p className="view-desc">{shortenText(singleProduct.description, 100)}</p>
                                    <div className="view-list-group">
                                        <label className="view-list-title">tags:</label>
                                        <ul className="view-tag-list">
                                            <li><a href="">Tunisien</a></li>
                                            <li><a href="">Gastronomie</a></li>
                                        </ul>
                                    </div>
                                    <div className="view-add-group">
                                        <button className="product-add" onClick={()=> addToCart(e)} title="Add to Cart" >
                                            <i className="fas fa-shopping-basket"></i>
                                            <span>Ajouter</span>
                                        </button>
                                    </div>
                                    <div className="view-action-group">
                                        <a className="view-wish wish" href="" onClick={() => view(singleProduct.id)} title="Add Your Wishlist" >
                                            <i className="icofont-eye"></i>
                                            <span>Voir plus de détails</span>
                                        </a>
                                    </div>
                                    <div className="view-add-group">
                                        <button className="product-add" onClick={()=> addToWish(e)} title="Ajouter au wishlis" >
                                            <i className="icofont-heart"></i>
                                            <span>Ajouter au wishlist</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    </Modal>}
                                <div className="product-content">
                                    <div className="product-rating">
                                    <i className="product-price" href="">{weight} {ReturnMeasurement(category)}</i>
                                    </div>
                                    <h6 className="product-name">
                                        <a >{name}</a>
                                    </h6>
                                    <h6 className="product-price">
                                    {parseInt(discount)!= 0 &&
                                    <>
                                        <del> €{price}</del>
                                        <span> € {Math.round((price-(price*discount)/100)*100)/100}<small></small></span>
                                        </>
                                    }
                                    {parseInt(discount)== 0 &&
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
            
            <section className="section blog-part">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                    <div className="section-heading">
                            <h2>   </h2>
                        </div>
                        <div className="section-heading">
                            <h2>Lire nos blogs</h2>
                        </div>
                    </div>
                </div>

                {blogs.slice(0,1).map((blog, index) =>
                            { const {id, author, photo1, timestamp, shortDescription, tags, title} = blog
                            
                                return(
                                    <>
                                    <div className="row">
                    <div className="col-lg-12">
                        <div className="blog-slider slider-arrow">
                            <div className="blog-card">
                                <div className="blog-media">
                                    <a className="blog-img" href="" onClick={() => viewB(id)}>
                                        <img src={blog.data.photo1} alt="blog"/>
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
                                        <a href="" onClick={() => viewB(id)}>{blog.data.title}</a>
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
                        <Link to="/Blog"> <a href="" className="btn btn-outline">
                                <i className="fas fa-eye"></i>
                                <span> Voir tous les blogs</span>
                            </a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

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
                       const { id, tag, category,discount, video, photo,name,price, weight, description } = e;
                      
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
                                {category=="Plat"&&
                                            <label className="label-text order">{category}</label>}
                                {category=="Epice"&&
                                            <label className="label-text rate">{category}</label>}
                                {category=="Boisson"&&
                                            <label className="label-text drink">{category}</label>}
                                {category=="Sucré"&&
                                            <label className="label-text sucre">Pâtisserie</label>}
                                </button>
                                <a className="feature-image" onClick={() => ShowItem(e)}>
                                    <img src={photo} style={{ borderRadius:"5px"}} alt={name}/>
                                </a>
                                <div className="feature-widget">
                                <button onClick={() => ShowItem(e)} className="product-v"  ><i className="fas fa-eye" style={{color:"white"}}></i></button>
                                        <a title="Product Video" href={video} className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                       <button onClick={() => addToWish(e)} className="product-v"><i className="fas fa-heart" style={{color:"white"}}></i></button>
                                </div>
                            </div>
                            <div className="feature-content">
                                <h6 className="product-name">
                                    <a href="">{name}</a>
                                </h6>
                                <h6 className="feature-price">
                                {discount!="0"&&
                                    <>
                                        <del> €{price}</del>
                                        <span> € {Math.round((price-(price*discount)/100)*100)/100}<small></small></span>
                                        </>
                                    }
                                    {discount=="0"&&
                                        <>
                                       
                                        <span> € {price} <small></small></span>
                                        </>
                                    }
                                </h6>
                                <h6 className="product-name">
                                   <a href=""> {weight} {ReturnMeasurement(category)} </a>
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
        
       <ContactUs />

        

       
        <Intro/>
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