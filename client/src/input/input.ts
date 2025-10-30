// handler 함수 타입 단언해버리고 쓰는 부분이 마음에 안듦.
// 좀 더 타입스크립트 적으로 해결하고 싶은데 방법을 당최 모르겠음.
// 부대에 싸지방이 생기면 생각 해내보기.

import { input } from "@inquirer/prompts";
import { commandMap } from "../commands/commandMap";
import { ALERT } from "../messages/alert";

type CommandMap = typeof commandMap;
type CommandGroup = keyof CommandMap;

export async function startCLI() {
  while (true) {
    const answer = await input({ message: "> " });

    if (answer.startsWith("!")) {
      await processCommand(answer.slice(1));
    } else {
      await processChat(answer);
    }
  }
}

async function processCommand(answer: string) {
  const [command, subcommand] = answer.trim().split(" ");

  if (!command || !(command in commandMap)) {
    console.log(ALERT.INVALID_COMMAND);
    return;
  }

  const group = command as CommandGroup;
  const cmdGroup = commandMap[group];
  const handler = cmdGroup[subcommand as keyof typeof cmdGroup] as
    | (() => Promise<void>)
    | (() => void);

  if (typeof handler !== "function") {
    console.log(ALERT.INVALID_COMMAND);
    return;
  }

  await handler();
}

async function processChat(answer: string) {}
