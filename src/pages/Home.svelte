<script>
  let count = 0;

  $: if (count >= 10) {
    alert(`count is dangerously high!`);
    count = 9;
  }

  function handleClick() {
    count += 1;
  }
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <h1>Hello World!</h1>
  <p class="font-bold">This is Boilerplate for svelte application</p>
  <button
    class="border border-green-dark rounded text-green-dark hover:bg-green-dark
      hover:text-white mt-4 p-4"
    data-testid="counter-button"
    on:click={handleClick}>
    Count is {count}
  </button>
</main>
