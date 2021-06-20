import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './user.constant';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports:[
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [UserService],
  controllers: [UserController],
  exports:[ UserService,JwtModule ]
})
export class UserModule {}
