export interface LogEntryDto {
  timestamp: number;
  loglevel: string;
  transactionId: string;
  err?: string;
}
export interface ApiResponseDto extends Array<LogEntryDto> {}
