import { Home } from './componets/Home.js';
import { Login } from './componets/Login.js';
import { Register } from './componets/Register.js';
import { Feed } from './componets/Feed.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/': Home,
  '/register': Register,
  '/login': Login,
  '/feed': Feed,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }

  rootDiv.appendChild(routes[pathname]());
};

window.onpopstate = () => {
  rootDiv.appendChild(routes[window.location.pathname]());
};
const component = routes[window.location.pathname];

rootDiv.appendChild(component());


