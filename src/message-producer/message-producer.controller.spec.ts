import { Test, TestingModule } from '@nestjs/testing';
import { MessageProducerController } from './message-producer.controller';

describe('MessageProducerController', () => {
  let controller: MessageProducerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MessageProducerController],
    }).compile();

    controller = module.get<MessageProducerController>(MessageProducerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
