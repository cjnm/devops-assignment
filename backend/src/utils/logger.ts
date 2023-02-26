import winston from 'winston';

const logger = winston.createLogger({
  level: 'debug',
  exitOnError: false,
  transports: [
    new winston.transports.Console({
      handleExceptions: true,
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.errors({ stack: true }),
        winston.format.colorize({ all: true })
      ),
    }),
  ],
});

const logStream = {
  write(message: string | Buffer) {
    logger.info(message.toString().trim());
  },
};

logger.on('error', (err) => {
  // tslint:disable-next-line
  console.error(`${new Date().toISOString()} Logger error`, err);
});

export default logger;
export { logStream };
