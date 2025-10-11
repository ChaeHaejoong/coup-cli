import handleCommand from "../commands/commandHandler";
import parseCommand from "../commands/commandParser";

export default function routeInput(input: string) {
  if (input.startsWith("!")) {
    const parsedCommand = parseCommand(input.slice(1));
    handleCommand(parsedCommand);
  } else {
    // todo
  }
}
