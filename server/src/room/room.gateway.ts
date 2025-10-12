import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { RoomService } from './room.service';
import type { RoomInfo } from './types/room';

@WebSocketGateway()
export class RoomGateway {
  constructor(private roomService: RoomService) {}

  @SubscribeMessage('createRoom')
  createRoom(
    @MessageBody() roomInfo: RoomInfo,
    @ConnectedSocket() client: Socket,
  ) {
    return this.roomService.createRoom(roomInfo, client);
  }

  @SubscribeMessage('joinRoom')
  joinRoom(@MessageBody() roomName: string, @ConnectedSocket() client: Socket) {
    return this.roomService.joinRoom(roomName, client);
  }

  @SubscribeMessage('leaveRoom')
  leaveRoom(
    @MessageBody() roomName: string,
    @ConnectedSocket() client: Socket,
  ) {
    return this.roomService.leaveRoom(roomName, client);
  }
}
