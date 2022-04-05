import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-database.js";
import { doc, getDocs, addDoc, getFirestore, Timestamp, collection, onSnapshot, orderBy, query, deleteDoc } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js"
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js";


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

  

export const publishPost = async (posting) => {
    //set(ref(database, "posts")), {posting}
    //console.log (posting)
    //setDoc(doc(database, "posts"), {post: posting});
    await addDoc(collection(db, 'posts'), {
      text: posting,
      //createdAt: Timestamp.now(),
      datecreate: Timestamp.now(),
      dateupdate: Timestamp.now(),
      email: auth.currentUser.email,
    })
      }



export const getPosts = () => getDocs(collection (db, 'posts'));
export const onGetPosts = () => console.log('onGetPosts')
export const deletePost = (id) => deleteDoc(doc(db, 'posts', id));

export {
  onSnapshot,
  db,
  collection,
  orderBy,
  query,
}