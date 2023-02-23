import { connect } from "mongoose";
import logger from './utils/logger'

import config from "./config";

const mongoDB = config.mongodbURI;

// Connect mongo
connect(mongoDB)
    .then(() => {
        logger.info("DB Connected!");
    })
    .catch((err) => {
        logger.error(`DB Connection Error: ${err.message}`);
    });
