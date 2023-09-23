import { Controller, Get, Inject } from '@nestjs/common';
import { CatsService } from './cats.service';
import { PostService } from 'src/post/post.service';

@Controller('cats')
export class CatsController {
  constructor(
    @Inject('CatsService') 
    // @Inject('AliasedCatsService') 
    private readonly catService: CatsService,
    ) {}

  @Get()
  getHello(): string {
    return this.catService.getCat();
  }
}
