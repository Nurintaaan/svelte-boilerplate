import Home from '../pages/Home.svelte';
import About from '../pages/About.svelte';

const routes = [
  {
    path: '/',
    name: 'HOME',
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
];

export default routes;