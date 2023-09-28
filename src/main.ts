import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe, VersioningType } from '@nestjs/common';

async function bootstrap() {
  console.log(process.env);
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    abortOnError: false,
    forceCloseConnections: true,
    // logger: console,
  });
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  app.enableShutdownHooks();
  // app.setGlobalPrefix('v1');

  // app.enableVersioning({
  //   type: VersioningType.URI,
  // });

  // app.enableVersioning({
  //   type: VersioningType.HEADER,
  //   header: 'X-API-Version',
  // });

  await app.listen(3000);
}

bootstrap();
