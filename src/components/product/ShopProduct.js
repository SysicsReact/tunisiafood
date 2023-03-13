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
import Pagination from '../pagination/Pagination'


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
                            <li class="breadcrumb-item active" aria-current="page">Shop</li>
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
                                    <option value="all" selected>All</option>
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
                            </div>
                        </div>
                        {grid &&
                    <div class="row row-cols-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4">
                        {grid &&currentProducts.map((e) => {
                       const { id, tag, category,photo,name,discount, weight, price } = e;
                    return (    
                            <div class="col" key={id}>    
                                <div class="product-card">
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
                                        {category=="plat"&&
                                            <label class="label-text order">{category}</label>}
                                        {category=="epice"&&
                                            <label class="label-text rate">{category}</label>}
                                        {category=="sucré"&&
                                            <label class="label-text sucre">{category}</label>}
                                        </button>
                                        <a class="product-image" href="product-video.html">
                                            <img src={photo} alt="product"/>
                                        </a>
                                        <div className="product-widget">
                                        <button onClick={() => ShowItem(e)} className="product-v"  ><i className="fas fa-eye" style={{color:"white"}}></i></button>
                                        <a title="Product Video" href="" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                       <button onClick={() => ShowItem(e)} className="product-v"><i className="fas fa-heart" style={{color:"white"}}></i></button>
                                    </div>
                                    {isOpen &&<Modal
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
                                                    <p class="standard-desc">{shortenText(singleProduct.description, 250)}</p>
                                                    <div class="standard-action-group">
                                                        <button class="product-add" title="Add to Cart" onClick={()=> addToCart(e)}>
                                                            <i class="fas fa-shopping-basket"></i>
                                                            <span>Ajouter</span>
                                                        </button>
                                                        <button class="standard-wish wish" title="Add to Wishlist">
                                                            <i class="fas fa-heart"></i>
                                                            <span>Ajouter au wishlist</span>
                                                        </button>
                                                <button class="standard-wish wish" title="Add to Wishlist" onClick={() => view(e.id)}><a href="">
                                                Plus de Détails</a>
                                            
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </Modal>}
                                    </div>
                                    <div class="product-content">
                                      
                                            <i class="product-mass">{weight} G</i>
                                      
                                        <h6 class="product-name">
                                            <a href="product-video.html">{name}</a>
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
                    {!grid &&products.map((e) => {
                       const { id, tag, category,photo,name,price,description } = e;
                    return (
                        
                        <ProductList {...products} />
                               );
                              })}  
                <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                productsPerPage={productsPerPage}
                totalProducts={filteredProducts.length}
                />
                </div>
                </div>
            
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