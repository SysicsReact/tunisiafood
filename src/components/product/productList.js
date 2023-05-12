import {useState, React } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { selectProducts } from '../../redux/slice/productSlice';
import { Modal } from 'react-fade-modal';
import { useNavigate } from 'react-router-dom';
import { ADD_TO_CART } from '../../redux/slice/cartSlice';

const ProductList= ()=> {
    const products = useSelector(selectProducts);
    const [isOpen, setIsOpen] = useState(false);
    const[singleProduct,setSingleProduct]=useState([])
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const ShowItem=(e)=>{
    //alert(e);
    setSingleProduct(e);
    setIsOpen(true)
        }
    const view = async (idp) => {
    navigate("/ProductItems", { state: { id: idp } });
            };
    const addToCart = (e) => {
    dispatch(ADD_TO_CART(e));
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
        <link rel="stylesheet" href="assets/css/profile.css" />
    </head>
    
        {products.slice(0,10).map((e) => {
                       const { id, weight, tag, category, photo, name, price, discount, description } = e;
                      
                    return (
                        <>  
             <div className="row">
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
                    {category=="plat"&&
                        <label class="label-text order">{category}</label>}
                    {category=="epice"&&
                        <label class="label-text rate">{category}</label>}
                    {category=="sucré"&&
                        <label class="label-text sucre">{category}</label>}
                    </button>
                        <a class="standard-image" href="product-video.html" >
                            <img src={photo} alt="product" style={{ borderRadius: "10px" }} />
                        </a>
                        <div class="standard-widget">
                            <a title="Product Compare" href="compare.html" class="fas fa-random"></a>
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
                    <div class="standard-content">
                        <h4 class="standard-name">
                            <a href="product-video.html">{name}</a>
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
                                       
                                        <span> € {price}<small></small></span>
                                        </>
                                    }
                        </h5>
                        
                        <p class="standard-desc">{shortenText(description, 150)}</p>
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
                            <button class="standard-wish wish" title="Add to Wishlist">
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

</html>
  )
}

export default ProductList