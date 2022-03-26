import { onNavigate } from "../main.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-database.js";


export const Feed = () => {
    const logoDivSmall = document.createElement('img');
    logoDivSmall.classList.add('logoDivSmall');
    logoDivSmall.src = 'https://i.imgur.com/RKPm1dL.png';
    const feedDiv = document.createElement('div');
    feedDiv.setAttribute('id', 'feedDiv');
    
  
    const buttonSignOut = document.createElement('button');
    buttonSignOut.textContent = 'Cerrar Sesión';
    buttonSignOut.setAttribute('id', 'signoutButton');
  
  
    buttonSignOut.addEventListener('click', () => {
      onNavigate('/');
    });
  
  
    buttonSignOut.addEventListener('click', (e) => {
  
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          // Signed out successful
          alert('Cerraste sesión');
          // ...
        })
        .catch((error) => {
          alert(errorMessage);
        });
  
    });


/*
    function writeUserData(userId, name, email, imageUrl) {
        const db = getDatabase();
        set(ref(db, 'posts/' + userId), {
          username: name,
          email: email,
          profile_picture : imageUrl
        });
      }*/
      
  
    feedDiv.append(logoDivSmall, buttonSignOut);
    return feedDiv;
  
  };