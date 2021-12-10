import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBvVFkDXqlSx7kdTx4KOqlbEz46l645vTY",
    authDomain: "blog-a3fbd.firebaseapp.com",
    projectId: "blog-a3fbd",
    storageBucket: "blog-a3fbd.appspot.com",
    messagingSenderId: "262012698092",
    appId: "1:262012698092:web:92e875056b1cb0034994c9",
    // eslint-disable-next-line
    measurementId: "${config.measurementId}"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);