import readline from "node:readline";
import routeInput from "./inputRourter";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "> ",
});
rl.prompt();

rl.on("line", (command: string) => {
  routeInput(command);
  rl.prompt();
});
