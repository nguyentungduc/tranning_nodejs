// user.service.ts
import { Injectable } from '@nestjs/common';
import { ShareService } from './share.service';

@Injectable()
export class UserService {
    constructor(private shareService: ShareService) {}

    getUsers() : string {
        return "get user service";
    }
}
