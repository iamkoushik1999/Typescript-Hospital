import express from 'express';
import compression from 'compression';
import 'dotenv/config';

// App
const app = express();

// Middlewares
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export default app;
