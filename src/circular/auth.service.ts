import { Injectable } from '@nestjs/common';
import { ShareService } from './share.service';

@Injectable()
export class AuthService {
  constructor(private shareService: ShareService) {}
}
