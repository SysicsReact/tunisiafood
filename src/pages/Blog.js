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
               <a className="backtop fas fa-arrow-up" href="#"></a>
          <section className="inner-section single-banner" style={{ backgroundImage: "url(assets/images/spices.jpg)", backgroundRepeat: "no-repeat", backgroundPosition: "center", }}>
            <div className="container">
                <h2>blogs</h2>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Accueil</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Tout les blogs</li>
                </ol>
            </div>
          </section>
            <section className="inner-section blog-standard">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-lg-12">
                            </div>
                            <div className="col-lg-12">
        {blogs.length!=0&&
    <>
     {blogs.map((blog, index) =>
                            { const {id, author, longDescription, photo, timestamp, shortDescription, tags, title} = blog
                            
                                return(
                                    <>
                                    <div className="blog-card" key={{id}}>
                                    <div className="blog-media">
                                        <a className="blog-img" href="#">
                                            <img src={blog.data.photo} alt="blog"/>
                                        </a>
                                    </div>
                                    <div className="blog-content">
                                        <ul className="blog-meta">
                                            <li>
                                                <i className="icofont-ui-calendar"></i>
                                                <span>{blog.data.tags}</span>
                                            </li>
                                            <li>
                                                <i className="icofont-user-alt-3"></i>
                                                <span>{blog.data.author}</span>
                                            </li>
                                        </ul>
                                        <h4 className="blog-title">
                                            <a href="">{blog.data.title}</a>
                                        </h4>
                                        <p className="blog-desc">{blog.data.shortDescription}</p>
                                        <a className="blog-btn" href="" onClick={() => view(id)}>
                                            <span>Lire</span>
                                            <i className="icofont-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                                    </>
                                )})}
    </>
        }
                           
                            </div>
                        
                        </div>
                    </div>
                    <div className="col-sm-10 col-md-7 col-lg-4">
                        <div className="blog-widget">
                            <h3 className="blog-widget-title">Les Plus Populaires</h3>
                            <ul className="blog-widget-feed">
                                {blogs.length!=0&&
                         <>
                             {blogs.map((blog, index) =>
                            { const {author, longDescription, photo, timestamp, shortDescription, tags, title} = blog
                           
                                return(
                                    <>
                                <li >
                                    <a className="blog-widget-media" href="#">
                                        <img src={blog.data.photo} style={{height:"70px"}} alt="blog-widget"/>
                                    </a>
                                    <h6 className="blog-widget-text">
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
                        <div className="blog-widget">
                            <h3 className="blog-widget-title">follow us</h3>
                            <ul className="blog-widget-social">
                                <li><a href="#" className="icofont-facebook"></a></li>
                                <li><a href="#" className="icofont-twitter"></a></li>
                                <li><a href="#" className="icofont-linkedin"></a></li>
                                <li><a href="#" className="icofont-pinterest"></a></li>
                                <li><a href="#" className="icofont-instagram"></a></li>
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