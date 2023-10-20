import winston from 'winston'


const options={
    file:{
        level:'info',
        filename:'./error/error.log',
        handleExceptions:true,
        json:true,

        maxSize:5242880, //5MB
        maxFiles:5,
        colorize:false,

    },
    console:{
        level:'debug',
        filename:'./combined/combined.log',
        handleExceptions:true,
        json:true,
        colorize:true,
    }
}

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File(options.file),
    new winston.transports.File(options.console),
  ],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}


export default logger;