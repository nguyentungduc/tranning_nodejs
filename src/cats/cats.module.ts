import { Global, Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

const loggerAliasProvider = {
    provide: 'AliasedCatsService',
    useExisting: "CatsService",
  };

@Global()
@Module({
  controllers: [CatsController],
  providers: [
    {
      provide: "CatsService",
      useClass: CatsService,
    },
    loggerAliasProvider
  ],
  exports: ["CatsService"],
})
export class CatsModule {}
