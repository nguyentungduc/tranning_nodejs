import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  UseInterceptors,
  Version,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
@UseInterceptors(ClassSerializerInterceptor)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  @Version('2')
  async findOne() {
    return this.usersService;
  }
}
