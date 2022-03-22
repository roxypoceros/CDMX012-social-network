// Importando las funciones del SDK
import { initializeApp } from 'https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/8.10.0/firebase-firestore.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/8.10.0/firebase-auth.js';

// Your web app's Firebase configuration
const firebaseConfig = initializeApp({
  apiKey: "AIzaSyCxCUqC-iZyqAJcdx9yn8PbqE7q3OtJ42Y",
  authDomain: "action-rs.firebaseapp.com",
  projectId: "action-rs",
  storageBucket: "action-rs.appspot.com",
  messagingSenderId: "878851705859",
  appId: "1:878851705859:web:10a6217faf9fde29aed236"
});

const auth = getAuth(firebaseConfig);
const db = getFirestore(firebaseConfig);

onAuthStateChanged(auth, user => {
  if (user != null) {
    console.log ('logged in!');
  } else {
    console.log('No user');
}
});*/
