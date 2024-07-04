import express from 'express';
import compression from 'compression';
import 'dotenv/config';
// Database
import connectDB from './config/db';
connectDB();
// Error Middleware
import { notFound, errorHandler } from './middlewares/errorMiddlewares';

// App
const app = express();

// Middlewares
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Error Middleware
app.use(notFound);
app.use(errorHandler);

export default app;
