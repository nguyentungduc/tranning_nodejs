import { Module } from '@nestjs/common';
import { EventsGateway } from './gateway/events';

@Module({
  providers: [EventsGateway],
})
export class EventsModule {}
