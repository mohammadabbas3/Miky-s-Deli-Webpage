import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA7SXdPG31IUlG9a72SvBFL9lHGAU355dQ",
  authDomain: "mikysdeli-73629.firebaseapp.com",
  databaseURL: "https://mikysdeli-73629-default-rtdb.firebaseio.com",
  projectId: "mikysdeli-73629",
  storageBucket: "mikysdeli-73629.appspot.com",
  messagingSenderId: "219457267115",
  appId: "1:219457267115:web:e921c0dfe10b68f251deee",
  measurementId: "G-PLXFR8DYZW"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);


const storage = getStorage(app);
const firestore = getFirestore(app);

export { app, storage, firestore };