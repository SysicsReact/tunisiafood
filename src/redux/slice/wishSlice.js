import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

const initialState = {
     wishItems: localStorage.getItem("wishItems") ? JSON.parse(localStorage.getItem("wishItems")):[],
     
     }

const wishSlice = createSlice({
     name: "wish",
     initialState,
     reducers: {
          ADD_TO_WISH(state, action){
               const productIndex = state.wishItems.findIndex((item) => item.id === action.payload.id)
               if(productIndex>=0){
                    //Item already exist in the wishlist
                    toast.info(`${action.payload.name}  est déjà dans la liste `, {position: 'top-left'})
               }
               else{
                    //Item doesn't exist in the list
                    //Add item to the list
                    const tempProduct ={...action.payload, wishQuantity:1}
                    state.wishItems.push(tempProduct)
                    toast.success(`${action.payload.name}  Ajouter avec Succès `, {position: 'top-left'})
               }
               // Save cart to local storage
               localStorage.setItem("wishItems", JSON.stringify(state.wishItems));
          },
          REMOVE_FROM_WISH(state, action){
               const newWishItems = state.wishItems.filter(
                    (item) => item.id !== action.payload.id
                  );
                  state.wishItems = newWishItems;
                  toast.success(`${action.payload.name} Supprimer de la liste`, {
                    position: "top-left",
                  });
                  localStorage.setItem("wishItems", JSON.stringify(state.wishItems));
          },
          CLEAR_WISH(state, action) {
               state.wishItems = [];
               toast.info(`La liste était supprimé`, {
                 position: "top-left",
               });
         
               localStorage.setItem("wishItems", JSON.stringify(state.wishItems));
             },
       }

});
export const {
     ADD_TO_WISH, 
     REMOVE_FROM_WISH, 
     CLEAR_WISH} = wishSlice.actions
   export const selectWishItems = (state) => state.wish.wishItems;
   export default wishSlice.reducer