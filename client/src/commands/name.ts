import { input } from "@inquirer/prompts";
import { NAME } from "../messages/name";
import { socketStore } from "../socket/socketStore";

export class NameCmds {
  private constructor() {}

  static async set() {
    const name = await input({
      message: NAME.SET_NAME,
    });

    socketStore.set({ name });
    console.log(NAME.SET_SUCCESS(name));
  }

  static get() {
    const name = socketStore.getName();

    if (!name) {
      console.log(NAME.EMPTY_NAME);
      return;
    }

    console.log(NAME.CURRENT_NAME(name));
  }
}
