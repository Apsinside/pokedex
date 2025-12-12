import { State } from "./state.js"
import {Pokemon} from "./pokeapi.js"
export async function commandInspect(state: State, ...args: string[]): Promise<void>{
    if (args.length !== 1) {
        throw new Error("you must provide a pokemon name");
    }
    const pokemonName = args[0];
    const pokemon = state.caughtPokemon[pokemonName];
    if(!pokemon){
        console.log(`${pokemonName} has not been caught yet!`);
        return;
    }

    console.log(`Name: ${pokemon.name}`);
    console.log(`Height: ${pokemon.height}`);
    console.log(`Weight: ${pokemon.weight}`);
    console.log(`Stats:`);
    for(const entry of pokemon.stats){
        console.log(`  -${entry.stat.name}: ${entry.base_stat}`);
    }
    console.log(`Types:`);
    for(const entry of pokemon.types){
         console.log(`  -${entry.type.name}`);
    }
}