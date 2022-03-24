import { onNavigate } from "../main.js";
import { firebaseConfig, app, database} from "../firebase.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js";

const auth = getAuth();


export const Register = () => {
  const logoDivSmall = document.createElement('img');
  logoDivSmall.classList.add('logoDivSmall');
  logoDivSmall.src = 'https://i.imgur.com/RKPm1dL.png';
  const RegisterDiv = document.createElement('div');
  RegisterDiv.setAttribute('id', 'RegisterDiv');
  const labelUserName = document.createElement('h3');
  labelUserName.textContent = 'USUARIO';

  const nodoh2 = document.createElement('h2');
  const inputUserName = document.createElement('input');
  inputUserName.setAttribute('id', 'username');
  const labelEmail = document.createElement('h3');
  labelEmail.textContent = 'EMAIL';
  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('id', 'mailregister');
  const labelPassword = document.createElement('h3');
  labelPassword.textContent = 'CONTRASEÑA';
  const inputPassword = document.createElement('input');
  inputPassword.setAttribute('id', 'password');
  inputPassword.setAttribute('type', 'password');
  const buttonHome = document.createElement('button');
  buttonHome.setAttribute('id', 'homeButton');
  const buttonSubmit = document.createElement('button');
  buttonSubmit.setAttribute('id', 'registerButton');
  buttonHome.textContent = 'Regresa a Home';
  buttonSubmit.textContent = 'Registrarse';
  inputUserName.placeholder = 'Crea tu Nombre de Usuario';
  inputEmail.placeholder = 'Ingresa tu Correo';
  inputPassword.placeholder = 'Ingresa tu Contraseña';
  
  // Registrar Usuario con Email
  buttonSubmit.addEventListener('click', (e) => {
    let email = document.getElementById('mailregister').value;
    let password = document.getElementById('password').value;
    let username = document.getElementById('username').value;
    
    createUserWithEmailAndPassword(auth, email, password, username)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert ('user created!');
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert ('error message');
      // ..
    })

    });

  //Regresa a Home



  RegisterDiv.append(logoDivSmall, nodoh2, labelUserName, inputUserName, labelEmail, inputEmail, labelPassword, inputPassword, buttonSubmit, buttonHome);
  
  return RegisterDiv;
};
