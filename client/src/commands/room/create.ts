import { input } from "@inquirer/prompts";
import { createRoom } from "../../socket/room";
import { ROOM } from "../../messages/room";

export default async function create() {
  const roomName = await input({ message: ROOM.ASK_ROOM_NAME });
  const maxPlayer = await input({
    message: ROOM.ASK_MAX_PLAYER,
  });

  createRoom({ roomName, maxPlayer: Number(maxPlayer) });
}
