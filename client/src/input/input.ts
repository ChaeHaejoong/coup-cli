import readline from "node:readline";
import parseCommand from "../commands/commandParser";
import handleCommand from "../commands/commandHandler";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "> "
})
rl.prompt();

rl.on("line", (command: string) => {
  const parsedCommand = parseCommand(command);
  handleCommand(parsedCommand);
  rl.prompt();
});