<script lang="ts">
import type { load } from "./base/funcs";
import { LoadType, Url } from "./base/types";
import axios from 'axios'
import Character from './lib/Character.svelte'
import Button from './lib/Button.svelte'

/**
 * variables
 */
let characters = []
let page = 1
  
const loadImage : load = async(rickAndMortyType : LoadType, page : number = 1) : Promise<[]> =>{
  let response = null
  switch(rickAndMortyType) {
    case LoadType.CHARACTERS:
      response = await axios.get(`${Url.CHARACTERS}?page=${page}`)
      break
    case LoadType.EPISODES:
      response = await axios.get(`${Url.EPISODES}?page=${page}`)
      break
    case LoadType.LOCATIONS:
      response = await axios.get(`${Url.LOCATIONS}?page=${page}`)
      break
    default:
      throw new Error(`rickAndMortyType is ${rickAndMortyType}`)
  }

  return response.status === 200 ? response.data.results : null
}

const nextPage = async() : Promise<void> => { 
  ++page
  await init()
}

const previousPage = async() : Promise<void> =>{
  --page
  await init()
}

const initPage = async() : Promise<void> => {
  page = 1
  await init()
}

const init = async() =>{
  characters = await loadImage(LoadType.CHARACTERS,page)
}

init()

// onMount(async()=>{
//   await init()
// })
</script>

<main>
  <h1>Rick And Morty</h1>
  <div class="side-buttons">
    <Button placeholder={"Previous"} onPress={previousPage} isDisabled={page === 1} />
    <Button placeholder={"Next"} onPress={nextPage}  />
    <Button placeholder={"Init"} onPress={initPage} isDisabled={page === 1} />
  </div>
  <div class="img-container" >
    {#each characters as character}
      <Character character={character}/>
    {/each}
  </div>
</main>

<style>
  .side-buttons{
    display : flex;
    flex : 1;
    flex-direction: row;
    justify-content: space-around;
  }

  .img-container {
    display: flex;
    flex : 1;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    text-align: center;
    flex-wrap: wrap;
  }

</style>