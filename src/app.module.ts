import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageProducerModule } from './message-producer/message-producer.module';

@Module({
  imports: [MessageProducerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
