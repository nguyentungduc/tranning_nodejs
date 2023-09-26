import { Controller, Get } from '@nestjs/common';
import { LazyLoaderService } from './lazy-loader.service';
import { ResolveService } from './resolving-scope-service.service';

@Controller('circular')
export class CircularController {
    constructor(
        private readonly lazyLoaderService: LazyLoaderService,
        private readonly resolveService: ResolveService
    ) {}

    @Get("aaa")
    getUsers(): any {
    //   const userService = this.lazyLoaderService.getLazyUserService();
      this.resolveService.onModuleInit;
    //   return userService.getUsers();
    }
}
