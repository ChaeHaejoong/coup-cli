import type { ParsedCommand } from "./types";
import { ALERT } from "../messages/alert";

export default function parseCommand(command: string): ParsedCommand | null {
  const trimmed = command.trim();

  if (trimmed.length === 0) {
    console.log(ALERT.INVALID_COMMAND);
    return null;
  }

  const [commandType = "", subCommand, ...rest] = trimmed.split(/\s+/);
  const param = rest.length ? rest.join(" ") : undefined;

  return {
    commandType: commandType.toLowerCase(),
    subCommand: subCommand?.toLowerCase(),
    commandParam: param?.toLowerCase(),
  };
}
