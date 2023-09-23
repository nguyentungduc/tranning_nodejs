import { Controller, Get, Inject, Param } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
  constructor(
    private readonly postService: PostService
  ) {}

  @Get('info')
  getInfo(): object {
    this.postService.addData('Some data');
    const data = this.postService.getInstanceId();
    const instanceId = this.postService.getInstanceId();
    return { data,instanceId };
  }
}
