import { Injectable } from '@nestjs/common';
import { UserService } from './auth.service';
import { AuthService } from './use.service';

@Injectable()
export class LazyLoaderService {
  private userService: UserService;
  private authService: AuthService;

  getLazyUserService(): UserService {
    if (!this.userService) {
      this.userService = new UserService(this.getLazyAuthService());
    }
    return this.userService;
  }

  getLazyAuthService(): AuthService {
    if (!this.authService) {
      this.authService = new AuthService(this.getLazyUserService());
    }
    return this.authService;
  }
}
