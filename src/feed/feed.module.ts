import { Module } from '@nestjs/common';
import { FeedService } from './controllers/fead.service';
import { FeadController } from './controllers/fead.controller';
import { FeedPostEntity } from './model/post.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[
    TypeOrmModule.forFeature([FeedPostEntity])
  ],
  providers: [FeedService],
  controllers: [FeadController]
})
export class FeedModule {}
