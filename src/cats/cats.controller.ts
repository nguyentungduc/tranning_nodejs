import { Controller, Get, Inject } from '@nestjs/common';
import { CatsService } from './cats.service';
import { PostService } from 'src/post/post.service';
import { ConfigService } from '@nestjs/config';

@Controller('cats')
export class CatsController {
  constructor(
    private readonly configService: ConfigService,
    @Inject('CatsService') 
    // @Inject('AliasedCatsService') 
    private readonly catService: CatsService,
    ) {}

  @Get()
  getHello(): string {
    const port = this.configService.get<number>('port');
    const postcodeRegex = this.configService.get<RegExp>('regex.postcode');

    console.log(port, postcodeRegex);
    return "aaa";
    // return this.catService.getCat();
  }
}
