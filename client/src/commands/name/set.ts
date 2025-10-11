import { NAME } from "../../messages/name";
import { socketStore } from "../../socket/socketStore";

export default function set(commandParam: string | undefined) {
  if (!commandParam) {
    console.log(NAME.NO_PARAM);
    return;
  }

  socketStore.set({ name: commandParam });
  console.log(NAME.SET_SUCCESS(commandParam));
}
