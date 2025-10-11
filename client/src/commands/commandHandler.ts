import type { ParsedCommand, SubCommandParams } from "./types";
import { ALERT } from "../messages/alert";
import handleRoomCommand from "./room/roomCommandHandler";
import handleLobbyCommand from "./lobby/lobbyCommandHandler";
import handleHelpCommand from "./help/helpCommandHandler";
import handleNameCommand from "./name/nameCommandHandler";

export default function handleCommand(pc: ParsedCommand | null): void {
  if (!pc) return;

  const params: SubCommandParams = {
    subCommand: pc.subCommand,
    commandParam: pc.commandParam,
  };

  switch (pc.commandType) {
    case "help":
      handleHelpCommand(params);
      return;
    case "room":
      handleRoomCommand(params);
      return;
    case "lobby":
      handleLobbyCommand(params);
      return;
    case "game":
      handleLobbyCommand(params);
      return;
    case "name":
      handleNameCommand(params);
      return;
    default:
      console.log(ALERT.INVALID_COMMAND);
  }
}
