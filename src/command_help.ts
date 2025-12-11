import { State } from "./state.js"

export function commandHelp(state: State): void{
    console.log(`Welcome to the Pokedex!\nUsage:\n`);
    for(const key in state.commands){
        const command = state.commands[key]
        console.log(`${command.name}: ${command.description}`);
    }
}
    