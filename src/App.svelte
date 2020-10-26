<script>
	import Navigation from './Navigation.svelte';
	import TeamList from './TeamList.svelte';
	import AzureIcon from './azure-functions.svelte';
	export let name;
	let src= 'tutorial/image.gif';
	
	let count = 0;
	function handleClick(){
		count++;
	}
	$: console.log(`the count is ${count}`);
	$: doubled = count * 2;
</script>

<main>
	<Navigation asdf="test"/>
	<AzureIcon/>
	<h1>Leksaks Prime</h1>
	<p>Medlemmar i leksaksklubben</p>
	<p></p>
	<TeamList/>
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