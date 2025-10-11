import { ALERT } from "../../messages/alert";
import { SubCommandParams } from "../types";
import { checkLocation } from "../utils";
import set from "./set";
import get from "./get";
import { SokcetLocation } from "../../enums/socketLocation";

export default function handleNameCommand({
  subCommand,
  commandParam,
}: SubCommandParams) {
  switch (subCommand) {
    case "set":
      if (!checkLocation([SokcetLocation.LOBBY])) return;
      set(commandParam);
      return;

    case "get":
      if (!checkLocation([SokcetLocation.LOBBY])) return;
      get();
      return;

    default:
      console.log(ALERT.INVALID_COMMAND);
  }
}
