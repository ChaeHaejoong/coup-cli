import { socketStore } from "../socket/socketStore";
import { ALERT } from "../messages/alert";
import { SokcetLocation } from "../enums/socketLocation";

/**
 * 명령어 사용 가능한 위치를 배열에 담기.
 */
export function checkLocation(allowed: SokcetLocation[]): boolean {
  const current = socketStore.getLocation();
  if (!allowed.includes(current)) {
    console.log(ALERT.INVALID_LOCATION);
    return false;
  }
  return true;
}
