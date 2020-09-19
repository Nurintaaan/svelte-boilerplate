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

<div class="flex flex-col justify-center">
  <h1 class="text-center text-6xl m-2 mb-4">Hello World!</h1>
  <p class="text-center m-2 text-gray">
    This is Boilerplate for svelte application
  </p>
  <div class="flex flex-row justify-center">
    <button
      class="border border-green-dark rounded text-green-dark
        hover:bg-green-dark hover:text-white mt-4 p-4"
      data-testid="counter-button"
      on:click={handleClick}>
      Count is {count}
    </button>
  </div>
</div>
