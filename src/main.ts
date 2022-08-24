import { createBullBoard } from '@bull-board/api';
import { BullAdapter } from '@bull-board/api/bullAdapter';
import { ExpressAdapter } from '@bull-board/express';
import { NestFactory } from '@nestjs/core';
import * as Queue from 'bull';
import expressBasicAuth from 'express-basic-auth';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const serverAdapter = new ExpressAdapter();
  serverAdapter.setBasePath('/bull-board');

  // const aQueue = app.get<Queue>(`BullQueue_<transcrypt>`);
  createBullBoard({
    // queues: [new BullAdapter(new Queue(TEST_QUEUE))],
    // serverAdapter: bullServerAdapter,
    // queues: [new BullAdapter(aQueue)],
    // queues: [new BullAdapter(new Queue('test'))],
    queues: [
      new BullAdapter(new Queue('transcrypt')),
      new BullAdapter(new Queue('transcrypt-queue')),
    ],
    serverAdapter,
  });

  // app.use(
  //   '/bull-board',
  //   expressBasicAuth({
  //     users: {
  //       user: 'password',
  //     },
  //     challenge: true,
  //   }),
  //   serverAdapter.getRouter(),
  // );
  app.use('/bull-board', serverAdapter.getRouter());

  await app.listen(4001);
}
bootstrap();
