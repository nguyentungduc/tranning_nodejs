import { Body, Controller, Post } from '@nestjs/common';
import { ConfigService } from './config.service';

@Controller('config')
export class ConfigController {
  constructor(private readonly catService: ConfigService) {}
}
