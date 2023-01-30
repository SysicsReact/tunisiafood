import { getApp, getApps, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase, ref, set } from "firebase/database";
import { GoogleAuthProvider,getAuth,signInWithPopup,signInWithEmailAndPassword, createUserWithEmailAndPassword,sendPasswordResetEmail,signOut} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDLsfryMC2qrcB35qgmwhm8c_oKAHyPH-M",
    authDomain: "coujinatn.firebaseapp.com",
    databaseURL: "https://coujinatn-default-rtdb.firebaseio.com",
    projectId: "coujinatn",
    storageBucket: "coujinatn.appspot.com",
    messagingSenderId: "685348317976",
    appId: "1:685348317976:web:acd1591fed31c60f164c6d",
    measurementId: "G-D7REECDK62"
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








export { app, db, storage,auth, signInWithGoogle,
  logInWithEmailAndPassword,
  sendPasswordReset,
  createUserWithEmailAndPassword,
  logout };
