import { Body, Controller, Post,Headers } from '@nestjs/common';

@Controller('chat')
export class ChatController {
    @Post()
    login(@Body() @Headers() headers):string{
        console.log(headers)
        return "hello";
    }
}
