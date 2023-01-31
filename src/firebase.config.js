import { getApp, getApps, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase, ref, set } from "firebase/database";
import { GoogleAuthProvider,getAuth,signInWithPopup,signInWithEmailAndPassword, createUserWithEmailAndPassword,sendPasswordResetEmail,signOut} from "firebase/auth";

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
const db = getDatabase(app);
const storage = getStorage(app);



const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
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
  signOut(auth);
};








export { app, db, storage,auth,
  logInWithEmailAndPassword,
  sendPasswordReset,
  createUserWithEmailAndPassword,
  logout };
