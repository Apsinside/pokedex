import { State } from "./state.js"
import { ShallowLocations, Location } from "./pokeapi.js";
export async function commandMap(state: State): Promise<void>{
    const locations = await state.pokeApi.fetchLocations(state.nextLocationsURL);

    for(const loc of locations.results){
        console.log(loc.name);
    }

    state.nextLocationsURL = locations.next;
    state.prevLocationsURL = locations.previous;
}

export async function commandMapb(state: State): Promise<void>{
    const locations = await state.pokeApi.fetchLocations(state.prevLocationsURL);

    for(const loc of locations.results){
        console.log(loc.name);
    }

    state.nextLocationsURL = locations.next;
    state.prevLocationsURL = locations.previous;
}