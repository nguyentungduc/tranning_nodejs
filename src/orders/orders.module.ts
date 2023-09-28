import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { OrderCreatedListener } from './listeners/order-created.event';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService, OrderCreatedListener]
})
export class OrdersModule {}
