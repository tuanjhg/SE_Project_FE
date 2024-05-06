import { getApp, getApps, initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
 apiKey: "AIzaSyAghCnvHqSYpnKRUqixLky4XT9JYe77L0w",
  authDomain: "seproject-1d64b.firebaseapp.com",
  projectId: "seproject-1d64b",
  storageBucket: "seproject-1d64b.appspot.com",
  messagingSenderId: "579366870372",
  appId: "1:579366870372:web:4105c257bf4d805552ee71",
  measurementId: "G-HH6LRRYMP6"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
