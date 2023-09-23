import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.REQUEST })
export class RequestService {
  private instanceId: number;
  private data: string[] = [];

  constructor() {
    this.instanceId = Math.random();
  }

  getInstanceId(): object {
    // this.data.push("hello");
    return [this.instanceId];
  }
}
