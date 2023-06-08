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
        <meta charSet="UTF-8" />
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
               <a className="backtop fas fa-arrow-up" href="#"></a>
            <section className="inner-section single-banner" style={{ backgroundImage: "url(assets/images/banner.jpg)", backgroundRepeat: "no-repeat", backgroundPosition: "center", }}>
                    <div className="container">
                        <h2>Tout Les Produits</h2>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Accueil</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Catalogue des produits</li>
                        </ol>
                    </div>
            </section>
            <section className="inner-section shop-part">
            <div className="container">
                <div className="row content-reverse">
                    <div >
                    <div className="row">
                            <div className="col-lg-12">
                                <div className="top-filter">
                                    <div className="filter-short">
                                        <select className="form-select filter-select" value={tag} onChange={(e)=>setTag(e.target.value)}>
                                            <option value="all" selected>Tout</option>
                                            <option value="populaire">populaire</option>
                                            <option value="nouveau">nouveau</option>
                                            <option value="solde">soldé</option>
                                        </select>
                                    </div>
                                    <div className="filter-short">
                                    <label className="form-label">Trier par:</label>
                                    <select className="form-select" value={sort} onChange={(e)=>setSort(e.target.value)} >
                                        <option value="latest">Les plus récents</option>
                                        <option value="lowest-price">Les moins chers</option>
                                        <option value="highest-price">Les plus chers</option>
                                    </select>
                                    </div>
                                    <div className="filter-short">
                                    <label className="filter-label">Catégory:</label>
                                    <select className="form-select" value={category} onChange={(e)=>setCategory(e.target.value)}>
                                    <option value="all" selected>Tout</option>
                                        <option value="Sucré">Patisserie</option>
                                        <option value="Plat">Nos Plats</option>
                                        <option value="Epice">Nos Epices</option>
                                        <option value="Boisson">Nos Boissons</option>
                                    </select>
                                    </div>
                                    <div className="filter-action">
                                        <button className="header-widget" onClick={()=>clearFilters()} >
                                            <i className='fas fa-trash'></i></button>
                                    </div>
                                    <div className="filter-action">
                                        <button  className="header-widget" title="Three Column">
                                            <i className="fas fa-th" onClick={()=>setGrid(true)}></i></button>
                                       <button className="header-widget" title="Item List"> 
                                       <i className="fas fa-th-list" onClick={()=>setGrid(false)}>
                                        </i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                            {grid &&
                    <div className="row row-cols-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4">
                        {grid &&currentProducts.map((e) => {
                       const { id, tag, category,photo,name, video, discount, weight, price } = e;
                    return (   
                        
                            <div className="col" key={id}>    
                                <div className="product-card" onClick={()=>ShowItem(e)}>
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
                                            <label className="label-text sucre">{category}</label>}
                                        {category=="Boisson"&&
                                            <label className="label-text drink">{category}</label>}
                                        </button>
                                        <a className="product-image">
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
                                    <div className="product-content">
                                      
                                            <i className="product-mass">{weight} {ReturnMeasurement(category)}</i>
                                      
                                        <h6 className="product-name">
                                            <a href="">{name}</a>
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
                                    }
                                        </h6>
                                        <button className="product-add" title="Add to Cart" 
                                        onClick={()=> addToCart(e)}>
                                            <i className="fas fa-shopping-basket"></i>
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
                        <div className="col">
                           <div className="product-standard">
                               <div className="standard-media">
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
                                {category=="Boisson"&&
                                   <label className="label-text rate">{category}</label>}
                               {category=="Sucré"&&
                                   <label className="label-text sucre">{category}</label>}
                               </button>
                                   <a className="standard-image" href="product-video.html" >
                                       <img src={photo} alt="product" style={{ borderRadius: "10px" }} />
                                   </a>
                                   <div className="standard-widget">
                                       <a title="Product Compare" onClick={() => addToWish(e)} className="fas fa-heart"></a>
                                       <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                       <a title="Product View" onClick={() => ShowItem(e)} className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
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
                               <div className="standard-content">
                                   <h4 className="standard-name">
                                       <a href="" onClick={() => ShowItem(e)}>{name}</a>
                                   </h4>
                                   <h5 className="standard-price">
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
                                   
                                   <p className="standard-desc">{shortenText(description, 350)}</p>
                                   <div className="standard-action-group">
                                       <button className="product-add" title="Add to Cart" onClick={()=> addToCart(e)}>
                                           <i className="fas fa-shopping-basket"></i>
                                           <span>Ajouter au chariot</span>
                                       </button>
                                       <div className="product-action">
                                           <button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button>
                                           <input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/>
                                           <button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button>
                                       </div>
                                       <button className="standard-wish wish" title="Add to Wishlist" onClick={() => ShowItem(e)}>
                                           <i className="fas fa-eye"></i>
                                           <span>Plus de Détails</span>
                                       </button>
                                       <button className="standard-wish wish" title="Add to Wishlist" onClick={() => addToWish(e)} >
                                           <i className="fas fa-heart"></i>
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