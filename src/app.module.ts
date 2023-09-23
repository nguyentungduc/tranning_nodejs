import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostController } from './post/post.controller';
import { PostService } from './post/post.service';
import { CatsModule } from './cats/cats.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from './config/config.module';
import { CommonService } from './common/common.service';
import { ScopeModule } from './scope/scope.module';
import { TransientService } from './scope/transient.service';
import { RequestService } from './scope/request.service';
import { SingletonService } from './scope/singleton.service';
import { CircularModule } from './circular/circular.module';

@Module({
  imports: [CatsModule, AuthModule, UsersModule, ConfigModule.register({ folder: './config' }), ScopeModule, CircularModule],
  controllers: [AppController, PostController],
  providers: [AppService, PostService, CommonService, TransientService, RequestService, SingletonService],
})
export class AppModule {}

