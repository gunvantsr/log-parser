import { ApiResponseDto } from '../dtos';

export abstract class LogParserServiceBase {
  //   abstract ParseLogFile(file: unknown): Promise<unknown>;
  //   abstract WriteJsonFile(file: unknown): Promise<unknown>;
  abstract ProcessLogFile(fileName: string): Promise<ApiResponseDto>;
}
