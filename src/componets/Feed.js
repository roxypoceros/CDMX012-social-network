import { onNavigate } from '../main.js';
import {
  auth, getPosts, onSnapshot, db, collection, publishPost, orderBy, query, deletePost, getPost, updatePost, signOut, onAuthStateChanged,
} from '../firebase.js';


//Editando posts. Pendiente
const editPost = false;
const id = '';


export const Feed = () => {
  const userContainer = document.createElement('section');
  //Obteniendo datos de usuario logueado
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User  
    const displayName = user.displayName;
    const photoURL = user.photoURL;
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
    const photoURL = user.photoURL;
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

  buttonPublish.addEventListener('click', (e) => {
    const posting = inputPost;
    publishPost(posting.value)
      .then(() => {
        inputPost.value = '';
        // console.log('se publicó')
      })
      .catch(() => {
        // console.error('no se publicó')
      });
    // aquí se deberían de obtener los datos de firestore para mandarle el contenido del post a su respectivo usuario
  });

  // const querySnapshot = await getPosts()
  const q = query(collection(db, 'posts'), orderBy('datecreate', 'desc'));
  onSnapshot(q, (querySnapshot) => {
    let html = '';
    querySnapshot.forEach((doc) => {
      const posts = doc.data();
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
      // console.log(doc.data())
    });
    containerPosts.innerHTML = html;

    const buttonsDelete = containerPosts.querySelectorAll('.btnDelete');
    buttonsDelete.forEach((btn) => {
      btn.addEventListener('click', function (dataset) {
        const id = this.getAttribute('data-id');
        deletePost(id);
      });
    });

    const buttonsEdit = containerPosts.querySelectorAll('.btnEdit');
    buttonsEdit.forEach((btn) => {
      // eslint-disable-next-line indent
        btn.addEventListener('click', async function (dataset) {
        const id = this.getAttribute('data-id');
        const snapPost = await getPost(id);
        const post = snapPost.data();
        inputPost.value = post.text;
        /* if (editPost = true) {
            console.log(inputPost.value = post.text)
          } else {
            console.log(updatePost())
          } */
        buttonPublish.innerText = 'Actualizar';
      });
    });
  });

  // hacer una funcion que tome los parámetros del datecreate y ordenar los posts de manera descendente

  /*
      function writeUserData(userId, name, email, imageUrl) {
          const db = getDatabase();
          set(ref(db, 'posts/' + userId), {
            username: name,
            email: email,
            profile_picture : imageUrl
          });
        } */

  feedDiv.append(logoDivSmall, buttonSignOut, userContainer, postContainer, containerPosts);
  return feedDiv;
};
