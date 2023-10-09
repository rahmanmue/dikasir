// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAP_yP7lwsRupDsBck_DVWUIKABjJrrjDc",
  authDomain: "reactjs-image-upload.firebaseapp.com",
  projectId: "reactjs-image-upload",
  storageBucket: "reactjs-image-upload.appspot.com",
  messagingSenderId: "891229339006",
  appId: "1:891229339006:web:d89af69f55202ebfcdc72f",
  measurementId: "G-TRDJ7TJYZF",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

const analytics = getAnalytics(app);

export { storage, firebase as default };
