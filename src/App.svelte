<script>
	import Navigation from './Navigation.svelte';

	export let name;
	let src= 'tutorial/image.gif';
	
	let count = 0;
	function handleClick(){
		count++;
	}
	$: doubled = count * 2;
</script>

<main>
	<Navigation asdf="test"/>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<img src={src} alt="A man dances.">
	<button on:click={handleClick}>Clicked {count} {count === 1 ? 'time' : 'times'}</button>
	<p>{count} doubled is {doubled}</p>
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
	p {
		font-size: 2em;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>