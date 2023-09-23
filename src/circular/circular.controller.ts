import { Controller, Get } from '@nestjs/common';
import { LazyLoaderService } from './lazy-loader.service';

@Controller('circular')
export class CircularController {
    constructor(private readonly lazyLoaderService: LazyLoaderService) {}

    @Get()
    getUsers(): string {
      const userService = this.lazyLoaderService.getLazyUserService();
      return userService.getUsers();
    }
}
