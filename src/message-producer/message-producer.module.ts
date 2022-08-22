import { Module } from '@nestjs/common';
import { MessageProducerController } from './message-producer.controller';
import { MessageProducerService } from './message-producer.service';

@Module({
  controllers: [MessageProducerController],
  providers: [MessageProducerService]
})
export class MessageProducerModule {}
