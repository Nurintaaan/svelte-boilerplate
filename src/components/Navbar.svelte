<script>
  import RouterLink from '@spaceavocado/svelte-router/component/link';

  export let routes;
</script>

<nav class="flex items-center justify-between flex-wrap p-6">
  <div class="flex items-center flex-shrink-0 mr-6">
    <span class="font-semibold text-xl tracking-tight">Svelte Boilerplate</span>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <ul class="text-sm lg:flex-grow">
      {#each routes as route}
        <li
          class="nav block mt-4 lg:inline-block lg:mt-0 hover:text-white
            hover:bg-green-medium mr-4">
          <RouterLink to={route.path}>{route.name}</RouterLink>
        </li>
      {/each}
    </ul>
    <div>
      <a
        href="#"
        class="inline-block text-sm px-4 py-2 leading-none border
          border-green-dark rounded text-green-dark hover:bg-green-dark
          hover:text-white mt-4 lg:mt-0">
        Hire Me
      </a>
    </div>
  </div>
</nav>
