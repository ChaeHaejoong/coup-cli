import { input } from "@inquirer/prompts";
import { createRoom } from "../../socket/room";
import { ROOM } from "../../messages/room";

export default async function create() {
  // const { roomName } = await inquirer.prompt({
  //   type: "input",
  //   name: "roomName",
  //   message: ROOM.ASK_ROOM_NAME,
  //   validate: (input: string) => (input.trim() ? true : ROOM.INVALID_ROOM_NAME),
  // });
  const roomName = await input({ message: ROOM.ASK_ROOM_NAME });
  const maxPlayer = Number(await input({ message: ROOM.ASK_MAX_PLAYER }));

  // const { maxPlayer } = await inquirer.prompt({
  //   type: "input",
  //   name: "maxPlayer",
  //   message: ROOM.ASK_MAX_PLAYER,
  //   validate: (input: string) => {
  //     const num = Number(input);
  //     if (isNaN(num) || num < 2 || num > 6) {
  //       return ROOM.INVALID_VALUE;
  //     }
  //     return true;
  //   },
  // });

  createRoom({ roomName, maxPlayer });
}
