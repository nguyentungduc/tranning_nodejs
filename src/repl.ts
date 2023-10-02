import { repl } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  await repl(AppModule);
// Don't delete log 
//   const replServer = await repl(AppModule);
//   replServer.setupHistory(".nestjs_repl_history", (err) => {
//     if (err) {
//       console.error(err);
//     }
//   });
}
bootstrap();
