import { Injectable } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthService } from './auth.service';

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
