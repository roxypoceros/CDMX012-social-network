import { onNavigate } from "../main.js";
document.body.style.backgroundColor = '#101010';

export const Home = () => {
  const HomeDiv = document.createElement('div');
  HomeDiv.classList.add('homeDiv');

  const logoDiv = document.createElement('img');
  logoDiv.classList.add('logoDiv');
  logoDiv.src = 'https://i.imgur.com/RKPm1dL.png';

  const nodoh1 = document.createElement('h1');
  const buttonLogIn = document.createElement('button');
  buttonLogIn.classList.add('buttonLogIn');
  buttonLogIn.textContent = 'Inicia Sesión';
  buttonLogIn.addEventListener('click', () => {
    onNavigate ('/login');
  });
  const buttonSignIn = document.createElement('button');
  buttonSignIn.classList.add('buttonSignIn')
  buttonSignIn.textContent = 'Regístrate';
  buttonSignIn.addEventListener('click', () => {
    onNavigate ('/register');
  });
  nodoh1.textContent = 'Bienvenid@ a la red para actores, directores, productores y más...';
  nodoh1.classList.add('textHome')
  HomeDiv.append(logoDiv, nodoh1, buttonLogIn, buttonSignIn);

  return HomeDiv;

};
