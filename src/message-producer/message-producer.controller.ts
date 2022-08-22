import { Controller, Get, Query } from '@nestjs/common';
import { MessageProducerService } from './message-producer.service';

@Controller('message-producer')
export class MessageProducerController {
  constructor(
    private readonly messageProducerService: MessageProducerService,
  ) {}

  @Get('invoke_message')
  async getInvokeMsg(@Query('msg') msg: string) {
    return await this.messageProducerService.sendMessage(msg);
  }
}
