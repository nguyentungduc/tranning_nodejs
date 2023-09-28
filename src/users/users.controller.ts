import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Inject,
  Param,
  ParseArrayPipe,
  ParseIntPipe,
  Post,
  Query,
  SerializeOptions,
  UseInterceptors,
  Version,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { FindOneParams } from './dto/find-one-user.dto';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { User } from './user.entity';
import { RoleEntity } from './role.entity';

@Controller('users')
@UseInterceptors(ClassSerializerInterceptor)
export class UsersController {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }


  @Get()
  @Version('1')
  @SerializeOptions({ excludePrefixes: ['id'] })
  async getUsers() {
    return new User({
        id: 1,
        firstName: '_Kamil',
        lastName: 'Mysliwiec',
        password: 'password',
        role: new RoleEntity({ id: 1, name: 'admin' }),
      });
  };

  @Get(':id')
  @Version('2')
  async findOne(
    @Query('ids', new ParseArrayPipe({ items: Number, separator: ',' }))
    ids: number[],
  ) {
    await this.cacheManager.set('key', 'value');
    const value = await this.cacheManager.get('key');
    console.log(typeof ids === 'object', ids); // true
    return 'This action returns a user' +  value;
  }
}
