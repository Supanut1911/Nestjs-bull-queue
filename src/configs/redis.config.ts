import { BullModuleOptions, BullRootModuleOptions } from '@nestjs/bull';

export const RedisConfig: BullRootModuleOptions = {
  redis: {
    host: 'localhost',
    port: 6379,
  },
};
