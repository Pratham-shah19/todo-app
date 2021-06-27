import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDWmyc3AzTEv7yeLsr8WZeKo0EieiZiIm8",
    authDomain: "todo-app-2d531.firebaseapp.com",
    projectId: "todo-app-2d531",
    storageBucket: "todo-app-2d531.appspot.com",
    messagingSenderId: "149477257707",
    appId: "1:149477257707:web:56c83a0a557fea3ff429ae",
    measurementId: "G-YNLZPTK601"
  });
  const db = firebaseApp.firestore(); 
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;