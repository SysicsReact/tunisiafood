import React from "react";
import { useState } from "react";
import { GetCardDetails } from "../firebase.config";
import {products} from "../pages/AllProducts";

export default function Cart (){
    
     let data = GetCardDetails();

     
     return(
         
          <aside class="cart-sidebar">
          <div class="cart-header">
              <div class="cart-total">
                  <i class="fas fa-shopping-basket"></i>
                  <span>total item (5)</span>
              </div>
              <button class="cart-close"><i class="icofont-close"></i></button>
          </div>
          <ul class="cart-list">
               
          {data!==null && data.map((e) => {
               return(
              <li class="cart-item">
                  <div class="cart-media">
                      <a href="#"><img src="assets/images/product/01.jpg" alt="product"/></a>
                      <button class="cart-delete"><i class="far fa-trash-alt"></i></button>
                  </div>
                  <div class="cart-info-group">
                      <div class="cart-info">
                          <h6><a href="product-single.html">{e.name}</a></h6>
                          <p>Unit Price - $8.75</p>
                      </div>
                      <div class="cart-action-group">
                          <div class="product-action">
                              <button class="action-minus" title="Quantity Minus"><i class="icofont-minus"></i></button>
                              <input class="action-input" title="Quantity Number" type="text" name="quantity" value="1"/>
                              <button class="action-plus" title="Quantity Plus"><i class="icofont-plus"></i></button>
                          </div>
                          <h6>$56.98</h6>
                      </div>
                  </div>
              </li> )
              })}
          </ul>
          <div class="cart-footer">
              <a class="cart-checkout-btn" href="front/checkout.html">
                  <span class="checkout-label">Proceed to Checkout</span>
                  <span class="checkout-price">$369.78</span>
              </a>
          </div>
          </aside>
     )
}