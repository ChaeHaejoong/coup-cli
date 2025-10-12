import { Injectable } from '@nestjs/common';
import type { RoomSettings, RoomInfo } from './types/room';
import { Server, Socket } from 'socket.io';
import { WebSocketServer } from '@nestjs/websockets';

@Injectable()
export class RoomService {
  @WebSocketServer()
  server: Server;
  private rooms: Map<string, RoomSettings> = new Map();

  createRoom(roomInfo: RoomInfo, client: Socket) {
    if (this.rooms.has(roomInfo.roomName)) {
      client.emit('createRoomResponse', { status: 'error' });
      return;
    }

    const { roomName, ...roomSettings } = roomInfo;
    this.rooms.set(roomInfo.roomName, roomSettings);
    client.join(roomInfo.roomName);
    client.emit('createRoomResponse', { status: 'ok' });
  }

  joinRoom(roomName: string, client: Socket) {
    const room = this.rooms.get(roomName);
    if (!room) {
      client.emit('joinRoomResponse', {
        status: 'error',
      });
      return;
    }

    client.join(roomName);
    client.emit('joinRoomResponse', { status: 'ok' });
    this.broadcastRoomUpdate(roomName);
  }

  leaveRoom(roomName: string, client: Socket) {
    client.leave(roomName);
    client.emit('leaveRoomResponse', { status: 'ok' });

    const clientsInRoom = this.server.sockets.adapter.rooms.get(roomName);
    if (!clientsInRoom || clientsInRoom.size === 0) {
      this.rooms.delete(roomName);
    } else {
      this.broadcastRoomUpdate(roomName);
    }
  }

  private broadcastRoomUpdate(roomName: string) {
    const clients = this.server.sockets.adapter.rooms.get(roomName);
    const playerCount = clients ? clients.size : 0;
    const maxCount = this.rooms.get(roomName)?.maxPlayer;

    this.server
      .to(roomName)
      .emit('updateRoom', { roomName, playerCount, maxCount });
  }
}
