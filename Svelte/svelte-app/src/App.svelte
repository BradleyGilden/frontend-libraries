<script>
	let firstName = 'Bradley';
	let lastName = 'Gilden';
	let color = 'blue';
	let showText = true;

	// reactive value - changes state depending on it's dependant values
	$: name = firstName + ' ' + lastName;

	const toggle = () => {
		color = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
	};
	const changeName = () => {
		// because name is a reactive component, it will change with firstname
		firstName = firstName == 'Bradley' ? 'Michael' : 'Bradley';
	};
</script>

<main>
	<h1 style="color: {color}">Hello {name}!</h1>
	{#if showText}
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	{/if}
	<button on:click={toggle}>Change Color</button>
	<button on:click={changeName}>Change Name</button>
	<button on:click={() => {showText = !showText}}>Change Display</button>
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
