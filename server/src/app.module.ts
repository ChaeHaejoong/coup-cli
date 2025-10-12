import { Module } from '@nestjs/common';
import { GameModule } from './game/game.module';
import { RoomModule } from './room/room.module';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [GameModule, RoomModule, ChatModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
