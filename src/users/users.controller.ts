import { CACHE_MANAGER } from '@nestjs/cache-manager';
import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Inject,
  ParseArrayPipe,
  Query,
  UseInterceptors,
  Version,
} from '@nestjs/common';
import { Cache } from 'cache-manager';

@Controller('users')
@UseInterceptors(ClassSerializerInterceptor)
export class UsersController {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  @Get(':id')
  @Version('2')
  async findOne(
    @Query('ids', new ParseArrayPipe({ items: Number, separator: ',' }))
    ids: number[],
  ) {
    await this.cacheManager.set('key', 'value');
    const value = await this.cacheManager.get('key');
    console.log(typeof ids === 'object', ids); // true
    return 'This action returns a user' + JSON.stringify(value);
  }
}
