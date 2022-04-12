import { onNavigate } from '../main.js';
import {
  auth, getPosts, onSnapshot, db, collection, publishPost, orderBy, query, deletePost, getPost, signOut, onAuthStateChanged, getUserLogged, updatePost,
} from '../firebase.js';

//Editando posts. Pendiente

export const Feed = () => {
  const userContainer = document.createElement('section');
  //Obteniendo datos de usuario logueado
  //No podemos mostrar el display name si el usuario no está logueado con gmail
  onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User  
    const displayName = user.displayName || '';
    const photoURL = user.photoURL || './img/icono-usuario.png';
    console.log (photoURL)
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
    const email = user.email
    const photoURL = user.photoURL ||'./img/icono-usuario.png';
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

  const containerPosts = document.createElement('section');
  containerPosts.setAttribute('id', 'containerPosts');

  const containerEditDelete = document.createElement('section');
  containerEditDelete.setAttribute('id', 'containerEditDelete');



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

  buttonPublish.addEventListener('click', () => {
    const posting = inputPost;
    console.log(posting.value.length)
    if (posting.value.length >= 1) {
      publishPost(posting.value)
      .then(() => {
        inputPost.value = '';
      })
      .catch(() => {
      });
    } else {
      swal({
        text: "Escribe para publicar",
        button: 'Cerrar',
      });
    }
   
  });

  // const querySnapshot = await getPosts()
//////////Primer bloqueo, no podemos editar ni borrar, según el usuario logueado
//// Se tendría que identificar el id de los posteos que hizo el usuario loggueado
    const q = query(collection(db, 'posts'), orderBy('datecreate', 'desc'));
    //condicion si usuario esta logueado, mostrar botones
      onSnapshot(q, (querySnapshot) => {
        let html = '';
        let user = getUserLogged()
          console.log(user.email)
          querySnapshot.forEach((doc) => {
            const posts = doc.data();
            //console.log({posts})
            if(user.email===posts.email){
                  
              html += `
                  <div class = "containerPosts">
                    <h4>Publicado por: ${posts.email}</h4>
                    <h5>${posts.text}</h5>
                    <section class = "containerButtons">
                    <button class="btnDelete" data-id='${doc.id}'><i class="fa-solid fa-trash-can"></i></button>
                    <button class="btnEdit" data-id='${doc.id}'><i class="fa-solid fa-pencil"></i></i></button>
                    </section>
                  </div>
                `;

            }else{
              html += `
                  <div class = "containerPosts">
                    <h4>Publicado por: ${posts.email}</h4>
                    <h5>${posts.text}</h5>
                  </div>
                `;
            }containerPosts.innerHTML = html;
          
          const buttonsDelete = containerPosts.querySelectorAll('.btnDelete');
            buttonsDelete.forEach((btn) => {
              btn.addEventListener('click', function () {
                const id = this.getAttribute('data-id');
                deletePost(id);
              });
              });

          const buttonsEdit = containerPosts.querySelectorAll('.btnEdit');
          let editPost = false;
          buttonsEdit.forEach((btn) => {
            // eslint-disable-next-line indent
              btn.addEventListener('click', async function () {
              const id = this.getAttribute('data-id');
              const snapPost = await getPost(id);
              const post = snapPost.data().text;
              inputPost.value = post
              editPost = true;
              if (editPost) {

                postContainer.removeChild(buttonPublish)
                const buttonUpdate = document.createElement('button');
                buttonUpdate.classList.add('buttonUpdate');
                buttonUpdate.textContent = 'Actualizar';
                postContainer.appendChild(buttonUpdate);

                buttonUpdate.addEventListener('click', () => {
                  const newPost = inputPost.value
                  updatePost(id, newPost)
                  postContainer.appendChild(buttonPublish);
                  postContainer.removeChild(buttonUpdate)
                })
                
              } else{
                //editPost = false;
                
              }
              
              console.log(editPost)
              //buttonPublish.innerText = 'Actualizar';
            });
          });

          });
      
    });

  

  // hacer una funcion que tome los parámetros del datecreate y ordenar los posts de manera descendente

  feedDiv.append(logoDivSmall, buttonSignOut, userContainer, postContainer, containerPosts, containerEditDelete);
  return feedDiv;
};
