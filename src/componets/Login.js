import { onNavigate } from "../main.js";
export const Login = () => {
  const logoDivSmall = document.createElement('img');
  logoDivSmall.classList.add('logoDivSmall');
  logoDivSmall.src = 'https://i.imgur.com/RKPm1dL.png';
  const loginDiv = document.createElement('div');
  loginDiv.setAttribute('id', 'loginDiv');
  const nodoh2 = document.createElement('h2');
  const inputUser = document.createElement('input');
  const labelUserName = document.createElement('h3');
  labelUserName.textContent = 'USUARIO';
  const inputPassword = document.createElement('input');
  const labelPassword = document.createElement('h3');
  labelPassword.textContent = 'CONTRASEÑA';
  const buttonHome = document.createElement('button');
  const buttonLogin = document.createElement('button');
  buttonHome.textContent = 'Regresa a Home';
  inputPassword.setAttribute('id', 'password');
  buttonHome.setAttribute('id', 'homeButton');
  buttonLogin.textContent = 'Ingresa';
  inputPassword.setAttribute('type', 'password');
  inputUser.placeholder = 'Ingresa tu Usuario';
  inputPassword.placeholder = 'Ingresa tu contraseña';
  buttonHome.addEventListener('click', () => {
    onNavigate('/');
  });

  loginDiv.append(logoDivSmall, nodoh2, labelUserName, inputUser, labelPassword, inputPassword, buttonLogin, buttonHome);
  return loginDiv;
};

