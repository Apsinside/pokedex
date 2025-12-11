import { createInterface, type Interface  } from 'node:readline';
import { stdin, stdout } from 'node:process';
import { getCommands } from './commands.js';
import { PokeAPI } from './pokeapi.js';
import { Url } from 'node:url';

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => Promise<void>;
};

export type State ={
    readline: Interface;
    commands: Record<string, CLICommand>;
    pokeApi: PokeAPI;
    prevLocationsURL: string | undefined;
    nextLocationsURL: string | undefined;
}

export function initState(): State{
    const readline = createInterface({
        input: stdin,
        output: stdout,
        prompt: "Pokedex >"
    });
    const commands = getCommands();
    const pokeApi = new PokeAPI();
    return{ readline, commands, pokeApi, prevLocationsURL: undefined, nextLocationsURL: undefined}
}