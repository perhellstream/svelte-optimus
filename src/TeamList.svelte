<script>
    import { onMount } from 'svelte';
    import { getLeksaker, deleteLeksak, createLeksak, updateLeksak} from "./leksaker-data"
    let leksaker = []
    let newName = "";
    let selectedLeksak = null;
    onMount(async () => {
        leksaker = await getLeksaker();
    });
    const selectLeksak = (leksak) => {
        console.log("Selected!");
        console.log(leksak);
        selectedLeksak = {...leksak};
    }
    const clickDelete = async (id) => {
        if(deleteLeksak(id)){
            leksaker = leksaker.filter(leksak => leksak._id!==id);
            if(selectedLeksak._id === id)
            selectedLeksak = null;
        }
    }
    const newLeksak = async () =>{
        let created = await createLeksak(newName);
        if(created){
            leksaker = [...leksaker, created];
        }
        newName ="";
    }
    const changeLeksak = async (changedLeksak) =>{
        let updated = await updateLeksak(changedLeksak);
        if(updated){
            leksaker.find(leksak =>leksak._id === changedLeksak._id).name = changedLeksak.name;
            leksaker = [...leksaker];
        }
        selectedLeksak =null;
    }
</script>
<h2>Leksakstruppen:</h2>
<input placeholder="new member name" bind:value={newName}/>
<button on:click={() => newLeksak()}>Add</button>
{#if leksaker.length > 0 }
<ul>
{#each leksaker as leksak}
    <li on:click={() => selectLeksak(leksak)}>{leksak.name} <button on:click={() => clickDelete(leksak._id)}>Delete</button></li>
    {#if selectedLeksak?._id === leksak._id}
    <input bind:value={selectedLeksak.name}/>
    <button on:click={() => changeLeksak(selectedLeksak)}>Update!</button>
    {/if}
{/each}
</ul>
{/if}