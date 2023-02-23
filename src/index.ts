import "./db";
import app from "./app";
import logger from "./utils/logger";

app.listen(app.get('port'), app.get('host'), () => {
    logger.info(`Server started at http://${app.get('host')}:${app.get('port')}/api`);
});

// Catch unhandled rejections
process.on('unhandledRejection', err => {
    logger.error('Unhandled rejection', err);
});

// Catch uncaught exceptions
process.on('uncaughtException', err => {
    logger.error('Uncaught exception', err);
});
