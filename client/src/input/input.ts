import { input } from "@inquirer/prompts";
import routeInput from "./inputRourter";

export async function startCLI() {
  while (true) {
    const answer = await input({ message: "> " });
    routeInput(answer.trim());
  }
}

startCLI();
