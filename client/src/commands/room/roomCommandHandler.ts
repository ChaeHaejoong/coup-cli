import { SokcetLocation } from "../../enums/socketLocation";
import { SubCommandParams } from "../types";
import { checkLocation } from "../utils";
import create from "./create";

export default function handleRoomCommand({
  subCommand,
  commandParam,
}: SubCommandParams) {
  switch (subCommand) {
    case "status":
      if (!checkLocation([SokcetLocation.ROOM])) return;

    case "start":
      // 방장인지도 확인해야함
      if (!checkLocation([SokcetLocation.ROOM])) return;

    case "list":
      if (!checkLocation([SokcetLocation.LOBBY])) return;

    case "join":
      if (!checkLocation([SokcetLocation.LOBBY])) return;

    case "create":
      if (!checkLocation([SokcetLocation.LOBBY])) return;
      create();
  }
}
