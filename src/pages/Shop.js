import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createProduct } from "../store/actions/productActions";
import { toast } from "react-toastify";
import { collection, doc, getDoc, getDocs, onSnapshot, orderBy, query, QuerySnapshot } from "firebase/firestore";
import { db } from "../firebase.config";
import Loader from "../components/loader/Loader";
import Intro from "../components/Intro";
function selectItem(state) { 
    return state.products.map(product => product)
  }
                //
               
                const  GetAllProds = async (state)=>{
                    
                   // state.setState({isLoading:true})
                   state.setState({isLoading:true})
                    const prodsRef = collection(db, "products");
                  
                    const querySnapshot = await getDocs(prodsRef);
                    if (!querySnapshot.empty){
                        querySnapshot.forEach((doc) => {
                            // doc.data() is never undefined for query doc snapshots
                            console.log(doc.id, " => ", doc.data());
                          }); 
                         
                         //return querySnapshot;
                    }
                    else{
                       // return null;
                    }

                }
                
          
                //
  const selectItemsWhoseNamesStartWith = (items, namePrefix) =>
  items.filter(item => item.decription==namePrefix)
class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prods: {},
            isLoading:false
        };
      }
     
    render()
    {
        //this.setState({isLoading:true})
        //GetAllProds(this.state)
       
        const  products  = selectItem(this.props);
        const productsbydesc=selectItemsWhoseNamesStartWith(selectItem(this.props),"Stupid ugly Burger")
        console.log(productsbydesc)
        //hey(selectItem(this.props))
       /* ps(this.props);
        //console.log(test(selectItemsWhoseNamesStartWith(this.props,1)))
        console.log(selectItem(this.props))
        for (let index = 0; index < this.props.products.length; index++) {
            console.log(selectItemsWhoseNamesStartWith(this.props,index+1));
            
        }*/
        

       
    return (
        <html lang="en">
            <head>

                <meta charSet="UTF-8" />
                <meta name="title" content="Tunisian Food" />
                <meta name="keywords" content="organic, food, shop, ecommerce, store, agriculture, vegetables, farm, grocery, natural, online store" />

                <title>Tunisian Food - Shop</title>

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
                
                <section className="inner-section single-banner" style={{ backgroundImage: "url(assets/images/banner.jpg)", backgroundRepeat: "no-repeat", backgroundPosition: "center", }}>
                    <div className="container">
                        <h2>Tout Les Produits</h2>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Accueil</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Shop</li>
                        </ol>
                    </div>
                </section>
                <section>
                    <div>
                    {products.map(product => (
            <p key={product.id}>
              {product.name} : {product.price}
            </p>
          ))}
                    </div>
                </section>
                <section className="inner-section shop-part">
            <div className="container">
                <div className="row content-reverse">
                    <div className="col-lg-3">
                        <div className="shop-widget">
                            <h6 className="shop-widget-title">Filter</h6>
                            <form>
                                <div className="shop-widget-group">
                                    <input type="text" placeholder="Min - 00"/>
                                    <input type="text" placeholder="Max - 5k"/>
                                </div>
                                <button className="shop-widget-btn">
                                    <i className="fas fa-search"></i>
                                    <span>Chercher</span>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="row">
                            <div className="col-lg-12">
                            </div>
                        </div>
                        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-3">
                            {products.map(product=>
                                (
                                <div className="col">
                                <div className="product-card">
                                    <div className="product-media">
                                        <div className="product-label">
                                            <label className="label-text new">new</label>
                                        </div>
                                        <button className="product-wish wish">
                                            <i className="fas fa-heart"></i>
                                        </button>
                                        <a className="product-image" href="product-video.html">
                                            <img src="assets/images/product/01.jpg" alt="product"/>
                                        </a>
                                        <div className="product-widget">
                                            <a title="Product Compare" href="compare.html" className="fas fa-random"></a>
                                            <a title="Product Video" href="https://youtu.be/9xzcVxSBbG8" className="venobox fas fa-play" data-autoplay="true" data-vbtype="video"></a>
                                            <a title="Product View" href="#" className="fas fa-eye" data-bs-toggle="modal" data-bs-target="#product-view"></a>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="product-rating">
                                            <i className="active icofont-star"></i>
                                            <i className="active icofont-star"></i>
                                            <i className="active icofont-star"></i>
                                            <i className="active icofont-star"></i>
                                            <i className="icofont-star"></i>
                                            <a href="product-video.html">(3)</a>
                                        </div>
                                        <h6 className="product-name">
                                            <a href="product-video.html" key={product.id}>{product.name}</a>
                                        </h6>
                                        <h6 className="product-price">
                                            <del>${product.price}</del>
                                            <span>$28<small>/piece</small></span>
                                        </h6>
                                        <button className="product-add" title="Add to Cart">
                                            <i className="fas fa-shopping-basket"></i>
                                            <span>add</span>
                                        </button>
                                        <div className="product-action">
                                            <button className="action-minus" title="Quantity Minus"><i className="icofont-minus"></i></button>
                                            <input className="action-input" title="Quantity Number" type="text" name="quantity" value="1"/>
                                            <button className="action-plus" title="Quantity Plus"><i className="icofont-plus"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                )
                                )}
                            
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="bottom-paginate">
                                    <p className="page-info">Showing 12 of 60 Results</p>
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                <i className="fas fa-long-arrow-alt-left"></i>
                                            </a>
                                        </li>
                                        <li className="page-item"><a className="page-link active" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item">...</li>
                                        <li className="page-item"><a className="page-link" href="#">60</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                <i className="fas fa-long-arrow-alt-right"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                </section>
                <Intro></Intro>
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
}
const mapStateToProps = (state) =>{
    return{
        products: state.product.products
    }
}

export default connect(mapStateToProps) (Shop);