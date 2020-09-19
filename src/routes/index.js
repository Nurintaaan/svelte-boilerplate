import Home from '../pages/Home.svelte';
import About from '../pages/About.svelte';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
];

export default routes;
