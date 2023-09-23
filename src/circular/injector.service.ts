// sử dụng moduleRef
import { ModuleRef } from '@nestjs/core';
import { Injectable } from '@nestjs/common';
import { UserService } from './auth.service';

@Injectable()
export class AuthService {
  constructor(private readonly moduleRef: ModuleRef) {}

  async getUsersFromUserService(): Promise<string> {
    const userService = await this.moduleRef.create(UserService);

    return userService.getUsers();
  }
}
