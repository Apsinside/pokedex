import { State } from "./state.js"
export async function commandCatch(state: State, ...args: string[]): Promise<void>{
    if (args.length !== 1) {
        throw new Error("you must provide a pokemon name");
    }
    const pokemonName = args[0];
    console.log(`Throwing a Pokeball at ${pokemonName}...`);
    const pokemon = await state.pokeApi.fetchPokemon(pokemonName);
    const res = Math.floor(Math.random() * pokemon.base_experience);
    if (res > 40) {
        console.log(`${pokemon.name} escaped!`);
        return;
    }

    console.log(`${pokemon.name} was caught!`);
    console.log("You may now inspect it with the inspect command.");
    state.caughtPokemon[pokemon.name] = pokemon;
}