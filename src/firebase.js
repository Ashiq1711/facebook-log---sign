// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9KkL0z8Si0YFNym1hgOw7u3qy-mD0RMo",
  authDomain: "facebook-9881e.firebaseapp.com",
  projectId: "facebook-9881e",
  storageBucket: "facebook-9881e.appspot.com",
  messagingSenderId: "613798855999",
  appId: "1:613798855999:web:23594514500f1d878bbf8a",
  measurementId: "G-TFQGNLZZD3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default firebaseConfig;