import { InjectQueue } from '@nestjs/bull';
import { Controller, Logger, Post } from '@nestjs/common';
import { Queue } from 'bull';

@Controller('audio')
export class AudioController {
  private readonly logger = new Logger(AudioController.name);
  constructor(
    @InjectQueue('audio') private readonly audioQueue: Queue,
  ) {}

  @Post('transcode')
  async transcode() {
    this.logger.log('Doing something...');
    console.log("bbbb");
    await this.audioQueue.add('transcode', {
      file: 'audio.mp3',
    });
  }
}
