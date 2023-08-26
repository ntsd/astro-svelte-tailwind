<!-- https://docs.astro.build/en/guides/integrations-guide/svelte/ -->
<script lang="ts">
  export let text: string;
  let count = 0;
</script>

<h1><slot /></h1>
<button
  on:click={() => {
    count = count + 1;
  }}
  class="btn btn-primary"
>
  {text}
  {count}
</button>
