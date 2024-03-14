<script>
  import FeedBackItem from "./FeedBackItem.svelte";
  // get component props, set to a default of []
  export let feedback = []

</script>

{#each feedback as fb (fb.id)}
  <h3><FeedBackItem item={fb} on:delete-feedback /></h3>
{/each}
