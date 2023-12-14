<!-- https://docs.astro.build/en/guides/integrations-guide/svelte/ -->
<script lang="ts">
  let { text } = $props();

  let count = $state(0);
</script>

<h1><slot /></h1>
<button
  on:click={() => {
    count += 1;
  }}
  class="btn btn-primary"
>
  {text}
  {count}
</button>
