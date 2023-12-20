// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5jvVBDU8_yeQpWVCJgBu6Lo3vBe9YMHE",
  authDomain: "sastanetflix-ok.firebaseapp.com",
  projectId: "sastanetflix-ok",
  storageBucket: "sastanetflix-ok.appspot.com",
  messagingSenderId: "716726135602",
  appId: "1:716726135602:web:2d9422682415f7a69dc52b",
  measurementId: "G-505DZJCKCT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
