import { RoomCmds } from "./room";
import { NameCmds } from "./name";

export const commandMap = {
  room: {
    create: RoomCmds.create,
    join: RoomCmds.join,
    leave: RoomCmds.leave,
  },
  name: {
    set: NameCmds.set,
    get: NameCmds.get,
  },
};
