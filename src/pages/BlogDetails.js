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
          //alert(id)
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
      console.log(idBlog)
  return (
    <html>
      <head>
                <meta charset="UTF-8" />
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
               <a class="backtop fas fa-arrow-up" href="#"></a>
          <section class="inner-section single-banner" style={{ backgroundImage: "url(assets/images/spices.jpg)", backgroundRepeat: "no-repeat", backgroundPosition: "center", }}>
            <div class="container">
                <h2>blogs</h2>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to="/">Accueil</Link></li>
                    <li class="breadcrumb-item active" aria-current="page"><Link to="/Blog">Tout les blogs</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">Détails</li>
                </ol>
            </div>
          </section>
            <section class="inner-section blog-details-part">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12 col-xl-10">
                    {blog &&
                  <>
                        <article class="blog-details">
                            <a class="blog-details-thumb" href="">
                                <img src={blog.photo} alt="blog"/>
                            </a>
                            <div class="blog-details-content">
                                <ul class="blog-details-meta">
                                    <li>
                                        <i class="icofont-ui-calendar"></i>
                                        <span>{blog.tags}</span>
                                    </li>
                                    <li>
                                        <i class="icofont-user-alt-3"></i>
                                        <span>{blog.author}</span>
                                    </li>
                                </ul>
                                <h2 class="blog-details-title">{blog.title}</h2>
                                <p class="blog-details-desc">{blog.shortDescription}</p>
                                <blockquote class="blog-details-quote">
                                    <p>{blog.title}</p>
                                    <footer>- ROSALINA PONG</footer>
                                </blockquote>
                                <div class="row blog-details-grid">
                                    <div class="col-md-6 col-lg-6">
                                        <img class="img-fluid" src={blog.photo} alt="blog"/>
                                    </div>
                                    <div class="col-md-6 col-lg-6">
                                        <p>{shortenText(blog.shortDescription, 350)}</p>
                                    </div>
                                </div>
                                <div class="blog-details-subtitle">
                                    <h3>Aboris nisi ut aliquip commodo consequat</h3>
                                    <p>{blog.longDescription}</p>
                                </div>
                                <div class="blog-details-footer">
                                    <ul class="blog-details-share">
                                        <li><span>Abonnez-vous:</span></li>
                                        <li><a href="#" class="icofont-facebook"></a></li>
                                        <li><a href="#" class="icofont-twitter"></a></li>
                                        <li><a href="#" class="icofont-linkedin"></a></li>
                                        <li><a href="#" class="icofont-pinterest"></a></li>
                                        <li><a href="#" class="icofont-instagram"></a></li>
                                    </ul>
                                    <ul class="blog-details-tag">
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