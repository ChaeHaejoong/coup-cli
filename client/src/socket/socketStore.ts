import { SokcetLocation } from "../enums/socketLocation";

type SocketState = {
  location: SokcetLocation;
  name?: string;
};

class SocketStore {
  private static instance: SocketStore;
  private state: SocketState = {
    //* 인스턴스 생성 시점에 클라이언트는 로비에 있을 수 밖에 없음 */
    location: SokcetLocation.LOBBY,
  };

  private constructor() {}

  static getInstance() {
    if (!SocketStore.instance) {
      SocketStore.instance = new SocketStore();
    }
    return SocketStore.instance;
  }
  
  set(state: Partial<SocketState>) {
    this.state = { ...this.state, ...state };
  }

  getName() {
    return this.state.name;
  }

  getLocation() {
    return this.state.location;
  }
}

export const socketStore = SocketStore.getInstance();
