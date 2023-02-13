import { getApp, getApps, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase, ref, set } from "firebase/database";
import { GoogleAuthProvider,getAuth,signInWithPopup,signInWithEmailAndPassword, createUserWithEmailAndPassword,sendPasswordResetEmail,signOut} from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { useState } from "react";
import { updatex } from "./components/Header";

const firebaseConfig = {
  apiKey: "AIzaSyCpajBxsVUdz7VMFWI9tPQihxQPoXv0F2Y",
  authDomain: "startnewproject-983bc.firebaseapp.com",
  projectId: "startnewproject-983bc",
  storageBucket: "startnewproject-983bc.appspot.com",
  messagingSenderId: "23766145234",
  appId: "1:23766145234:web:fb671d70851b3a00c2750b",
  measurementId: "G-5ZR2XVL61K"
  };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);





const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};


const logout = () => {
  signOut(auth);
};

let isLoading=false;
let isTesting=false;

const changeIsLoading=(state)=>{
  isLoading=state;
  localStorage.setItem("isCompleting",false);
}
const changeIsTesting=(state)=>{
  isTesting=state;
  localStorage.setItem("isCompleting",false);
}
const testLoading=()=>{
  if(isTesting==true&&isLoading==true){
    localStorage.setItem("isCompleting",true);
  }
 return isTesting==true && isLoading==true;
}

let cartcount=0;

function SetCartDetails(value){
  cartcount=value;
  updatex(value)
}

function GetCardDetails(){
 if (cartcount==0) return null;
  return cartcount;
}



export { app, db, storage, auth ,
  sendPasswordReset,
  createUserWithEmailAndPassword,
  logout,changeIsLoading,changeIsTesting,testLoading,SetCartDetails,GetCardDetails };
