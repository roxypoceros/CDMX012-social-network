import { onNavigate } from "../main.js";
export const Register = () => {
  const RegisterDiv = document.createElement('div');
  const nodoh2 = document.createElement('h2');
  const inputEmail = document.createElement('input');
  const inputPassword = document.createElement('input');
  const buttonHome = document.createElement('button');
  const buttonNewUser = document.createElement('button');
  buttonHome.textContent = 'Regresa a Home';
  buttonNewUser.textContent = 'Registrarse';
  inputEmail.placeholder = 'Ingresa tu correo';
  inputPassword.placeholder = 'Ingresa tu contraseña';
  buttonHome.addEventListener('click', () => {
    onNavigate('/');
  });
  nodoh2.textContent = 'Ingresa tu correo';
  RegisterDiv.append(nodoh2, inputEmail, inputPassword, buttonNewUser, buttonHome);
  return RegisterDiv;
};