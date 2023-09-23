import { Module } from '@nestjs/common';
import { ScopeController } from './scope.controller';
import { SingletonService } from './singleton.service';
import { RequestService } from './request.service';
import { TransientService } from './transient.service';

@Module({
  providers: [SingletonService, RequestService, TransientService],
  controllers: [ScopeController]
})
export class ScopeModule {}
