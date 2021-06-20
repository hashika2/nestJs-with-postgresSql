import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { User } from './User.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
    constructor(private jwtService: JwtService){}

    getData(user:User):Object | String{
        return {
            name:user
        };
    }

    setLogin(user:User):Object{
        const {email,password} = user;
        const payload = {email:email, password:password}

        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
