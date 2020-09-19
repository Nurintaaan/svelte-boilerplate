<script>
  import createRouter from '@spaceavocado/svelte-router';
  import RouterView from '@spaceavocado/svelte-router/component/view';

  import Navbar from './components/Navbar.svelte';
  import Footer from './components/Footer.svelte';
  import routes from './routes';

  const navigation = [
    {
      path: '/',
      name: 'Home',
    },
    {
      path: '/about',
      name: 'About',
    },
  ];

  createRouter({ routes });
</script>

<main class="flex flex-col h-screen justify-between">
  <Navbar routes={navigation} />
  <RouterView />
  <Footer />
</main>
