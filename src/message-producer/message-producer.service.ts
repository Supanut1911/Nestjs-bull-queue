import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class MessageProducerService {
  constructor(
    @InjectQueue('transcrypt')
    private readonly queue: Queue,
  ) {}

  async sendMessage(message: string) {
    await this.queue.add('message-job', { text: message });
  }
}
