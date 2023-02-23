import "./env";

const { PORT, APP_HOST, MONGO_DB_URI } = process.env;

/**
 * Application wide configuration.
 */
const config = {
    port: PORT || 3000,
    app_host: APP_HOST || '0.0.0.0',
    mongodbURI: MONGO_DB_URI || 'mongodb://AdminSammy:Optimusprime1%40@161.35.125.44/e?authSource=admin'
};

export default config;
