import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
function Intro()
{
return(
     <>
        <section class="intro-part">
            <div class="container">
                <div class="row intro-content">
                    <div class="col-sm-6 col-lg-3">
                        <div class="intro-wrap">
                            <div class="intro-icon">
                                <i class="fas fa-truck"></i>
                            </div>
                            <div class="intro-content">
                                <h5>Livraison Rapide</h5>
                                <p>A partir de la réception de la demande d’achat, nous respectons les délais définis. Nous assurons la livraison de tout les produits,dans des courtes délais où que vous soyez.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3">
                        <div class="intro-wrap">
                            <div class="intro-icon">
                                <i class="icofont-fruits"></i>
                            </div>
                            <div class="intro-content">
                                <h5>100% Aliments Et Ingrédients Frais</h5>
                                <p>Nous croyons que notre application conséquente et continue du principe « la qualité d'abord » est le secret de notre réussite.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3">
                        <div class="intro-wrap">
                            <div class="intro-icon">
                                <i class="fas fa-headset"></i>
                            </div>
                            <div class="intro-content">
                                <h5>Équipe D'assistance Instantanée</h5>
                                <p>L'assistance via messagerie instantanée. Veuillez vous identifier pour utiliser la messagerie instantanée avec un membre de l'équipe d'assistance.

</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3">
                        <div class="intro-wrap">
                            <div class="intro-icon">
                                <i class="fas fa-lock"></i>
                            </div>
                            <div class="intro-content">
                                <h5>
Sécurité de paiement et Des Données</h5>
                                <p>Nous faisons de la commande de nourriture une expérience agréable pour nos détaillants et nos clients.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     </>
)

}

export default Intro;