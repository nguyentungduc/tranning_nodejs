import { Inject, Injectable } from '@nestjs/common';
import { ConfigOptions, EnvConfig } from './interfaces';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';


@Injectable()
export class ConfigService {
  private readonly envConfig: EnvConfig;

  constructor(@Inject('CONFIG_OPTIONS') private options : ConfigOptions) {
    const filePath = `${process.env.NODE_ENV || 'development'}.env`;
    const envFile = path.resolve(__dirname, '../../', options.folder, filePath);
    console.log(envFile); 
    // this.envConfig = dotenv.parse(fs.readFileSync(envFile));
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}
