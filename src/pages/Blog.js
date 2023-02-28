import React, { Fragment } from 'react';
import { Link,useNavigate } from "react-router-dom";
import { db} from '../firebase.config';
import { collection } from 'firebase/firestore';
import { query, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
function Blog()
{

    const [blogs, setBlogs] = useState([]);
    const dispatch= useDispatch();
    const navigate= useNavigate();


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
      const view = async (idb) => {
        navigate("/BlogDetails", { state: { id: idb } });
              };
return(
     <html lang='en'>
            <head>
                <meta charset="UTF-8" />
                <meta name="name" content="Tunisian Food" />
                <meta name="title" content="Tunisian Food - ecommerce " />
                <title>Accueil - Tunisian Food</title>
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
            </head>
            <body>
            <div className="backdrop"></div>
               <a class="backtop fas fa-arrow-up" href="#"></a>
          <section class="inner-section single-banner" style={{ backgroundImage: "url(assets/images/spices.jpg)", backgroundRepeat: "no-repeat", backgroundPosition: "center", }}>
            <div class="container">
                <h2>blogs</h2>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to="/">Accueil</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">Tout les blogs</li>
                </ol>
            </div>
          </section>
            <section class="inner-section blog-standard">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="row">
                            <div class="col-lg-12">
                            </div>
                            <div class="col-lg-12">
        {blogs.length!=0&&
    <>
     {blogs.map((blog, index) =>
                            { const {id, author, longDescription, photo, timestamp, shortDescription, tags, title} = blog
                            
                                return(
                                    <>
                                    <div class="blog-card" key={id}>
                                    <div class="blog-media">
                                        <a class="blog-img" href="#">
                                            <img src={blog.data.photo} alt="blog"/>
                                        </a>
                                    </div>
                                    <div class="blog-content">
                                        <ul class="blog-meta">
                                            <li>
                                                <i class="icofont-ui-calendar"></i>
                                                <span>{blog.data.tags}</span>
                                            </li>
                                            <li>
                                                <i class="icofont-user-alt-3"></i>
                                                <span>{blog.data.author}</span>
                                            </li>
                                        </ul>
                                        <h4 class="blog-title">
                                            <a href="">{blog.data.title}</a>
                                        </h4>
                                        <p class="blog-desc">{blog.data.shortDescription}</p>
                                        <a class="blog-btn" href="" onClick={() => view(id)}>
                                            <span>Lire</span>
                                            <i class="icofont-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                                    </>
                                )})}
    </>
        }
                           
                            </div>
                            <div class="col-lg-12">
                                <div class="bottom-paginate">
                                    <p class="page-info"></p>
                                    <ul class="pagination">
                                        <li class="page-item">
                                            <a class="page-link" href="#">
                                                <i class="fas fa-long-arrow-alt-left"></i>
                                            </a>
                                        </li>
                                        <li class="page-item"><a class="page-link active" href="#">1</a></li>
                                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                        <li class="page-item">...</li>
                                        <li class="page-item"><a class="page-link" href="#">60</a></li>
                                        <li class="page-item">
                                            <a class="page-link" href="#">
                                                <i class="fas fa-long-arrow-alt-right"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-10 col-md-7 col-lg-4">
                        <div class="blog-widget">
                            <h3 class="blog-widget-title">Les Plus Populaires</h3>
                            <ul class="blog-widget-feed">
                                {blogs.length!=0&&
                         <>
                             {blogs.map((blog, index) =>
                            { const {author, longDescription, photo, timestamp, shortDescription, tags, title} = blog
                            console.log(blog.data.author)
                                return(
                                    <>
                                <li>
                                    <a class="blog-widget-media" href="#">
                                        <img src={blog.data.photo} style={{height:"70px"}} alt="blog-widget"/>
                                    </a>
                                    <h6 class="blog-widget-text">
                                        <a href="#">{blog.data.title}</a>
                                        <span>31, 01, 2023</span>
                                    </h6>
                                </li>
                                    </>
                                )})}
                             </>
                                 }
                            </ul>
                        </div>
                        <div class="blog-widget">
                            <h3 class="blog-widget-title">follow us</h3>
                            <ul class="blog-widget-social">
                                <li><a href="#" class="icofont-facebook"></a></li>
                                <li><a href="#" class="icofont-twitter"></a></li>
                                <li><a href="#" class="icofont-linkedin"></a></li>
                                <li><a href="#" class="icofont-pinterest"></a></li>
                                <li><a href="#" class="icofont-instagram"></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </section>

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

export default Blog;