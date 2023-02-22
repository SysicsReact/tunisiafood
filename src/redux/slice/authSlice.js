import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoggedIn:false,
    email:null,
    userName:null,
    userID:null,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_ACTIVE_USER: (state,action)=>{
        // console.log(action.payload)
         
         const {email,userName,userID}=action.payload
         state.isLoggedIn=true;
         state.email=email;
         state.userID=userID;
         state.userName=userName;

    },
    Remove_ACTIVE_USER: (state,action)=>{
        state.isLoggedIn=false;
        state.email=null;
        state.userID=null;
        state.userName=null;

   },
  }
});

export const {SET_ACTIVE_USER} = authSlice.actions
export const {Remove_ACTIVE_USER} = authSlice.actions
export const selectIsLoggedIn=(state)=>state.auth.isLoggedIn;
export const selectEmail=(state)=>state.auth.email;
export const selectuserName=(state)=>state.auth.userName;
export const selectuserID=(state)=>state.auth.userID;




export default authSlice.reducer