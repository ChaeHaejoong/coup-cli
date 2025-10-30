export const ROOM = {
  JOIN: (playerName: string, playerCount: number, maxCount: number) =>
    `${playerName}님이 들어왔습니다. (${playerCount} / ${maxCount})`,

  LEFT: (playerName: string, playerCount: number, maxCount: number) =>
    `${playerName}님이 나갔습니다. (${playerCount} / ${maxCount})`,

  ASK_ROOM_NAME: `방 이름을 입력해주세요`,

  INVALID_ROOM_NAME: `방 이름을 한 글자 이상 입력해주세요`,

  ASK_MAX_PLAYER: `최대 인원을 몇 명으로 설정하시겠어요? (2 ~ 6)`,

  INVALID_VALUE: `유효한 숫자를 입력해주세요`,

  CREATE_ROOM: (name: string, count: number) =>
    `방 생성 완료!\n` + `${name}(${count}명)`,
};
