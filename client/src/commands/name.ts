import { input } from "@inquirer/prompts";
import { NAME } from "../messages/name";
import { socketStore } from "../socket/socketStore"; 

export class NameCmds {
  private constructor() {}
  
  static async set() {
    const name = await input({
      message: NAME.SET_NAME
    });
    
    socketStore.set({ name })
    console.log(NAME.SET_SUCCESS)
  }
  
  static get() {
    
  }
}