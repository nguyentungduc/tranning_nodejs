import { Controller, Get, Post } from '@nestjs/common';
import { Roles } from './decorators/roles.decorator';
import { Role } from './enums/role.enum';
import { Public } from 'src/auth/decorators/public.decorator';

@Controller('authorization')
export class AuthorizationController {

  @Get()
  @Roles(Role.Admin)
  getInfo() {
    return "aaaaaaaaaaa";
  }
}
