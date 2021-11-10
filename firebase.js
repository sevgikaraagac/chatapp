import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBOzVdBakeuIocfAUs_BhCW6UpAytW2E3I",
    authDomain: "chatapp-dc997.firebaseapp.com",
    projectId: "chatapp-dc997",
    storageBucket: "chatapp-dc997.appspot.com",
    messagingSenderId: "400385003839",
    appId: "1:400385003839:web:f35fc3d0ee1bb83c8a038a"
};

const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };