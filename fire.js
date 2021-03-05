import firebase from 'firebase'; 
import "firebase/auth"
  
  var firebaseConfig = {
    apiKey: "AIzaSyD9iMzW3UwvKzEkogzFwjROy5ncO6VB2Pw",
    authDomain: "first-server-251718.firebaseapp.com",
    projectId: "first-server-251718",
    storageBucket: "first-server-251718.appspot.com",
    messagingSenderId: "473663485101",
    appId: "1:473663485101:web:dbf142f0ea7c11c35ac224",
    measurementId: "G-R3856JJFK2"
  };
  // Initialize Firebase
//check if app had been initialized
let app;
  if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
  }

export default firebase;