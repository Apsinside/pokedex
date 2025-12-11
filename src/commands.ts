import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap, commandMapb } from "./command_map.js";
import { CLICommand } from "./state.js";

export function getCommands(): Record<string, CLICommand> {
  return {
    help: {
      name: "help",
      description: "Prints available commands",
      callback: commandHelp,
    },
    map: {
      name: "map",
      description: "Prints the next 20 locations",
      callback: commandMap,
    },
    mapb:{
        name: "mapb",
        description: "Prints the previous 20 locations",
        callback: commandMapb,
    },
    exit: {
      name: "exit",
      description: "Exits the pokedex",
      callback: commandExit,
    },    

    // can add more commands here
  };
}