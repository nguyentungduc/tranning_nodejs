import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { UserServiceForwardRef } from './use-forward-ref.service';

@Injectable()
export class AuthServiceForWardRef {
  constructor(
    // @Inject(forwardRef(() => UserServiceForwardRef))
    // private userService: UserServiceForwardRef,
  ) {}

  getHello(): string {
    return 'Hello from AuthService ForWardRef';
  }
}
