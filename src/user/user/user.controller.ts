import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { User } from './User.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly appService: UserService) {}

  @Get()
  getHello(@Body() user:User): Object {
    return this.appService.getData(user);
  }


  @Post('/login')
  login(@Body() user:User):Object{
    return this.appService.setLogin(user);
  }
}
