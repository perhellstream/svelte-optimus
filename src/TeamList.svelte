<script>
    import { onMount } from 'svelte';
    import getLeksaker from "./leksaker-data"
    let leksaker = []
    onMount(async () => {
        console.log(":D");
        leksaker = await getLeksaker();
        console.log(leksaker);
		//leksaker = [{name:"1"},{name:"2"}]
	});
</script>
<h2>Leksakstruppen:</h2>
{#if leksaker.length > 0 }
<ol>
{#each leksaker as leksak}
    <li>{leksak.name}</li>
{/each}

</ol>
{/if}