import { SokcetLocation } from "../../enums/socketLocation";
import { ALERT } from "../../messages/alert";
import { SubCommandParams } from "../types";
import { checkLocation } from "../utils";
import create from "./create";

export default function handleRoomCommand({
  subCommand,
  commandParam,
}: SubCommandParams) {
  switch (subCommand) {
    case "create":
      if (!checkLocation([SokcetLocation.LOBBY])) return;
      create();
      return;

    case "join":
      if (!checkLocation([SokcetLocation.LOBBY])) return;

    case "leave":
      if (!checkLocation([SokcetLocation.LOBBY])) return;

    default:
      console.log(ALERT.INVALID_COMMAND);
  }
}
