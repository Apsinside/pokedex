// repl.js actually refers to repl.ts
import { startREPL } from "./repl.js";
import {initState, State} from "./state.js"
function main() {
  const state: State = initState(5 * 60 * 1000);
  startREPL(state);
}

main();