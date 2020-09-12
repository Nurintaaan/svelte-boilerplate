<script>
  import { Route } from 'svelte-routing'
  import Home from '../pages/Home.svelte'
  import About from '../pages/About.svelte'
</script>

<div>
  <Route path="about" component={About} />
  <Route path="/">
    <Home name="World" />
  </Route>
</div>
