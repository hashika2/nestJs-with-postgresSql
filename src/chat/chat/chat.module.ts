import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/model/UserEntity';
import { ChatController } from '../chat.controller';
import { ChatService } from '../chat.service';

@Module({
    imports:[
        TypeOrmModule.forFeature([UserEntity])
      ],
      providers: [ChatService],
      controllers:[ChatController]
})
export class ChatModule {}
