import express from 'express';
import compression from 'compression';
import 'dotenv/config';
// Database
import connectDB from './config/db';
connectDB();
// Error Middleware
import { notFound, errorHandler } from './middlewares/errorMiddlewares';
// Import Routes
import hospitalRoutes from './routes/hospitalRoutes';
import doctorRoutes from './routes/doctorRoutes';

// App
const app = express();

// Middlewares
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/v1/hospitals', hospitalRoutes);
app.use('/api/v1/doctors', doctorRoutes);

// Error Middleware
app.use(notFound);
app.use(errorHandler);

export default app;
