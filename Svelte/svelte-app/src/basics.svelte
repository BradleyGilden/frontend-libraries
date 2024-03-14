<script>
  let firstName = "Bradley";
  let lastName = "Gilden";
  let color = "blue";
  let showText = true;
  let username = '';
  let users = sessionStorage.getItem('users') ? JSON.parse(sessionStorage.getItem('users'))
  : [
    {
      id: "1",
      name: "john",
    },
    {
      id: "2",
      name: "Terry",
    },
    {
      id: "3",
      name: "Paul",
    },
  ];
  $: userId = users.length;

  // reactive value - changes state depending on it's dependant values
  $: name = firstName + " " + lastName;

  const toggle = () => {
    color =
      "#" + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, "0");
  };
  const changeName = () => {
    // because name is a reactive component, it will change with firstname
    firstName = firstName == "Bradley" ? "Michael" : "Bradley";
  };

  const addUser = () => {
    console.log(username);
    users = [...users, { id: userId + 1, name: username }];
    sessionStorage.setItem('users', JSON.stringify(users));
  }
</script>

<main>
  <h1 style="color: {color}">Hello {name}!</h1>
  {#if showText}
    <p>
      Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
      how to build Svelte apps.
    </p>
  {:else}
    <p>No text</p>
  {/if}
  <button on:click={toggle}>Change Color</button>
  <button on:click={changeName}>Change Name</button>
  <button
    on:click={() => {
      showText = !showText;
    }}>Change Display</button
  >
  <input type='text' placeholder='Username' on:input={(e) => {username = e.target.value} } />
  <button on:click={addUser}>Add User</button>
  {#each users as user (user.id) }
    <p>{user.id}: {user.name}</p>
  {/each}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
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
