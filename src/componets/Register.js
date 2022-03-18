import { onNavigate } from "../main.js";

export const Register = () => {
  const RegisterDiv = document.createElement('div');
  const nodoh2 = document.createElement('h2');
  const buttonHome = document.createElement('button');
  buttonHome.textContent = 'Regresa a Home';
  buttonHome.addEventListener('click', () => {
    onNavigate('/');
  });
  nodoh2.textContent = 'Ingresa tu correo';
  RegisterDiv.append(nodoh2, buttonHome);
  return RegisterDiv;
};