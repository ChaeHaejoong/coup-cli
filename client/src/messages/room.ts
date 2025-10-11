export const ROOM = {
  JOIN: (playerName: string, playerCount: number, maxCount: number) =>
    `${playerName}님이 들어왔습니다. (${playerCount} / ${maxCount})`,

  LEFT: (playerName: string, playerCount: number, maxCount: number) =>
    `${playerName}님이 나갔습니다. (${playerCount} / ${maxCount})`,

  CREATED: (roomName: string) =>
    `새 방이 생성되었습니다.\n` + `방 이름: ${roomName}`,
};
