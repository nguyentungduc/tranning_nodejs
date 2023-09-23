import { Controller, Get, Inject } from '@nestjs/common';
import { TransientService } from './transient.service';
import { RequestService } from './request.service';
import { SingletonService } from './singleton.service';

@Controller('scope')
export class ScopeController {
  constructor(
    @Inject(TransientService)
    private readonly transientService: TransientService,
    @Inject(RequestService) 
    private readonly requestService: RequestService,
    @Inject(SingletonService)
    private readonly singletonService: SingletonService,
  ) {}

  @Get('transient')
  getTransientInstanceId(): any {
    return [this.transientService.getInstanceId(), this.requestService.getInstanceId()];
  }

  @Get('request')
  getRequestInstanceId(): any {
    return [this.requestService.getInstanceId(), this.requestService.getInstanceId()];
  }

  @Get('singleton')
  getSingletonInstanceId(): any {
    return [this.singletonService.getInstanceId(), this.requestService.getInstanceId()];
  }
}
