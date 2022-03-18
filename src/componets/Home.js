import { onNavigate } from "../main.js";
export const Home = () => {
  const HomeDiv = document.createElement('div');
  const nodoh1 = document.createElement('h1');
  const buttonLogIn = document.createElement('button');
  buttonLogIn.textContent = 'Iniciar Sesión';
  buttonLogIn.addEventListener('click', () => {
    onNavigate ('/login');
  });
  const buttonSignIn = document.createElement('button');
  buttonSignIn.textContent = 'Regístrate';
  buttonSignIn.addEventListener('click', () => {
    onNavigate ('/register');
  });
  nodoh1.textContent = 'Bienvenid@ a la red para actores, directores, productores y más...';
  HomeDiv.append(nodoh1, buttonLogIn, buttonSignIn);
  return HomeDiv;
};
