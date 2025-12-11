import { State } from './state.js';

function makeOnPrompt(state: State) {
    return async (line: string) => {
        const words = cleanInput(line);
        if(words.length === 0){
            state.readline.prompt();
        }
        const commandEntered = words[0];
        const commands = state.commands;
        const command = commands[commandEntered];
        if(!command){
            console.log(`Unknown command: "${commandEntered}". Type "help" for a list of commands.`,);       
            state.readline.prompt();
            return;
        }
        try{
            await command.callback(state);
        }catch(err){
            console.log(err);
        }
        state.readline.prompt();
    }

}

export function startREPL(state: State) : void{
    state.readline.prompt();
    state.readline.on('line', makeOnPrompt(state));
}

export function cleanInput(input: string): string[] {
  return input
  .toLowerCase()
  .split(" ")
  .filter(i => i);
}
