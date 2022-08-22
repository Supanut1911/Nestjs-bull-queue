import { BullModuleOptions, BullRootModuleOptions } from '@nestjs/bull';

export const RedisConfig: BullRootModuleOptions = {
  redis: {
    host: 'localhost',
    port: 6379,
  },
};

// export const RedisConfigOption: BullModuleOptions = [
//   {
//     name: 'message-queue',
//   },
//   {
//     name: 'message-queue',
//   },

// ]
