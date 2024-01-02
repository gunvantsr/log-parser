import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServerCoreModule } from '@log-parser/server-core';

@Module({
  imports: [ServerCoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
