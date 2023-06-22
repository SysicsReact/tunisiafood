import { getApp, getApps, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import 'firebase/analytics';

import { getDatabase, ref, set } from "firebase/database";
import { GoogleAuthProvider,getAuth,signInWithPopup,signInWithEmailAndPassword, createUserWithEmailAndPassword,sendPasswordResetEmail,signOut} from "firebase/auth";
import { getFirestore,collection, query, where, getDocs, deleteDoc } from "@firebase/firestore";
import { updatex } from "./components/Header";
import { getAnalytics } from "firebase/analytics";


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


  

const RemoveRefCommand = async (force, id)=>{
  var str=window.location.href.toLowerCase()
 
  try {
    const q = query(collection(db, 'paymentstostarts'), where('userId', '==', id));
    const querySnapshot = await getDocs(q);

    const deletionPromises = querySnapshot.docs.map((doc) => deleteDoc(doc.ref));
    await Promise.all(deletionPromises);
    return true;
  } catch (error) {
    console.error('Error removing payment: ', error);
    return false;
  }
}

const removePaymentByUserId = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const q = query(collection(db, 'paymentstostarts'), where('userId', '==', userId));
      const querySnapshot = await getDocs(q);

      const deletionPromises = querySnapshot.docs.map((doc) => deleteDoc(doc.ref));
      await Promise.all(deletionPromises);

      console.log('Payments removed successfully!');
      resolve(true); // Removal completed successfully
    } catch (error) {
      console.error('Error removing payments: ', error);
      resolve(false); // Removal failed
    }
  });
};


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
  signOut(auth).then(() => {
    window.location.reload();
  }).catch((error) => {
    console.log(error);
  });
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

function ReturnMeasurement(category){
switch(category)
{
  case "Boisson":
    return "CL"
   

    break;
    default:
      return "G"
      break;
}

}

export { app, db, storage, auth ,
  sendPasswordReset,
  createUserWithEmailAndPassword,
  logout,changeIsLoading,changeIsTesting,testLoading,SetCartDetails,GetCardDetails,ReturnMeasurement,RemoveRefCommand,removePaymentByUserId };
