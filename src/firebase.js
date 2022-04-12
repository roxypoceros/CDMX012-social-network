import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-database.js";
import { doc, getDocs, addDoc, getFirestore, Timestamp, collection, onSnapshot, orderBy, query, deleteDoc, getDoc, updateDoc, setDoc } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js"
import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js";


// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBXVUR0wpfBpa0Vg2auGHK6qVlJoZr5sYQ",
  authDomain: "action-redsocial.firebaseapp.com",
  projectId: "action-redsocial",
  storageBucket: "action-redsocial.appspot.com",
  messagingSenderId: "623035228212",
  appId: "1:623035228212:web:47ea296ba1f702fe41aa61"
};
  
  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const database = getDatabase(app);
  export const auth = getAuth();
  const db = getFirestore();

//Funcion para publicar posts
export const publishPost = async (posting) => {
    await addDoc(collection(db, 'posts'), {
      text: posting,
      datecreate: Timestamp.now(),
      dateupdate: Timestamp.now(),
      email: auth.currentUser.email,
    })
      }
//Funciones para los posts
export const getPosts = () => getDocs(collection (db, 'posts'));
export const deletePost = (id) => deleteDoc(doc(db, 'posts', id));
export const getPost = (id) => getDoc(doc(db, 'posts', id));
//export const updatePost = (id) => updateDoc(doc(db, 'posts', id))


//Funcion para sacar usuario logueado
export const getUserLogged = () => {
  const user = auth.currentUser;
 // const userName = user.displayName;
  return user;
};

// Funcion para actualizar el posteo
export const updatePost = async (id, newPost) => {
  const user = auth.currentUser;
  if (user) {
    const collectionRef = doc(db, 'posts', id);
    console.log(collectionRef)
    await updateDoc(collectionRef, {
      text: newPost
    });
  }
};



export {
  signOut,
  onSnapshot,
  db,
  collection,
  orderBy,
  query,
  onAuthStateChanged,
  updateDoc,
  setDoc,
}