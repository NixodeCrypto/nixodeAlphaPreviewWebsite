import { transports, format, createLogger } from 'winston';

const productionLog = format.combine(
  format.timestamp(),
  format.printf((info) => {
    const { timestamp, level, message, ...args } = info;

    const ts = timestamp.slice(0, 19).replace('T', ' ');
    return `${ts} [${level}]: ${message} ${
      Object.keys(args).length ? JSON.stringify(args, null, 2) : ''
    }`;
  }),
);

// disable color codes in production as they emit color codes in log files
const formattedLog =
  process.env.NODE_ENV === 'production'
    ? productionLog
    : format.combine(format.colorize(), productionLog);

const date = new Date();
const newdate = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;

const options = {
  info: {
    level: 'info',
    dirname: 'logs/combined',
    json: true,
    handleExceptions: true,
    filename: `combined-${newdate}.log`,
  },
  warn: {
    level: 'warn',
    dirname: 'logs/warn',
    json: true,
    handleExceptions: true,
    filename: `warn-${newdate}.log`,
  },
  error: {
    level: 'error',
    dirname: 'logs/error',
    json: true,
    handleExceptions: true,
    filename: `error-${newdate}.log`,
  },
  debug: {
    level: 'debug',
    dirname: 'logs/debug',
    json: true,
    handleExceptions: true,
    filename: `debug-${newdate}.log`,
  },
  console: {
    level: 'debug',
    json: false,
    handleExceptions: true,
    colorize: true,
  },
};

const logger = new (createLogger as any)({
  format: formattedLog,
  transports: [
    new transports.File(options.info),
    new transports.File(options.warn),
    new transports.File(options.error),
    new transports.File(options.debug),
    new transports.Console(options.console),
  ],
  exitOnError: false,
});

export default logger;
