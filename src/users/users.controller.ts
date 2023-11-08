import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  UseInterceptors,
  Version,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Observable, of } from 'rxjs';

@Controller('users')
@UseInterceptors(ClassSerializerInterceptor)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  @Version('2')
  async findOne() {
    return this.usersService;
  }

  @Get('')
  findAll(): Observable<any[]> {
    return of([]);
  }
}
