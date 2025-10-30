import { input } from "@inquirer/prompts"
import { commandMap } from "../commands/commandMap";
import { ALERT } from "../messages/alert"

type CommandMap = typeof commandMap
type CommandGroup = keyof CommandMap

export async function startCLI() {
  while (true) {
    const answer = await input({ message: "> " });
    const [command, subcommand] = answer.trim().split(" ");

    if (!command || !(command in commandMap)) {
      console.log(ALERT.INVALID_COMMAND);
      continue;
    }

    const group = command as CommandGroup;
    const cmdGroup = commandMap[group];
    const handler = cmdGroup[subcommand as keyof typeof cmdGroup];

    if (typeof handler !== "function") {
      console.log(ALERT.INVALID_COMMAND);
      continue;
    }

    await handler();
  }
}

startCLI();
