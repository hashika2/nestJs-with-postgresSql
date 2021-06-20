import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UpdateResult } from 'typeorm';
import { threadId } from 'worker_threads';
import { FeedPost } from '../interfaces/post.interface';
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

    @Put(':id')
    update(
        @Param('id') id: number,
        @Body() postFeed: FeedPost
    ): Observable<UpdateResult>{
        return this.feedService.updatePost(id,postFeed)
    }

    @Post('/data')
    getData(
        @Query('name') name: string
    ): Observable<FeedPost[]> {
        console.log(name) 
        return this.feedService.getDataService()
    }

    @Delete(':id')
    delete(@Param('id') id: number){
        return this.feedService.deleteUser(id)
    }
}
