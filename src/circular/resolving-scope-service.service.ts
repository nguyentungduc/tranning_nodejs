import { Injectable, OnModuleInit, Scope } from '@nestjs/common';
import { ContextIdFactory, ModuleRef } from '@nestjs/core';
import { UserService } from './user.service';

@Injectable()
export class ResolveService implements OnModuleInit {
  constructor(private moduleRef: ModuleRef) {}

  // async onModuleInit() {
  //   const userServices = await Promise.all([
  //     this.moduleRef.resolve(UserService),
  //     this.moduleRef.resolve(UserService),
  //   ]);
    
  //   console.log("onModuleInit", userServices[0] === userServices[1]); // false
  // }
  async onModuleInit() {
    const contextId = ContextIdFactory.create();
    console.log(contextId);
    const userServices = await Promise.all([
      this.moduleRef.resolve(UserService, contextId),
      this.moduleRef.resolve(UserService, contextId),
    ]);
    
    console.log("onModuleInit", userServices[0] === userServices[1]); // true
  }
}
