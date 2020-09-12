<script>
  import { Router } from 'svelte-routing'
  import Route from './routes/Route.svelte'
  import Navbar from './components/Navbar.svelte'

  export let url
</script>

<Router {url}>
  <Navbar />
  <Route />
</Router>
