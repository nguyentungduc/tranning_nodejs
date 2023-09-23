import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT })
export class TransientService {
  private instanceId: number;
  private data: string[] = [];

  constructor() {
    this.instanceId = Math.random();
  }

  getInstanceId(): object {
    this.data.push("hello");
    return [this.data, this.instanceId];
  }
}
