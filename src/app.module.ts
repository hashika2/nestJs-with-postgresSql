import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeedModule } from './feed/feed.module';
import keys from './config/keys';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot(keys.mongoUrl),
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'bookingsystemdb',
      autoLoadEntities: true,
      synchronize: true, // shouldn't be used in production - may lose data
    }),
    FeedModule,
    UserModule,
    // AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

