<script>
  import createRouter from '@spaceavocado/svelte-router';
  import RouterView from '@spaceavocado/svelte-router/component/view';

  import Navbar from './components/Navbar.svelte';
  import routes from './routes';
  
  createRouter({routes});
</script>

<Navbar />
<RouterView />