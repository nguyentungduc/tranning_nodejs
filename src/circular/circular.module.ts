import { Module } from '@nestjs/common';
import { CircularController } from './circular.controller';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { ShareService } from './share.service';
import { LazyLoaderService } from './lazy-loader.service';
import { UserServiceForwardRef } from './use-forward-ref.service';
import { AuthServiceForWardRef } from './auth-forward-ref.service';
import { RetrievingService } from './retrieving.service';
import { ResolveService } from './resolving-scope-service.service';

@Module({
  controllers: [CircularController],
  providers: [
    AuthService,
    UserService,
    ShareService,
    LazyLoaderService,
    UserServiceForwardRef,
    AuthServiceForWardRef,
    RetrievingService,
    ResolveService,
  ],
})
export class CircularModule {}
