import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { AuthServiceForWardRef } from './auth-forward-ref.service';

@Injectable()
export class UserServiceForwardRef {
  constructor(
    @Inject(forwardRef(() => AuthServiceForWardRef))
    private authService: AuthServiceForWardRef,
  ) {}

  getHello(): string {
    return 'Hello from UserService';
  }

  getAuthHello(): string {
    return this.authService.getHello();
  }
}
