
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC2YNT5p-YOk6SW3eekkKWD8bqyNuu8Oa8",
    authDomain: "linkedinclone-5d8de.firebaseapp.com",
    projectId: "linkedinclone-5d8de",
    storageBucket: "linkedinclone-5d8de.appspot.com",
    messagingSenderId: "996151898419",
    appId: "1:996151898419:web:3dccb81ad6d084421f4e46",
    measurementId: "G-JM1KFHMRFQ"
  };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };