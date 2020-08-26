import firebase from "firebase";

const firebaseConfig = {
  apiKey: "[Your Api Key]",
  authDomain: "[Your authDomain]",
  databaseURL: "[Your databaseURL]",
  projectId: "[Your projectId]",
  storageBucket: "[Your storageBucket]",
  messagingSenderId: "[Your messagingSenderId]",
  appId: "[Your appId]",
  measurementId: "[Your measurementId]"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider}
export default db;
