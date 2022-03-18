import { onNavigate } from "../main.js";
export const Login = () => {
  const RegisterDiv = document.createElement('div');
  const nodoh2 = document.createElement('h2');
  const inputUser = document.createElement('input');
  const inputPassword = document.createElement('input');
  const buttonHome = document.createElement('button');
  const buttonLogin = document.createElement('button');
  buttonHome.textContent = 'Regresa a Home';
  buttonLogin.textContent = 'Ingresa';
  inputUser.placeholder = 'Ingresa tu Usuario';
  inputPassword.placeholder = 'Ingresa tu contraseña';
  buttonHome.addEventListener('click', () => {
    onNavigate('/');
  });
  nodoh2.textContent = 'Ingresa tu correo';
  RegisterDiv.append(nodoh2, inputUser, inputPassword, buttonLogin, buttonHome);
  return RegisterDiv;
};