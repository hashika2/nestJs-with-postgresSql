import { Module } from '@nestjs/common';
import { FeedService } from './controllers/fead.service';
import { FeadController } from './controllers/fead.controller';
import { FeedPostEntity } from './model/post.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/user/user/user.constant';

@Module({
  imports:[
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
    TypeOrmModule.forFeature([FeedPostEntity])
  ],
  providers: [FeedService],
  controllers: [FeadController],
  exports:[ FeedService ]
})
export class FeedModule {}
