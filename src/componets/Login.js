import { onNavigate } from "../main.js";

export const Login = () => {
  const LoginDiv = document.createElement('div');
  const nodoh2 = document.createElement('h2');
  const buttonHome = document.createElement('button');
  buttonHome.textContent = 'Regresa a Home';
  buttonHome.addEventListener('click', () => {
    onNavigate('/');
  });
  nodoh2.textContent = 'Inicia Sesión';
  LoginDiv.append(nodoh2, buttonHome);
  return LoginDiv;
};
