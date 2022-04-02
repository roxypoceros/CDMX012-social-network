import {
  getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js';

import { onNavigate } from '../main.js';

export const Login = () => {
  const logoDivSmall = document.createElement('img');
  logoDivSmall.classList.add('logoDivSmall');
  logoDivSmall.src = 'https://i.imgur.com/RKPm1dL.png';
  const loginDiv = document.createElement('div');
  loginDiv.setAttribute('id', 'loginDiv');

  // const inputUser = document.createElement('input');
  // const labelUserName = document.createElement('h3');
  // labelUserName.textContent = 'USUARIO';

  const labelEmail = document.createElement('h3');
  labelEmail.textContent = 'EMAIL';
  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('id', 'mailregister');

  const inputPassword = document.createElement('input');
  const labelPassword = document.createElement('h3');
  labelPassword.textContent = 'CONTRASEÑA';

  const buttonHome = document.createElement('button');
  buttonHome.textContent = 'Regresa a Home';
  buttonHome.setAttribute('id', 'homeButton');

  inputPassword.setAttribute('id', 'password');
  inputPassword.setAttribute('type', 'password');

  const buttonLogin = document.createElement('button');
  buttonLogin.textContent = 'Ingresa';

  const buttonGmail = document.createElement('button');
  buttonGmail.classList.add('buttonGmail');
  buttonGmail.innerHTML = '<i class="fa-brands fa-google"></i>INICIA SESIÓN CON GOOGLE';
  buttonGmail.setAttribute('id', 'btnGmail');
  // buttonGmail.textContent = 'INICIA SESIÓN CON GOOGLE'

  // inputUser.placeholder = 'Ingresa tu Usuario';
  inputEmail.placeholder = 'Ingresa tu Email';
  inputPassword.placeholder = 'Ingresa tu contraseña';

  buttonHome.addEventListener('click', () => {
    onNavigate('/');
  });

  buttonGmail.addEventListener('click', (e) => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        onNavigate('/feed');
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  });

  buttonLogin.addEventListener('click', () => {
    const email = document.getElementById('mailregister').value;
    const password = document.getElementById('password').value;
    // let username = document.getElementById('username').value;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        user;
        // alert('User logged');
        onNavigate('/feed');
        // ...
      })
      .catch((error) => {
        const { code, message } = error; // destructuracion extrae un valor del objeto
        let text = message;

        switch (code) {
          case 'auth/invalid-email': {
            text = 'Email inválido';
            break;
          }
          case 'auth/wrong-password': {
            text = 'Contraseña incorrecta';
            break;
          }
          case 'auth/user-not-found': {
            text = 'Email no registrado';
            break;
          }
          case 'auth/internal-error': {
            text = 'Ingresa tu contraseña';
            break;
          }
          case 'auth/too-many-requests': {
            text = 'Cuenta temporalmente suspendida, se realizaron demasiados intentos, intenta más tarde';
            break;
          }
          default: break;
        }

        // eslint-disable-next-line no-undef
        swal({
          text,
          button: 'Cerrar',
        });
      });
  });

  loginDiv.append(
    logoDivSmall,
    labelEmail,
    inputEmail,
    labelPassword,
    inputPassword,
    buttonGmail,
    buttonLogin,
    buttonHome,
  );
  return loginDiv;
};
