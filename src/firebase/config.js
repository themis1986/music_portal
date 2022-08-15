import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDbxMupbMu8GCx7LnELcMzvAzCbn0pQrwg",
  authDomain: "music-portal-e5e70.firebaseapp.com",
  projectId: "music-portal-e5e70",
  storageBucket: "music-portal-e5e70.appspot.com",
  messagingSenderId: "658785276286",
  appId: "1:658785276286:web:4ffaeb0baeb2129736e32f",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, projectStorage, timestamp };
