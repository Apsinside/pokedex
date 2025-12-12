import { createInterface, type Interface  } from 'node:readline';
import { stdin, stdout } from 'node:process';
import { getCommands } from './commands.js';
import { PokeAPI, Pokemon } from './pokeapi.js';
import { stringify } from 'node:querystring';
import { recordArtifact } from 'vitest';


export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State, ...args: string[]) => Promise<void>;
};

export type State ={
    readline: Interface;
    commands: Record<string, CLICommand>;
    pokeApi: PokeAPI;
    prevLocationsURL: string | undefined;
    nextLocationsURL: string | undefined;
    caughtPokemon: Record<string, Pokemon>;
}

export function initState(cacheInterval: number) {
    const readline = createInterface({
        input: stdin,
        output: stdout,
        prompt: "Pokedex >"
    });
    const commands = getCommands();
    const pokeApi = new PokeAPI(cacheInterval);
    return{ readline,
            commands,
            pokeApi, 
            prevLocationsURL: undefined, 
            nextLocationsURL: undefined, 
            caughtPokemon: {}
        }
}