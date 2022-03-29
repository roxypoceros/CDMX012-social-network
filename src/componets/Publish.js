import { onNavigate } from "../main.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-database.js";
import { publishPost } from "../firebase.js";

export const Publish = () => {
    const iconLogo = document.createElement('img');
    iconLogo.classList.add('iconAction');
    iconLogo.src = 'https://i.imgur.com/OHcUaOT.png';

    const iconHome = document.createElement('img');
    iconHome.classList.add('iconArrow');
    iconHome.src = '';

    const publishDiv = document.createElement('div');
    publishDiv.setAttribute('id', 'publishDiv');
    const titlePost = document.createElement('h3');
    titlePost.textContent = 'NUEVA PUBLICACIÓN';

    const centralContainer = document.createElement('section');
    centralContainer.setAttribute('id', 'centralContainer');
    const iconUser = document.createElement('p');
    iconUser.classList.add('iconAction');
    iconUser.innerHTML = '<i class="fa-solid fa-circle-user"></i>'
    
    const inputPost = document.createElement('textarea');
    inputPost.classList.add('post');
    inputPost.setAttribute('id', 'inputPost');
    inputPost.placeholder = 'Cuéntanos algo...';

    centralContainer.appendChild(iconUser);
    centralContainer.appendChild(inputPost);

    const buttonPublish = document.createElement('button');
    buttonPublish.classList.add('buttonPublish');
    buttonPublish.textContent = 'Publicar';

  
 //Listener para Botón Publicar
    buttonPublish.addEventListener('click', (e) => {
    const posting = inputPost
    publishPost(posting.value)
  });
  
  /*Regresa a Home
  buttonHome.addEventListener('click', () => {
    onNavigate('/');
  });*/
  
  
  publishDiv.append(iconLogo, iconHome, titlePost, centralContainer, buttonPublish);
  
  return publishDiv;
  };