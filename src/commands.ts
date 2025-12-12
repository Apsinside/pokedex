import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap, commandMapb } from "./command_map.js";
import { commandExplore } from "./command_explore.js";
import { commandCatch } from "./command_catch.js";
import { commandInspect } from "./command_inspect.js";
import { commandPokedex } from "./command_pokedex.js";
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
    explore:{
        name: "explore <area_name>",
        description: "Prints the names of the pokemon in the given area",
        callback: commandExplore,
    },
    catch:{
        name: "catch <pokemon_name>",
        description: "Tries to catch the given pokemon",
        callback: commandCatch,
    },inspect:{
        name: "inspect <pokemon_name>",
        description: "Print infos of the given pokemon if caught",
        callback: commandInspect,
    },pokedex:
    {
        name: "pokedex",
        description: "Print all pokemons that have been caught",
        callback: commandPokedex,
    },
    exit: {
      name: "exit",
      description: "Exits the pokedex",
      callback: commandExit,
    },    

    // can add more commands here
  };
}