import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA7RpQzQgFeVHSaMXpTeh_Dp_xwTuzHWQY",  
    authDomain: "linkedin-clone-1388a.firebaseapp.com",  
    projectId: "linkedin-clone-1388a",  
    storageBucket: "linkedin-clone-1388a.appspot.com",  
    messagingSenderId: "638301509878",  
    appId: "1:638301509878:web:59170b6cb400092baa74d7",  
    measurementId: "G-G0B83Y2SQ9"
  
  };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };