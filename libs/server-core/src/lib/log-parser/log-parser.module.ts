import { Module } from '@nestjs/common';
import { LogParserServiceBase } from './log-parser.service.base';
import { LogParserService } from './log-parser.service';

@Module({
  providers: [
    {
      provide: LogParserServiceBase,
      useClass: LogParserService,
    },
  ],
  exports: [LogParserServiceBase],
})
export class LogParserModule {}
