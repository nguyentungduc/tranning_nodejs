import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostController } from './post/post.controller';
import { PostService } from './post/post.service';
import { CatsModule } from './cats/cats.module';
import { UsersModule } from './users/users.module';
import { CommonService } from './common/common.service';
import { ScopeModule } from './scope/scope.module';
import { TransientService } from './scope/transient.service';
import { RequestService } from './scope/request.service';
import { SingletonService } from './scope/singleton.service';
import { CircularModule } from './circular/circular.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import regex from './config/regex.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { CacheModule } from '@nestjs/cache-manager';
import { ScheduleModule } from '@nestjs/schedule';
import { TasksService } from './tasks/tasks.service';
import { TasksModule } from './tasks/tasks.module';
import { AudioModule } from './audio/audio.module';
import { BullModule } from '@nestjs/bull';
import { OrdersModule } from './orders/orders.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { SeeModule } from './see/see.module';

@Module({
  imports: [
    CatsModule,
    UsersModule,
    ScopeModule,
    CircularModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration, regex],
      expandVariables: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: 3306,
      username: 'root',
      password: 'mysql',
      database: 'test',
      entities: [User],
      synchronize: true,
    }),
    CacheModule.register(),
    ScheduleModule.forRoot(),
    TasksModule,
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    AudioModule,
    OrdersModule,
    EventEmitterModule.forRoot(),
    SeeModule
  ],
  controllers: [AppController, PostController],
  providers: [
    AppService,
    PostService,
    CommonService,
    TransientService,
    RequestService,
    SingletonService,
  ],
})
export class AppModule {}
