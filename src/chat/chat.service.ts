import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable,from } from 'rxjs';
import { User } from 'src/model/user.interface';
import { UserEntity } from 'src/model/UserEntity';
import { Repository } from 'typeorm';

@Injectable()
export class ChatService {
    constructor(
    @InjectRepository(UserEntity)
    private  userRepository: Repository<UserEntity>
    ){}


    loginUser(user:User): Observable<User>{
        return from(this.userRepository.save(user));
    }
}
