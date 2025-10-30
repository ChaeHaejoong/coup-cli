import { input } from "@inquirer/prompts"
import { ROOM } from "../messages/room"

export class RoomCmds {
  private constructor() {}

  static async create() {
    const roomName = await input({ message: ROOM.ASK_ROOM_NAME })
    const maxPlayer = Number(await input({ message: ROOM.ASK_MAX_PLAYER }))
    console.log(`✅ 방 생성: ${roomName} (${maxPlayer}명)`)
    // TODO: 서버로 전송
  }

  static async join() {}
  
  static async leave() {
    console.log("✅ 방을 나갔습니다.")
  }
}
