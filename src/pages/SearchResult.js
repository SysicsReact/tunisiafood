import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_FROM_WISH, selectWishItems } from "../redux/slice/wishSlice";
import { ADD_TO_CART } from "../redux/slice/cartSlice";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const SearchResult = () => {
    const navigate = useNavigate();
    const wishItems = useSelector(selectWishItems);
    const dispatch = useDispatch();
    const [searchResults, setSearchResults] = useState([]);
    const addToCart = (wish) => {
        dispatch(
            ADD_TO_CART(wish),
            );
           };

    useEffect(() => {
      // Retrieve the stored result array from local storage
      const storedResults = localStorage.getItem('searchResults');
  
      if (storedResults) {
        setSearchResults(JSON.parse(storedResults));
      }
    }, []);

    return (
        <>
          <head>
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
          <link rel="stylesheet" href="assets/css/checkout.css"></link>
          <link rel="stylesheet" href="assets/css/home-classic.css" />
          </head>
          <Helmet>
          <meta charSet="UTF-8" />
            <title>Cook Tounsi - Résultats de recherche</title>
            <meta name="name" content="Cook Tounsi" />
            <meta name="title" content="Cook Tounsi- Résultats de recherche" />
            <meta name="keywords" content="cuisine, Tunisie, cuisine tunisienne, 
                traditionnel, plats, épices, patisserie, healthy, lifestyle, recettes,
                    food, livraison, ماكلة تونسية , أطباق , معلبة, "  />
            <meta property="og:title" content="Cook Tounsi - Résultats de recherche" />
            <meta property="og:image" content="assets/images/about/1.jpg" />
          </Helmet>
          <body>
          <div className="backdrop"></div>
                <a className="backtop fas fa-arrow-up" href="#"></a>
                <section className="inner-section single-banner" style={{ backgroundImage: "url(assets/images/spices.jpg)", backgroundRepeat: "no-repeat", backgroundPosition: "center", }}>
                    <div className="container">
                        <h2>Résultat de recherche</h2>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Accueil</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Résultat de recherche</li>
                        </ol>
                    </div>
                </section>

   
             <section className="inner-section checkout-part">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="account-card">
                            <div className="account-content">
                                <div className="table-scroll">
                                    <table className="table-list">
                                    <thead>
                                    <tr>
                                        <th scope="col">Produit</th>
                                        <th scope="col">Nom</th>
                                        <th scope="col">Prix</th>
                                        <th scope="col">Acheter</th>
                                     
                                    </tr>
                                </thead>
                                {searchResults.map((wish, index) => {
                            const { id, name, price, photo,} = wish;
                            return (
                                <>
                                        <tbody>
                                            <tr>
                                        <td className="table-image"><img src={photo} alt="product"/></td>
                                        <td className="table-name"><h6>{name}</h6></td>
                                        <td className="table-price"><h6>${price}</h6></td>
                                        <td className="table-shop">
                                            <button className="product-add" title="Ajouter" onClick={() => addToCart(wish)} >Ajouter</button>
                                        </td>
                                        
                                    </tr>
                                        </tbody>
                                </>)
                        })}
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
                
            </div>
               </section>
               
        </body>
        </>
    )
}
export default SearchResult;