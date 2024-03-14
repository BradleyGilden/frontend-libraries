<script>
  import FeedBackList from "../components/FeedBackList.svelte";
  let feedback = [
  {
    id: 1,
    rating: 10,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id diam id dui aliquet malesuada. Pellentesque rutrum purus ut auctor dapibus. Nunc congue varius porta. Sed auctor aliquam massa',
  },
  {
    id: 2,
    rating: 9,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id diam id dui aliquet malesuada. Pellentesque rutrum purus ut auctor dapibus. Nunc congue varius porta. Sed auctor aliquam massa',
  },
  {
    id: 3,
    rating: 7,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id diam id dui aliquet malesuada. Pellentesque rutrum purus ut auctor dapibus. Nunc congue varius porta. Sed auctor aliquam massa',
  },
];
</script>

<main>
  <FeedBackList { feedback } />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
