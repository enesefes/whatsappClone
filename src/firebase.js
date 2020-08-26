import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBcthenSSdTp9iXhj5Pm_rIVctCwWXa1Yk",
  authDomain: "whatsapp-2d2e9.firebaseapp.com",
  databaseURL: "https://whatsapp-2d2e9.firebaseio.com",
  projectId: "whatsapp-2d2e9",
  storageBucket: "whatsapp-2d2e9.appspot.com",
  messagingSenderId: "692433740728",
  appId: "1:692433740728:web:68d03ab9269abeb306e54d",
  measurementId: "G-JZT3RC43C0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider}
export default db;