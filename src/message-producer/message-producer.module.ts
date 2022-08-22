import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { RedisConfig, RedisConfigOption } from 'src/configs/redis.config';
import { MessageProducerController } from './message-producer.controller';
import { MessageProducerService } from './message-producer.service';
import { MessageConsumer } from './message.consumer';

@Module({
  imports: [
    BullModule.forRoot(RedisConfig),
    BullModule.registerQueue(RedisConfigOption),
  ],
  controllers: [MessageProducerController],
  providers: [MessageProducerService, MessageConsumer],
})
export class MessageProducerModule {}
