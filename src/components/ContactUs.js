import React, { useState } from 'react'
import WhatsAppContact from './WhatsAppContact';
import { Helmet } from 'react-helmet';

export default function ContactUs (message, number) {
     const [messages, setMessages] = useState("");
  return (
    
  <>
  <section className="news-part" style={{ backgroundImage: "url(assets/images/contact-us-banner.jpg)", backgroundRepeat: "no-repeat", backgroundPosition: "center",  }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-5 col-lg-6 col-xl-7">
                        <div className="news-text">
                            <h2>Contactez-nous via WhatsApp</h2>
                        </div>
                    </div>
                    <div className="col-md-7 col-lg-6 col-xl-5">
                        <form className="news-form">
                        <input type="text" 
                        value={messages}
                        onChange={(e) => setMessages(e.target.value)}
                        placeholder="Laissez-nous un message"/>
                        <WhatsAppContact message={messages} number={"+21651320220"}>
                        <span>Envoyer  <i className="fas fa-comments"></i>
                        </span>
                        </WhatsAppContact>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </>
          

          
    
  )
}
