export function cleanInput(input: string): string[] {
  return input
  .toLowerCase()
  .split(" ")
  .filter(i => i);
}


import { createInterface } from 'node:readline';
import { stdin, stdout } from 'node:process';
const rl = createInterface({
    input: stdin,
    output: stdout,
    prompt: "Pokedex >"
});

function callback(line: string): void{
    const words = cleanInput(line);
    if(words.length){
        console.log(`Your command was: ${words[0]}`);
    }
    rl.prompt();
}

export function startREPL() : void{

    rl.prompt();
    rl.on('line', callback);
}