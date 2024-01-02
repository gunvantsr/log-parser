import { Module } from '@nestjs/common';
import { LogParserModule } from './log-parser/log-parser.module';

@Module({
  imports: [LogParserModule],
  exports: [LogParserModule],
})
export class ServerCoreModule {}
