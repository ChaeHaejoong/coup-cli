import { socket } from "./client";
import type { RoomInfo } from "../../../server/src/room/types/room";

export function createRoom(roomInfo: RoomInfo) {
  socket.emit("creteRoom", roomInfo);
}

export function joinRoom(roomName: string) {
  socket.emit("joinRoom", roomName);
}

export function leaveRoom(roomName: string) {
  socket.emit("leaveRoom", roomName);
}
