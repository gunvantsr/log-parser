// import { LogEntryDto } from '../dtos';

import { LogEntryDto } from '../dtos';

export const transformLogLine = <TLine extends string>(
  line: TLine
): LogEntryDto => {
  const [timestampiso, loglevel, data] = line.split(' - ');

  const timestamp = new Date(timestampiso).getTime();

  const logData = JSON.parse(data);

  const result: LogEntryDto = {
    timestamp,
    loglevel,
    transactionId: logData.transactionId,
  };

  if (loglevel === 'error' || (loglevel === 'warn' && logData.err)) {
    result.err = logData.err;
  }

  return result;
};
