import cors from 'cors';
import path from 'path';
import helmet from 'helmet';
import morgan from 'morgan';
import express from 'express';
import favicon from 'serve-favicon';
import compression from 'compression';
import routes from './routes';
import config from './config';
import { logStream } from './utils/logger';

const app = express();

const APP_PORT = config.port;
const APP_HOST = config.app_host;

app.set('port', APP_PORT);
app.set('host', APP_HOST);

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(morgan('tiny', { stream: logStream }));
app.use(express.static(path.join(__dirname, '/../public')));
app.use(favicon(path.join(__dirname, '/../public', 'favicon.ico')));

app.use(express.urlencoded({ extended: false }));

// API Routes
app.use('/api', routes);

// Routes
app.use('/api', (req, res, next) => {
    res.json({
        "name": "devops-assignment",
        "version": "1.0.0"
    });
});

app.use('/*', (req, res, next) => {
    res.json({
        message: "Available routes => [/api, /api/orders]"
    });
});

export default app;
