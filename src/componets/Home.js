import { onNavigate } from "../main";
export const Home = () => {
  const HomeDiv = document.createElement('div');
  const nodoh1 = document.createElement('h1');
  const buttonLogIn = document.createElement('button');
  buttonLogIn.textContent = 'Iniciar Sesión';
  nodoh1.textContent = 'Bienvenid@ a la red para actores, directores, productores y más...';
  HomeDiv.append(nodoh1, buttonLogIn);
  return HomeDiv;
};
