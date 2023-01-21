import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

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

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };