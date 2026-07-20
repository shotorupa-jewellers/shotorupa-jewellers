import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8tKLew5DNDTk-EzfCX-Ne11ll5rWYQZw",
  authDomain: "jewellers-123.firebaseapp.com",
  projectId: "jewellers-123",
  storageBucket: "jewellers-123.firebasestorage.app",
  messagingSenderId: "970063305874",
  appId: "1:970063305874:web:e3e2faf01988f81f055a4b",
  measurementId: "G-HTBPHNF5YX",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);