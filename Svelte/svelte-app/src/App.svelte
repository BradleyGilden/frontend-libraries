<script>
  import FeedBackList from "../components/FeedBackList.svelte";
  import FeedBackStats from "../components/FeedBackStats.svelte";
  import FeedBackForm from "../components/FeedBackForm.svelte";
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

  $: count = feedback.length;
  $: average = feedback.reduce((prev, {rating}) => prev + rating, 0) / feedback.length || 0

  // handle event forwarded event
  const deleteFeedBack = (e) => {
    feedback = feedback.filter(item => item.id !== e.detail);
  };
</script>

<main class='container'>
  <FeedBackForm />
  <FeedBackStats {count} {average} />
  <FeedBackList { feedback }  on:delete-feedback={deleteFeedBack}/>
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
