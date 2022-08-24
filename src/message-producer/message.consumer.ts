import { InjectQueue, Process, Processor } from '@nestjs/bull';
import { Job, Queue } from 'bull';
import Redis from 'ioredis';
import process from 'process';
import { MessageProducerService } from './message-producer.service';

@Processor('transcrypt')
export class MessageConsumer {
  constructor(
    @InjectQueue('transcrypt')
    private readonly queue: Queue,
  ) {}

  redis = new Redis();

  @Process('message-job')
  readOperationJob(job: Job<unknown>) {
    console.log(job.data);
    // await this.queue.
  }
}

@Processor('transcrypt-queue')
export class TranscryptConsumer {
  @Process('transcrypt-tx-message')
  readTranscryptOperationJob(job: Job<unknown>) {
    console.log(`transcrypt message =>`, job.data);
  }
}
