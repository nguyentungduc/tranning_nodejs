// user.service.ts
import { Injectable, Scope } from '@nestjs/common';
import { ShareService } from './share.service';

@Injectable({ scope: Scope.REQUEST })
export class UserService {
    constructor(private shareService: ShareService) {}

    getUsers() : string {
        return "get user service";
    }
}
