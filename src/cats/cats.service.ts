import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { CommonService } from 'src/common/common.service';

@Injectable()
export class CatsService {
//   constructor(
//     @Inject(forwardRef(() => CommonService))
//     private commonService: CommonService,
//   ) {}

  getCat(): any {
    return {
      cat_id: 1,
      cat_name: 'cat name',
    };
  }
}
