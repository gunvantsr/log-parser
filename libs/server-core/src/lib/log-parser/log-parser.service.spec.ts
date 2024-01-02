import { Test, TestingModule } from '@nestjs/testing';
import { LogParserService } from './log-parser.service';

describe('FileUploadService', () => {
  let service: LogParserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LogParserService],
    }).compile();

    service = module.get<LogParserService>(LogParserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
