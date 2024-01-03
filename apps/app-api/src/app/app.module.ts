import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { ServerCoreModule } from '@log-parser/server-core';

@Module({
  imports: [ServerCoreModule],
  controllers: [AppController],
})
export class AppModule {}
