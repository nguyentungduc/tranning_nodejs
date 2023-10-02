import { Injectable, Scope } from '@nestjs/common';

export class PostService {
  private data: string[] = [];
  private static instanceCount = 0;
  private readonly instanceId: number;

  constructor() {
    this.instanceId = Math.random();
  }

  getPostsById(): any {
    return {
      post_id: 1,
      post_name: 'post name',
    };
  }

  addData(item: string): void {
    console.log('this.instanceId ', this.instanceId);
    this.data.push(item);
  }

  getData(): string[] {
    return this.data;
  }

  getInstanceId(): number {
    return this.instanceId;
  }
}
