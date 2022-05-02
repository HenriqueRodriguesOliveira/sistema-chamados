import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

let firebaseConfig = {
  apiKey: "AIzaSyA80SZYnSW3ymRm3KPBKwe7TDGVwhM9da0",
  authDomain: "sistema-b5fd6.firebaseapp.com",
  projectId: "sistema-b5fd6",
  storageBucket: "sistema-b5fd6.appspot.com",
  messagingSenderId: "150595992147",
  appId: "1:150595992147:web:7bcfc2bb8d4398f33864a6",
  measurementId: "G-LM8L62QGPN"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;