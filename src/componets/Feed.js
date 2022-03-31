import { onNavigate } from "../main.js";
import { signOut } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js";
import { auth, getPosts, onSnapshot, db, collection } from "../firebase.js"

export const Feed = () => {

    const logoDivSmall = document.createElement('img');
    logoDivSmall.classList.add('logoDivSmallFeed');
    logoDivSmall.src = 'https://i.imgur.com/RKPm1dL.png';
    const feedDiv = document.createElement('div');
    feedDiv.setAttribute('id', 'feedDiv');
    //Icono para cerrar sesión
    /*const iconHome = document.createElement('figure');
    iconHome.classList.add('iconArrow');
    iconHome.innerHTML = '<a href="/"  title="Regresa a Home"><i class="fa-solid fa-circle-xmark"></i></a>';*/
    
    //container posts

    const userContainer = document.createElement('section');
    userContainer.setAttribute('id', 'userContainer');
    const iconUser = document.createElement('figure');
    iconUser.classList.add('iconUser');
    iconUser.innerHTML = '<i class="fa-solid fa-circle-user"></i>';
    const titlePost = document.createElement('h3');
    titlePost.classList.add('titlePost')
    titlePost.textContent = 'HOLA, LUIS G';
    userContainer.appendChild(iconUser);
    userContainer.appendChild(titlePost);

    //textarea posts
    const postContainer = document.createElement('section');
    postContainer.setAttribute('id', 'postContainer');
    const inputPost = document.createElement('textarea');
    inputPost.classList.add('post');
    inputPost.setAttribute('id', 'inputPost'); 
    inputPost.placeholder = 'Cuéntanos algo...';
    const buttonPublish = document.createElement('button');
    buttonPublish.classList.add('buttonPublish');
    buttonPublish.textContent = 'Publicar';
    postContainer.appendChild(inputPost)
    postContainer.appendChild(buttonPublish)


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
      
  
    feedDiv.append(logoDivSmall, buttonSignOut, userContainer, postContainer, containerPosts);
    return feedDiv;
  
  };