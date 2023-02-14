import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';
const initialState = {
cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")):[],
cartTotalQuantity: 0,
cartTotalAmount:0,
previousURL:"",
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
     ADD_TO_CART(state, action){
          const productIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
          if(productIndex>=0){
               //Item already exist in the cart
               //Increase the cartQuantity
               state.cartItems[productIndex].cartQuantity +=1;
               toast.info(`${action.payload.name}  quantité était modifié `, {position: 'top-left'})
          }
          else{
               //Item doesn't in the cart
               //Add item to the cart
               const tempProduct ={...action.payload, cartQuantity:1}
               state.cartItems.push(tempProduct)
               toast.success(`${action.payload.name}  Ajouter avec Succès `, {position: 'top-left'})
          }
          // Save cart to local storage
          localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
     },
     DECREASE_CART(state, action){
          const productIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
     if(state.cartItems[productIndex].cartQuantity > 1)
     {
          state.cartItems[productIndex].cartQuantity -=1;
          toast.info(`${action.payload.name}  quantité était modifiée `, {position: 'top-left'})
     }
     else if(state.cartItems[productIndex].cartQuantity === 1)
     {
          const newCartItem = state.cartItems.filter((item) => item.id !== action.payload.id)
          state.cartItems = newCartItem;
          toast.error(`${action.payload.name}  Supprimer du chariot `, {position: 'top-left'});
     }
     localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
     },
     REMOVE_FROM_CART(state, action){
          const newCartItem = state.cartItems.filter(
               (item) => item.id !== action.payload.id
             );
             state.cartItems = newCartItem;
             toast.success(`${action.payload.name} Supprimer du chariot`, {
               position: "top-left",
             });
             localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
     },
     CLEAR_CART(state, action) {
          state.cartItems = [];
          toast.info(`Cart cleared`, {
            position: "top-left",
          });
    
          localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        CALCULATE_SUBTOTAL(state, action) {
          const array = [];
          state.cartItems.map((item) => {
            const { price, cartQuantity } = item;
            const cartItemAmount = price * cartQuantity;
            return array.push(cartItemAmount);
          });
          const totalAmount = array.reduce((a, b) => {
            return a + b;
          }, 0);
          state.cartTotalAmount = totalAmount;
        },
        CALCULATE_TOTAL_QUANTITY(state, action) {
          const array = [];
          state.cartItems.map((item) => {
            const { cartQuantity } = item;
            const quantity = cartQuantity;
            return array.push(quantity);
          });
          const totalQuantity = array.reduce((a, b) => {
            return a + b;
          }, 0);
          state.cartTotalQuantity = totalQuantity;
        },
        SAVE_URL(state, action){
          state.previousURL = action.payload;
        }
  }
});

export const {ADD_TO_CART, CALCULATE_TOTAL_QUANTITY, CALCULATE_SUBTOTAL, DECREASE_CART, REMOVE_FROM_CART, CLEAR_CART} = cartSlice.actions
export const selectCartItems = (state) => state.cart.cartItems;
export const selectCarTotalQuantity = (state) => state.cart.cartTotalQuantity;
export const selectCarTotalAmount = (state) => state.cart.cartTotalAmount;
export default cartSlice.reducer