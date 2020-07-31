import winston = require('winston');
import { log } from '../types';

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: __dirname + `/../../logs/notes-app.log`})
  ]
});

export function logEvent(newLog: log) {
  logger.log({
    level: newLog.type,
    message: `${newLog.message} - ${newLog.date}`
  });
}
