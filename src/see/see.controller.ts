import { Controller, Get, Res, Sse } from '@nestjs/common';
import { Response } from 'express';
import { readFileSync } from 'fs';
import { join } from 'path';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Controller()
export class SeeController {
    @Get()
    index(@Res() response: Response) {
      response
        .type('text/html')
        .send(readFileSync(join(__dirname, 'index.html')).toString());
    }
  
    @Sse('sse')
    sse(): Observable<MessageEvent> {
      return interval(1000).pipe(
        map((_) => ({ data: { hello: 'world' } }) as MessageEvent),
      );
    }
}
