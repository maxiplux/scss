import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB4GNBkKupRSVcwLzH5sglfFVm6Tka2M24",
    authDomain: "react-firebase2020-2.firebaseapp.com",
    projectId: "react-firebase2020-2",
    storageBucket: "react-firebase2020-2.appspot.com",
    messagingSenderId: "676436985121",
    appId: "1:676436985121:web:3a96e306f3655877522a60",
    measurementId: "G-70QME98C9B"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}
