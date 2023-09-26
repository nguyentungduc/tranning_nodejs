import { Injectable, OnModuleInit } from "@nestjs/common";
import { ModuleRef } from "@nestjs/core";
import { AuthService } from "./auth.service";

@Injectable()
export class RetrievingService implements OnModuleInit {
  private service: AuthService;
  constructor(private moduleRef: ModuleRef) {}

  onModuleInit() {
    this.service = this.moduleRef.get(AuthService);
  }
}
