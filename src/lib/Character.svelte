<script lang="ts">

    // props
    export let character
</script>

<div class="img-character">
    <img class="img-character" src={character.image} alt={character.name}/>
    <h1>{character?.name}</h1>
    <h3>{character?.species}</h3>
</div>

<style>
    .img-character {
        margin : 5px
    }
</style>
