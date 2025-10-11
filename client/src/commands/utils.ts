import { socketStore } from "../socket/socketStore";
import { ALERT } from "../messages/alert";
import { SokcetLocation } from "../enums/socketLocation";

export function checkLocation(allowed: SokcetLocation[]): boolean {
  const current = socketStore.getLocation();
  if (!allowed.includes(current)) {
    console.log(ALERT.INVALID_LOCATION);
    return false;
  }
  return true;
}
