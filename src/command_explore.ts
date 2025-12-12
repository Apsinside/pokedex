import { State } from "./state.js"
import { ShallowLocations, Location } from "./pokeapi.js";
import { serialize } from "node:v8";
export async function commandExplore(state: State, ...args: string[]): Promise<void>{
    if (args.length !== 1) {
        throw new Error("you must provide a location name");
    }

    console.log(`Exploring ${args[0]}...`);
    const location = await state.pokeApi.fetchLocation(args[0]);
    for(const encounters of location.pokemon_encounters){
        console.log(`- ${encounters.pokemon.name}`);
    }

}
