export type RoomSettings = {
  maxPlayer: number;
};

export type RoomInfo = {
  roomName: string;
} & RoomSettings;