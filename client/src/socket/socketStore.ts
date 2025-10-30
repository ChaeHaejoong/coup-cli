import { SokcetLocation } from "../enums/socketLocation";

type SocketState = {
  location: SokcetLocation;
  name?: string;
};

class SocketStore {
  private static instance: SocketStore;
  private state: SocketState = {
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
