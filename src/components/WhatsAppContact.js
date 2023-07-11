import React, {ReactElement}  from 'react';

const URL = "https://wa.me";


const WhatsAppContact = ({number, message, children, onClick}) => {
     number = number?.replace(/[^\w\s]/gi, '').replace(/ /g, '');
     let url =`${URL}/${number}`;
     if (message){
          url += `?text=${encodeURI(message)}`;
     }
  return (
    <button 
    onClick={(e) => {
     window.open(url);
     if(onClick){
          onClick(e)
     }
    }}>
     {children}
    </button>
  )
}; 
export default WhatsAppContact;
