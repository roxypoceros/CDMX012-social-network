import { onNavigate } from "../main.js";
import { signOut } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js";
import { auth, getPosts, onSnapshot, db, collection } from "../firebase.js"

export const Feed = () => {

    const logoDivSmall = document.createElement('img');
    logoDivSmall.classList.add('logoDivSmallFeed');
    logoDivSmall.src = 'https://i.imgur.com/RKPm1dL.png';
    const feedDiv = document.createElement('div');
    feedDiv.setAttribute('id', 'feedDiv');
  
    const buttonSignOut = document.createElement('button');
    buttonSignOut.textContent = 'Cerrar Sesión';
    buttonSignOut.setAttribute('id', 'signoutButton');
  
    const containerPosts = document.createElement('section');
    containerPosts.setAttribute('id', 'containerPosts');
  
    buttonSignOut.addEventListener('click', () => {
      onNavigate('/');
    });
  
  
    buttonSignOut.addEventListener('click', (e) => {

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
    

    window.addEventListener('DOMContentLoaded', async () => {
      //const querySnapshot = await getPosts()
      onSnapshot(collection(db, 'posts'), (querySnapshot) => {
        let html = ''
        querySnapshot.forEach(doc => {
          const posts = doc.data()
          html += `
            <div class = "containerPosts">
              <h4>${posts.email}</h4>
              <h3>${posts.text}</h3>
            </div>
          `
          //console.log(doc.data())
        });
        containerPosts.innerHTML = html
      })
     
    });


    //hacer una funcion que tome los parámetros del datecreate y ordenar los posts de manera descendente

/*
    function writeUserData(userId, name, email, imageUrl) {
        const db = getDatabase();
        set(ref(db, 'posts/' + userId), {
          username: name,
          email: email,
          profile_picture : imageUrl
        });
      }*/
      
  
    feedDiv.append(logoDivSmall, buttonSignOut, containerPosts);
    return feedDiv;
  
  };