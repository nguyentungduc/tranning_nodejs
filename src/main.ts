import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  console.log(process.env);
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    abortOnError: false,
    forceCloseConnections: true,
  });

  await app.listen(3000);
}

bootstrap();
