import {
  Controller,
  Logger,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import * as crypto from 'crypto';
import { LogParserServiceBase } from '@log-parser/server-core';

@Controller()
export class AppController {
  private readonly logger: Logger = new Logger(AppController.name);
  constructor(private readonly logParserService: LogParserServiceBase) {}

  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const randomString = crypto.randomUUID();
          cb(null, `${randomString}${extname(file.originalname)}`);
        },
      }),
      limits: {
        fileSize: 1024 * 1024 * 5,
      },
    })
  )
  @Post('file/upload')
  public async UploadLogFile(
    @UploadedFile() file: Express.Multer.File,
    @Res() response
  ): Promise<void> {
    const logPrefix = `${this.UploadLogFile.name}`;
    try {
      const fileName = file.filename;
      this.logger.debug(`${logPrefix} - Uploading file...${fileName}`);
      const jsonData = await this.logParserService.ProcessLogFile(fileName);
      response.setHeader(
        'Content-Disposition',
        `attachment; filename=transformed_logs.json`
      );
      response.setHeader('Content-Transfer-Encoding', 'binary');
      response.send(jsonData);
    } catch (error) {
      this.logger.error(`${logPrefix} Error: ${error}`);
      throw Error;
    }
  }
}
