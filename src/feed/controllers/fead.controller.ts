import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UpdateResult } from 'typeorm';
import { FeedPost } from '../model/post.interface';
import { FeedService } from './fead.service';

@Controller('feed')
export class FeadController {
    constructor( private feedService: FeedService){
    }

    @Post()
    create(@Body() post: FeedPost): Observable<FeedPost>{
        return this.feedService.createPost(post)
    }

    @Get()
    findAll(): Observable<FeedPost[]>{
        return this.feedService.findAllPosts();
    }

//     @Put(':id')
//     update(
//         @Param('id') id: number,
//         @Body() postFeed: FeedPost
//     ): Observable<UpdateResult>{
//         return this.feedService.updatePost(id,postFeed)
//     }
// }
