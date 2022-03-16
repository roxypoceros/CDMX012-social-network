import { Home } from './componets/Home.js';
import { Register } from './componets/Register.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/': Home,
'/Register': Register,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  rootDiv.appendChild(routes[pathname]());
};

window.onpopstate = () => {
  rootDiv.appendChild(routes[window.location.pathname]());
};
const component = routes[window.location.pathname];

rootDiv.appendChild(component());
