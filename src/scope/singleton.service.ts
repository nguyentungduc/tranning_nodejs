import { Injectable, Scope } from '@nestjs/common';

@Injectable()
export class SingletonService {
  private data: string[] = [];

  private instanceId: number;

  constructor() {
    this.instanceId = Math.random();
  }

  getInstanceId(): object {
    this.data.push("hello");
    return [this.data, this.instanceId];
  }
}
