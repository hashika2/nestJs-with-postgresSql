import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository, UpdateResult } from 'typeorm';
import { FeedPostEntity } from '../model/post.entity';
import { FeedPost } from '../model/post.interface';

@Injectable()
export class FeedService {
    constructor(
        @InjectRepository(FeedPostEntity)
        private readonly feedPostRepository: Repository<FeedPostEntity>
    ) { }

    createPost(feedPost: FeedPost): Observable<FeedPost> {
        return from(this.feedPostRepository.save(feedPost));
    }

    findAllPosts(): Observable<FeedPost[]>{
        return from(this.feedPostRepository.find());
    }

    updatePost(id:number,postFeed: FeedPost): Observable<UpdateResult>{
        return from(this.feedPostRepository.update(id,postFeed))
    }
}
