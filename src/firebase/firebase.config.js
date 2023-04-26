// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWxly929llXR0LNjqIAQp2HPYqgeS-874",
  authDomain: "the-dragon-news-clicent.firebaseapp.com",
  projectId: "the-dragon-news-clicent",
  storageBucket: "the-dragon-news-clicent.appspot.com",
  messagingSenderId: "808220066323",
  appId: "1:808220066323:web:a4fde47f2530ed37e875e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;