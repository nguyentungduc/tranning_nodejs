import { Module } from '@nestjs/common';
import { CircularController } from './circular.controller';
import { AuthService } from './use.service';
import { UserService } from './auth.service';
import { ShareService } from './share.service';
import { LazyLoaderService } from './lazy-loader.service';

@Module({
  controllers: [CircularController],
  providers: [AuthService, UserService, ShareService, LazyLoaderService]
})
export class CircularModule {}
