import { Module } from '@nestjs/common';
import { AudioController } from './audio.controller';
import { AudioService } from './audio.service';
import { BullModule } from '@nestjs/bull';
import { AudioProcessor } from './audio.processor';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'audio',
    }),
  ],
  controllers: [AudioController],
  providers: [AudioService, AudioProcessor],
})
export class AudioModule {}
