import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-database.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js"

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

/*export const publishPost = (posting) => {
    //set(ref(database, "posts")), {posting}
    //console.log (posting)
    setDoc(doc(database, "posts"), {post: posting});
  }*/
//https://firebase.google.com/docs/firestore/manage-data/add-data
  export const publishPost = doc(database, 'posts');
  setDoc(publishPost, { post: true });
  