
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBlFKmx3rBzI-VbI2iQzRazZKtAp9Rgj-8",
  authDomain: "news-app-c81ab.firebaseapp.com",
  databaseURL: "https://news-app-c81ab-default-rtdb.firebaseio.com",
  projectId: "news-app-c81ab",
  storageBucket: "news-app-c81ab.appspot.com",
  messagingSenderId: "338008540531",
  appId: "1:338008540531:web:e7104f980dec99bbc0f106",
  databaseURL :"https://news-app-c81ab-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);