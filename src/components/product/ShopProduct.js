import {React, useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import useFetchCollection from '../customHooks/useFetchCollection'
import { STORE_PRODUCTS, selectProducts } from '../../redux/slice/productSlice'
import { SORT_PRODUCTS,selectFilteredProducts,FILTER_BY_CATEGORY,FILTER_BY_SEARCH,FILTER_BY_TAG } from '../../redux/slice/filterSlice'
import { Link, useNavigate } from 'react-router-dom'
import Intro from '../Intro'
import ProductList from './productList'
import { ADD_TO_CART } from '../../redux/slice/cartSlice'
import {  ToastContainer, toast } from "react-toastify";
import { Modal } from 'react-fade-modal';
import Pagination from '../pagination/Pagination';
import { ADD_TO_WISH } from '../../redux/slice/wishSlice'
import { ReturnMeasurement } from '../../firebase.config'


const ShopProduct = () => {
    const {data, isLoading} = useFetchCollection("products")
    const products = useSelector(selectProducts);
    const [isOpen, setIsOpen] = useState(false);
    const [grid, setGrid] = useState(true);
    const [sort, setSort] = useState("latest");
    const [search, setSearch] = useState("");
    const [tag, setTag] = useState("all");
    const [category, setCategory] = useState("all");
    const[singleProduct,setSingleProduct]=useState([])
    const filteredProducts=useSelector(selectFilteredProducts)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    //pagination states
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(8);
    //Get Current Products
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct )
    useEffect(() => {
        dispatch(
            STORE_PRODUCTS({
                products:  data,
            })
          );
    },[dispatch,data]);
    const addToWish = (e) => {
        dispatch(ADD_TO_WISH(e));
               };
   const addToCart = (e) => {
dispatch(ADD_TO_CART(e));
   };
    useEffect(()=>{
        dispatch(SORT_PRODUCTS({products,sort}));
    },[dispatch,products,sort])

    useEffect(()=>{
        dispatch(FILTER_BY_CATEGORY({products,category}));
    },[dispatch,products,category])

    useEffect(()=>{
        dispatch(FILTER_BY_SEARCH({products,search}));
    },[dispatch,products,search])

    useEffect(()=>{
        dispatch(FILTER_BY_TAG({products,tag}));
    },[dispatch,products,tag])

    const clearFilters=()=>{
        setSearch('')
        setCategory('all')
        setTag('all')
        setSort('latest')
    }
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


        
        
        
        
  return (
     <html lang="en">
     <head>
        <meta charset="UTF-8" />
        <meta name="name" content="Cook Tounsi" />
        <meta name="title" content="Cook Tounsi: vente de vos plats tunisiens préférés 2023" />
        <meta name="keywords" content="cuisine, Tunisie, cuisine tunisienne, 
        traditionnel, plats, épices, patisserie, healthy, lifestyle, food,  " />
         <title>Cook Tounsi- Tout les produits</title>
         <link rel="icon" href="assets/images/favicon.png" />
         <link rel="stylesheet" href="assets/fonts/flaticon/flaticon.css" />
         <link rel="stylesheet" href="assets/fonts/icofont/icofont.min.css" />
         <link rel="stylesheet" href="assets/fonts/fontawesome/fontawesome.min.css" />
         <link rel="stylesheet" href="assets/vendor/venobox/venobox.min.css" />
         <link rel="stylesheet" href="assets/vendor/slickslider/slick.min.css" />
         <link rel="stylesheet" href="assets/vendor/niceselect/nice-select.min.css" />
         <link rel="stylesheet" href="assets/vendor/bootstrap/bootstrap.min.css" />
         <link rel="stylesheet" href="assets/css/main.css" />
         
     </head>
     <body>
     <ToastContainer></ToastContainer>
     <div className="backdrop"></div>
               <a class="backtop fas fa-arrow-up" href="#"></a>
            <section class="inner-section single-banner" style={{ backgroundImage: "url(assets/images/banner.jpg)", backgroundRepeat: "no-repeat", backgroundPosition: "center", }}>
                    <div class="container">
                        <h2>Tout Les Produits</h2>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/">Accueil</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">Catalogue des produits</li>
                        </ol>
                    </div>
            </section>
            <section class="inner-section shop-part">
            <div class="container">
                <div class="row content-reverse">
                    <div >
                    <div class="row">
                            <div class="col-lg-12">
                                <div class="top-filter">
                                    <div class="filter-short">
                                        <select class="form-select filter-select" value={tag} onChange={(e)=>setTag(e.target.value)}>
                                            <option value="all" selected>Tout</option>
                                            <option value="populaire">populaire</option>
                                            <option value="nouveau">nouveau</option>
                                            <option value="solde">soldé</option>
                                        </select>
                                    </div>
                                    <div class="filter-short">
                                    <label class="form-label">Trier par:</label>
                                    <select class="form-select" value={sort} onChange={(e)=>setSort(e.target.value)} >
                                        <option value="latest">Les plus récents</option>
                                        <option value="lowest-price">Les moins chers</option>
                                        <option value="highest-price">Les plus chers</option>
                                    </select>
                                    </div>
                                    <div class="filter-short">
                                    <label class="filter-label">Catégory:</label>
                                    <select class="form-select" value={category} onChange={(e)=>setCategory(e.target.value)}>
                                    <option value="all" selected>Tout</option>
                                        <option value="sucré">Patisserie</option>
                                        <option value="plat">Nos Plats</option>
                                        <option value="epice">Nos Epices</option>
                                    </select>
                                    </div>
                                    <div class="filter-action">
                                        <button class="header-widget" onClick={()=>clearFilters()} >
                                            <i className='fas fa-trash'></i></button>
                                    </div>
                                    <div class="filter-action">
                                        <button  className="header-widget" title="Three Column">
                                            <i class="fas fa-th" onClick={()=>setGrid(true)}></i></button>
                                       <button className="header-widget" title="Item List"> 
                                       <i class="fas fa-th-list" onClick={()=>setGrid(false)}>
                                        </i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                            {grid &&
                    <div class="row row-cols-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4">
                        {grid &&currentProducts.map((e) => {
                       const { id, tag, category,photo,name, video, discount, weight, price } = e;
                    return (   
                        
                            <div class="col" key={id}>    
                                <div class="product-card" onClick={()=>ShowItem(e)}>
                                    <div class="product-media">
                                        <div class="product-label">
                                             {tag=="nouveau"&&
                                            <label class="label-text new">{tag}</label>}
                                            {tag=="solde"&&
                                            <label class="label-text sale">{tag}</label>}
                                            {tag=="populaire"&&
                                            <label class="label-text feat">{tag}</label>}
                                        </div>
                                        <button class="product-wish wish">
                                        {category=="Plat"&&
                                            <label class="label-text order">{category}</label>}
                                        {category=="Epice"&&
                                            <label class="label-text rate">{category}</label>}
                                        {category=="Sucré"&&
                                            <label class="label-text sucre">{category}</label>}
                                        {category=="Boisson"&&
                                            <label class="label-text drink">{category}</label>}
                                        </button>
                                        <a class="product-image">
                                            <img src={photo} alt="product"/>
                                        </a>
                                        <div className="product-widget">
                                        <button onClick={() => ShowItem(e)} className="product-v"  ><i className="fas fa-eye" style={{color:"white"}}></i></button>
                                        <a title="Product Video" href={video} className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                       <button onClick={() => addToWish(e)} className="product-v"><i className="fas fa-heart" style={{color:"white"}}></i></button>
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
                            <label className="label-text sucre">{singleProduct.category}</label>}
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
                                    </div>
                                    <div class="product-content">
                                      
                                            <i class="product-mass">{weight} {ReturnMeasurement(category)}</i>
                                      
                                        <h6 class="product-name">
                                            <a href="">{name}</a>
                                        </h6>
                                        <h6 class="product-price">
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
                                    }
                                        </h6>
                                        <button class="product-add" title="Add to Cart" 
                                        onClick={()=> addToCart(e)}>
                                            <i class="fas fa-shopping-basket"></i>
                                            <span>Ajouter</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                               );
                              })}
                    </div>
                    
                    }
                    
                            </div>
                        </div>
                     
                    {!grid &&products.map((e) => {
                       const { id, tag, category,photo,name, discount, price,description } = e;
                    return (
                        <>  
                        <div className="row" key={id}>
                        <div class="col">
                           <div class="product-standard">
                               <div class="standard-media">
                               <div class="product-label">
                                       {tag=="nouveau"&&
                                   <label class="label-text new">{tag}</label>}
                                   {tag=="solde"&&
                                   <label class="label-text sale">{tag}</label>}
                                   {tag=="populaire"&&
                                   <label class="label-text feat">{tag}</label>}
                               </div>
                               <button class="product-wish wish">
                               {category=="Plat"&&
                                   <label class="label-text order">{category}</label>}
                               {category=="Epice"&&
                                   <label class="label-text rate">{category}</label>}
                                {category=="Boisson"&&
                                   <label class="label-text rate">{category}</label>}
                               {category=="Sucré"&&
                                   <label class="label-text sucre">{category}</label>}
                               </button>
                                   <a class="standard-image" href="product-video.html" >
                                       <img src={photo} alt="product" style={{ borderRadius: "10px" }} />
                                   </a>
                                   <div class="standard-widget">
                                       <a title="Product Compare" onClick={() => addToWish(e)} class="fas fa-heart"></a>
                                       <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" class="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                       <a title="Product View" onClick={() => ShowItem(e)} class="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                   </div>
                    {isOpen &&<Modal modalCss = {"myModal"}
                     setIsOpen={setIsOpen}>  
                   <div className="row" >
                       <div class="col">
                           <div class="product-standard">
                               <div class="standard-media">
                                       <img class="product-image" src={singleProduct.photo} style={{width:"250px", borderRadius:"8px"}} alt="product"/>
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
                                   {singleProduct.discount!="0"&&
                                               <>
                                                   <del> €{singleProduct.price}</del>
                                                   <span> € {Math.round((singleProduct.price-(singleProduct.price*singleProduct.discount)/100)*100)/100}<small></small></span>
                                                   </>
                                               }
                                               {singleProduct.discount=="0"&&
                                                   <>
                                                   <span> € {singleProduct.price}<small></small></span>
                                                   </>
                                               } 
                                   </h5>
                                   <p class="standard-desc">{singleProduct.description}</p>
                                   <div class="standard-action-group">
                                       <button class="product-add" title="Add to Cart" onClick={()=> addToCart(e)}>
                                           <i class="fas fa-shopping-basket"></i>
                                           <span>Ajouter</span>
                                       </button>
                                       <button class="standard-wish wish" title="Add to Wishlist">
                                           <i class="fas fa-heart"></i>
                                           <span>Ajouter au wishlist</span>
                                       </button>
                               <button class="standard-wish wish" title="Add to Wishlist" onClick={() => view(e.id)}>
                               <i class="fas fa-eye"></i>
                                Plus de Détails
                                       </button>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                     </Modal>}
                               </div>
                               <div class="standard-content">
                                   <h4 class="standard-name">
                                       <a href="" onClick={() => ShowItem(e)}>{name}</a>
                                   </h4>
                                   <h5 class="standard-price">
                                   {discount!="0"&&
                                               <>
                                                   <del> €{price}</del>
                                                   <span> € {Math.round((price-(price*discount)/100)*100)/100}<small></small></span>
                                                   </>
                                               }
                                               {discount=="0"&&
                                                   <>
                                                  
                                                   <span> € {price}</span>
                                                   </>
                                               }
                                   </h5>
                                   
                                   <p class="standard-desc">{shortenText(description, 350)}</p>
                                   <div class="standard-action-group">
                                       <button class="product-add" title="Add to Cart" onClick={()=> addToCart(e)}>
                                           <i class="fas fa-shopping-basket"></i>
                                           <span>Ajouter au chariot</span>
                                       </button>
                                       <div class="product-action">
                                           <button class="action-minus" title="Quantity Minus"><i class="icofont-minus"></i></button>
                                           <input class="action-input" title="Quantity Number" type="text" name="quantity" value="1"/>
                                           <button class="action-plus" title="Quantity Plus"><i class="icofont-plus"></i></button>
                                       </div>
                                       <button class="standard-wish wish" title="Add to Wishlist" onClick={() => ShowItem(e)}>
                                           <i class="fas fa-eye"></i>
                                           <span>Plus de Détails</span>
                                       </button>
                                       <button class="standard-wish wish" title="Add to Wishlist" onClick={() => addToWish(e)} >
                                           <i class="fas fa-heart"></i>
                                           <span>Ajouter au Wishlist</span>
                                       </button>
                                   </div>
                               </div>
                           </div>
                       </div>
                       </div>
                       </>
                               );
                              })}  
                  </div>
                </div>
                <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                productsPerPage={productsPerPage}
                totalProducts={filteredProducts.length}
                />
            </div>
            </section>

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
  )
}

export default ShopProduct