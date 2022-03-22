import { onNavigate } from "../main.js";
import { firebaseConfig, app, database} from "../firebase.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js";

const auth = getAuth();


export const Register = () => {
  const RegisterDiv = document.createElement('div');
  RegisterDiv.setAttribute('id', 'RegisterDiv');

  
  const nodoh2 = document.createElement('h2');
  const inputUserName = document.createElement('input');
  // LABEL USUARIO + LINEA 59
  // const labelUserName = document.createElement('label');
  // inputUserName.setAttribute('id', 'username');
  // labelUserName.setAttribute('for', 'username');

  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('id', 'mailregister');
  const inputPassword = document.createElement('input');
  inputPassword.setAttribute('id', 'password');
  const buttonHome = document.createElement('button');
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

export const Register = () => {
  const RegisterDiv = document.createElement('div');
  const nodoh2 = document.createElement('h2');
  const buttonHome = document.createElement('button');
  buttonHome.textContent = 'Regresa a Home';
  buttonHome.addEventListener('click', () => {
    onNavigate('/');
  });
  nodoh2.textContent = 'Ingresa tu correo';

  //labelUserName.innerHTML = 'USUARIO';

  RegisterDiv.append(nodoh2, inputUserName, inputEmail, inputPassword, buttonSubmit, buttonHome);
  
  RegisterDiv.append(nodoh2, buttonHome);
  return RegisterDiv;
};
