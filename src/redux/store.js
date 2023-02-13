import {configureStore, combineReducers} from "@reduxjs/toolkit"
import { auth } from "../firebase.config";
import authReducer from "./slice/authSlice"
import productReducer from "./slice/productSlice";
import cartReducer from "./slice/cartSlice";
import filterReducer from "./slice/filterSlice";

const rootReducer=combineReducers({   
    auth:authReducer,
    product:productReducer,
    cart:cartReducer,
    filter: filterReducer,

});


const store=configureStore({
reducer:rootReducer,
middleware: (getDefaultMiddleware) =>
getDefaultMiddleware({
  serializableCheck: false,
}),

})

export default store;