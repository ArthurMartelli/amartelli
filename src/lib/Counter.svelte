<script lang="ts">
  let count: number = 1;
  const increment = () => {
    count *= 2;
  };
</script>

<button on:click={increment}>
  Powers of 2: {count}
</button>
