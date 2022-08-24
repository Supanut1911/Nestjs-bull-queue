import { Controller, Delete, Get, Param, Query } from '@nestjs/common';
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

  @Delete('delmessage')
  async delkey(@Param('name') name: string) {
    return await this.messageProducerService.delMessageByname(name);
  }
}
