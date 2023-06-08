import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { db } from '../firebase.config';
import { query, where, onSnapshot,collection, documentId, doc } from "firebase/firestore";


function BlogDetails() {

     const Location = useLocation(); 
     var idBlog = Location.state.id;
     const [blog, setBlog] = useState(null);
     useEffect(() => {
          const q = query(
              collection(db, "blogs"),
              where(documentId(), "==", idBlog)
            );
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
              querySnapshot.forEach((doc) => {
                setBlog(doc.data());
              });
            });
      }, [idBlog]);
      const shortenText = (text, n) => {
          if (text.length > n) {
              const shortenedText = text.substring(0, n).concat("...");
              return shortenedText;
          }
          return text;
          };
  return (
    <html>
      <head>
                <meta charSet="UTF-8" />
                <meta name="name" content="Cook Tounsi" />
        <meta name="title" content="Cook Tounsi: vente de vos plats tunisiens préférés 2023" />
        <meta name="keywords" content="cuisine, Tunisie, cuisine tunisienne, 
        traditionnel, plats, épices, patisserie, healthy, lifestyle, food,  " />
                <title>Blog - Cook Tounsi</title>
                <link rel="icon" href="assets/images/cook.png" />
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
                <link rel="stylesheet" href="assets/css/blog-details.css" />
            </head>
          <body>
          <div className="backdrop"></div>
               <a className="backtop fas fa-arrow-up" href="#"></a>
          <section className="inner-section single-banner" style={{ backgroundImage: "url(assets/images/spices.jpg)", backgroundRepeat: "no-repeat", backgroundPosition: "center", }}>
            <div className="container">
                <h2>blogs</h2>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Accueil</Link></li>
                    <li className="breadcrumb-item active" aria-current="page"><Link to="/Blog">Tout les blogs</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Détails</li>
                </ol>
            </div>
          </section>
            <section className="inner-section blog-details-part">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12 col-xl-10">
                    {blog &&
                  <>
                        <article className="blog-details">
                            <a className="blog-details-thumb" href="">
                                <img src={blog.photo} alt="blog"/>
                            </a>
                            <div className="blog-details-content">
                                <ul className="blog-details-meta">
                                    <li>
                                        <i className="icofont-ui-calendar"></i>
                                        <span>{blog.tags}</span>
                                    </li>
                                    <li>
                                        <i className="icofont-user-alt-3"></i>
                                        <span>{blog.author}</span>
                                    </li>
                                </ul>
                                <h2 className="blog-details-title">{blog.title}</h2>
                                <p className="blog-details-desc">{blog.shortDescription}</p>
                                <blockquote className="blog-details-quote">
                                    <p>{blog.title}</p>
                                    <footer>- ROSALINA PONG</footer>
                                </blockquote>
                                <div className="row blog-details-grid">
                                    <div className="col-md-6 col-lg-6">
                                        <img className="img-fluid" src={blog.photo} alt="blog"/>
                                    </div>
                                    <div className="col-md-6 col-lg-6">
                                        <p>{shortenText(blog.shortDescription, 350)}</p>
                                    </div>
                                </div>
                                <div className="blog-details-subtitle">
                                    <h3>Aboris nisi ut aliquip commodo consequat</h3>
                                    <p>{blog.longDescription}</p>
                                </div>
                                <div className="blog-details-footer">
                                    <ul className="blog-details-share">
                                        <li><span>Abonnez-vous:</span></li>
                                        <li><a href="#" className="icofont-facebook"></a></li>
                                        <li><a href="#" className="icofont-twitter"></a></li>
                                        <li><a href="#" className="icofont-linkedin"></a></li>
                                        <li><a href="#" className="icofont-pinterest"></a></li>
                                        <li><a href="#" className="icofont-instagram"></a></li>
                                    </ul>
                                    <ul className="blog-details-tag">
                                        <li><span>tags:</span></li>
                                        <li><a href="#">{blog.tags}</a></li>
                                    </ul>
                                </div>
                            </div>
                        </article>
                        </>}
                    </div>
                </div>
            </div>
           </section>
          </body>
           </html>
  )
}

export default BlogDetails