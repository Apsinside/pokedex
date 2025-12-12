import { State } from "./state.js"
import {Pokemon} from "./pokeapi.js"
export async function commandPokedex(state: State, ...args: string[]): Promise<void>{
    console.log("Your Pokedex: ")
    for(const key in state.caughtPokemon){
         console.log(`  -${state.caughtPokemon[key].name}`);
    }
}