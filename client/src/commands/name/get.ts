import { NAME } from "../../messages/name";
import { socketStore } from "../../socket/socketStore";

export default function get() {
  const name = socketStore.getName();
  
  if (!name) {
    console.log(NAME.EMPTY_NAME);
    return;
  }

  console.log(NAME.CURRENT_NAME(name));
}
