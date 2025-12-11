import { createInterface } from 'node:readline';
import { exit, stdin, stdout } from 'node:process';
import { commandExit } from "./command_exit.js"
import { getCommands } from './commands.js';

const rl = createInterface({
    input: stdin,
    output: stdout,
    prompt: "Pokedex >"
});

function onPrompt(line: string): void{
    const words = cleanInput(line);
    if(words.length === 0){
        rl.prompt();
    }
    const commands = getCommands();
    const command = commands[words[0]];
    if(command){
         command.callback(commands);
    }
    rl.prompt();
}

export function startREPL() : void{

    rl.prompt();
    rl.on('line', onPrompt);
}

export function cleanInput(input: string): string[] {
  return input
  .toLowerCase()
  .split(" ")
  .filter(i => i);
}
