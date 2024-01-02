import { Injectable, Logger } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import * as readLine from 'readline';

import { LogParserServiceBase } from './log-parser.service.base';
import { fileUtils } from '../utilities';
import { LogEntryDto, ApiResponseDto } from '../dtos';

@Injectable()
export class LogParserService implements LogParserServiceBase {
  readonly logger: Logger = new Logger(LogParserService.name);

  constructor() {}

  public async ProcessLogFile(fileName: string): Promise<ApiResponseDto> {
    const logPrefix = `${this.ProcessLogFile.name}`;

    try {
      this.logger.debug(`${logPrefix} - Processing file ${fileName}`);
      const results = await this.ParseLogFile(fileName);
      return results;
    } catch (error) {
      this.logger.error(`${logPrefix} Error: ${error}`);
      throw error;
    }
  }

  private async ParseLogFile(fileName: string): Promise<LogEntryDto[]> {
    const logPrefix = `${this.ParseLogFile.name}`;
    try {
      this.logger.debug(fileName);
      // fs.mkdirSync(`uploads`, { recursive: true });
      const filePath = path.join(`uploads/${fileName}`);
      const fileStream = fs.createReadStream(filePath, { encoding: 'utf8' });
      const transformedLogs: LogEntryDto[] = [];

      const logLine = readLine.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
      });

      for await (const line of logLine) {
        if (line.trim() !== '') {
          const transformedLog = fileUtils.transformLogLine(line);
          transformedLogs.push(transformedLog);
        }
      }
      return transformedLogs;
    } catch (error) {
      this.logger.error(`${logPrefix} Error: ${error}`);
      throw error;
    }
  }
}
