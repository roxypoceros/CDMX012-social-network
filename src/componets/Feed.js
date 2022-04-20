import { onNavigate } from '../main.js';
import {
  auth, onSnapshot, db, collection, publishPost, orderBy, query, deletePost, getPost, signOut, onAuthStateChanged, getUserLogged, updatePost, likes, dislikes,
} from '../firebase.js';
//Saludo al usuario logueado
export const Feed = () => {
  const userContainer = document.createElement('section');
  // Obteniendo datos y foto de usuario logueado
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const displayName = user.displayName || '';
      const photoURL = user.photoURL || './img/icono-usuario.png';
      console.log(photoURL);
      userContainer.setAttribute('id', 'userContainer');
      const iconUser = document.createElement('img');
      iconUser.classList.add('iconUser');
      iconUser.src = `${photoURL}`;
      const titlePost = document.createElement('h3');
      titlePost.classList.add('titlePost');
      titlePost.textContent = `¡HOLA, ${displayName}!`;
      userContainer.appendChild(iconUser);
      userContainer.appendChild(titlePost);
    } else if (user) {
      const email = user.email;
      const photoURL = user.photoURL || './img/icono-usuario.png';
      userContainer.setAttribute('id', 'userContainer');
      const iconUser = document.createElement('img');
      iconUser.classList.add('iconUser');
      iconUser.src = `${photoURL}`;
      const titlePost = document.createElement('h3');
      titlePost.classList.add('titlePost');
      titlePost.textContent = `¡HOLA, ${email}!`;
      userContainer.appendChild(iconUser);
      userContainer.appendChild(titlePost);
    } else {
    }
  });
  // Inicia página de Feed
  const logoDivSmall = document.createElement('img');
  logoDivSmall.classList.add('logoDivSmallFeed');
  logoDivSmall.src = 'https://i.imgur.com/RKPm1dL.png';
  const feedDiv = document.createElement('div');
  feedDiv.setAttribute('id', 'feedDiv');

  // textarea posts
  const postContainer = document.createElement('section');
  postContainer.setAttribute('id', 'postContainer');
  const inputPost = document.createElement('textarea');
  inputPost.classList.add('post');
  inputPost.setAttribute('id', 'inputPost');
  inputPost.placeholder = 'Cuéntanos algo...';
  const buttonPublish = document.createElement('button');
  buttonPublish.classList.add('buttonPublish');
  buttonPublish.textContent = 'Publicar';
  postContainer.appendChild(inputPost);
  postContainer.appendChild(buttonPublish);
  const buttonSignOut = document.createElement('button');
  buttonSignOut.textContent = 'Cerrar Sesión';
  buttonSignOut.setAttribute('id', 'signoutButton');

  // Area que imprime los posteos
  const containerPosts = document.createElement('section');
  containerPosts.setAttribute('id', 'containerPosts');
  const containerEditDelete = document.createElement('section');
  containerEditDelete.setAttribute('id', 'containerEditDelete');

  //Cerrando sesión
  buttonSignOut.addEventListener('click', () => {
    onNavigate('/');
  });

  buttonSignOut.addEventListener('click', (e) => {
    signOut(auth)
      .then(() => {
        // Signed out successful
        swal({
          text: 'Cerraste Sesión',
          button: 'Cerrar',
        });
        // ...
      })
      .catch((error) => {
        alert(errorMessage);
      });
  });

  // Listener para publicaciones
  buttonPublish.addEventListener('click', () => {
    const posting = inputPost;
    console.log(posting.value.length);
    if (posting.value.length >= 1) {
      publishPost(posting.value)
        .then(() => {
          inputPost.value = '';
        })
        .catch(() => {
        });
    } else {
      swal({
        text: 'Escribe para publicar',
        button: 'Cerrar',
      });
    }
  });

  // Función para publicar y borrar posts
  const q = query(collection(db, 'posts'), orderBy('datecreate', 'desc'));
  // condicion si usuario esta logueado, mostrar botones
  onSnapshot(q, (querySnapshot) => {
    let html = '';
    const user = getUserLogged();
    querySnapshot.forEach((doc) => {
      const posts = doc.data();
      const countLike = posts.likes
      //si tiene mas de un like entonces imprímelo en pantalla
      if (user.email === posts.email) {
        html += `
                  <div class = "containerPosts">
                    <h4>Publicado por: ${posts.email}</h4>
                    <h5>${posts.text}</h5>
                    <section id = "containerLikes" class = "containerLikes1">
                    <button class="like1" data-id='${doc.id}'><i class="fa-solid fa-star"> ${countLike.length} </i></button>
                    </section>
                    <section class = "containerButtons">
                    <button class="btnDelete" data-id='${doc.id}'><i class="fa-solid fa-trash-can"></i></button>
                    <button class="btnEdit" data-id='${doc.id}'><i class="fa-solid fa-pencil"></i></i></button>
                    </section>
                  </div>
                `;
      } else {
        html += `
                  <div class = "containerPosts">
                    <h4>Publicado por: ${posts.email}</h4>
                    <h5>${posts.text}</h5>
                    <section id = "containerLikes" class = "containerLikes1">
                    <button class="like1" data-id='${doc.id}'><i class="fa-solid fa-star"> ${countLike.length} </i></button>
                    </section>
                  </div>
                `;
      } containerPosts.innerHTML = html;

    //Listener para Borrar publicación de usuario logueado  
      const buttonsDelete = containerPosts.querySelectorAll('.btnDelete');
      buttonsDelete.forEach((btn) => {
        btn.addEventListener('click', function () {
          const id = this.getAttribute('data-id');
          deletePost(id);
        });
      });

    //Listener para dar, quitar like y mostrar total de likes
      const btnlike = containerPosts.querySelectorAll('.like1');
      // const outline = false;
      btnlike.forEach((btn) => {
        btn.addEventListener('click', async function () {
          const id = this.getAttribute('data-id');
          const snapPost = await getPost(id);
          const post = snapPost.data();
          const countLike = post.likes.length;
          const existsLike = post.likes.includes(getUserLogged().email);

          if (!existsLike) {
            this.innerHTML = '<i class="fa-regular fa-star">' + countLike + '</i>';
            likes(id);
          } else {
            this.innerHTML = '<i class="fa-solid fa-star">' + countLike + '</i>';
            dislikes(id);
          }
        });
      });

      //Listener para Editar publicación de usuario logueado
      const buttonsEdit = containerPosts.querySelectorAll('.btnEdit');
      let editPost = false;
      buttonsEdit.forEach((btn) => {
        btn.addEventListener('click', async function () {
          const id = this.getAttribute('data-id');
          const snapPost = await getPost(id);
          const post = snapPost.data().text;
          inputPost.value = post;
          editPost = true;
          if (editPost) {
            postContainer.removeChild(buttonPublish);
            const buttonUpdate = document.createElement('button');
            buttonUpdate.classList.add('buttonUpdate');
            buttonUpdate.textContent = 'Actualizar';
            postContainer.appendChild(buttonUpdate);

            buttonUpdate.addEventListener('click', () => {
              const newPost = inputPost.value;
              updatePost(id, newPost);
              postContainer.appendChild(buttonPublish);
              postContainer.removeChild(buttonUpdate);
            });
          } else {
            // editPost = false;
          }

        });
      });
    });
  });

  feedDiv.append(logoDivSmall, buttonSignOut, userContainer, postContainer, containerPosts, containerEditDelete);
  return feedDiv;
};
