import React from 'react';
import { Link } from 'react-router-dom';

function Faq() {
    window.scrollTo(0, 0);
  return (
     <html>
          <head>
          <meta charSet="UTF-8" />
          <meta name="name" content="Cook Tounsi" />
        <meta name="title" content="Cook Tounsi: vente de vos plats tunisiens préférés 2023" />
        <meta name="keywords" content="cuisine, Tunisie, cuisine tunisienne, 
        traditionnel, plats, épices, patisserie, healthy, lifestyle, food,  " />
        <title>FAQ - Cook Tounsi</title>
          <link rel="icon" href="assets/images/favicon.png" />
          <link rel="stylesheet" href="assets/fonts/flaticon/flaticon.css" />
          <link rel="stylesheet" href="assets/fonts/icofont/icofont.min.css" />
          <link rel="stylesheet" href="assets/fonts/fontawesome/fontawesome.min.css" />
          <link rel="stylesheet" href="assets/vendor/venobox/venobox.min.css" />
          <link rel="stylesheet" href="assets/vendor/slickslider/slick.min.css" />
          <link rel="stylesheet" href="assets/vendor/niceselect/nice-select.min.css" />
          <link rel="stylesheet" href="assets/vendor/bootstrap/bootstrap.min.css" />
          <link rel="stylesheet" href="assets/css/main.css" />
          <link rel="stylesheet" href="assets/css/faq.css" />
          
          </head>
          <body>
          <div className="backdrop"></div>
                <a className="backtop fas fa-arrow-up" href="#"></a>
                <section className="inner-section single-banner" style={{ backgroundImage: "url(assets/images/spices.jpg)", backgroundRepeat: "no-repeat", backgroundPosition: "center", }}>
                    <div className="container">
                        <h2>QFP</h2>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Accueil</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Questions fréquemment posées</li>
                        </ol>
                    </div>
                </section>
          <section className="inner-section faq-part">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <div className="faq-parent">
                            <div className="faq-child">
                                <div className="faq-que">
                                    <button>C'est quoi Cook Tounsi?</button>
                                </div>
                                <div className="faq-ans">
                                    <p>Cook Tounis est une platforme de vente en ligne des plats tunisiens, des épices et patisseries en Europe.</p>
                                </div>
                            </div>
                            <div className="faq-child">
                                <div className="faq-que">
                                    <button>Comment créer un compte?</button>
                                </div>
                                <div className="faq-ans">
                                    <p>Pour créer un compte vous devez aller à <Link to="/register">S'inscrire</Link>, entrez vos données et confirmez. </p>
                                </div>
                            </div>
                            <div className="faq-child">
                                <div className="faq-que">
                                    <button>Comment passer une commande?</button>
                                </div>
                                <div className="faq-ans">
                                    <p>Commencer par choisir parcourir les produits que vous voulez acheter, tapez Ajouter puis allez au Chariot, 
                                        cliquez sur Achat, et tapez l'adresse de livraison, après vous devez choisir la méthode de livraison
                                        et confirmez votre achat. </p>
                                </div>
                            </div>
                            <div className="faq-child">
                                <div className="faq-que">
                                    <button>Comment nous contacter ?</button>
                                </div>
                                <div className="faq-ans">
                                    <p>Vous pouvez nous contacter via email: contact@cooktounsi.com. Vous pouvez aussi nous envoyer un message en allant à <Link to="/contact">contact</Link>.</p>
                                </div>
                            </div>
                            <div className="faq-child">
                                <div className="faq-que">
                                    <button>Je ne trouve pas de réponse à ma question !</button>
                                </div>
                                <div className="faq-ans">
                                    <p>Si vous ne trouvez pas de réponse claire à vos questions, vous pouvez nous envoyer un message décrivant votre problème <Link to="/contact">Ici</Link> et vous allez recevoir une réponse sur votre email. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
          </body>

     </html>
  )
}

export default Faq