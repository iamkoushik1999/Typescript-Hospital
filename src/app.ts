import express from 'express';
import compression from 'compression';
import 'dotenv/config';
// Database
import connectDB from './config/db';
connectDB();
// Error Middleware
import { notFound, errorHandler } from './middlewares/errorMiddlewares';
import { rateLimiter } from './middlewares/rateLimitMiddleware';
// Import Routes
import hospitalRoutes from './routes/hospitalRoutes';
import doctorRoutes from './routes/doctorRoutes';
import patientRoutes from './routes/patientRoutes';
import reportRoutes from './routes/reportRoutes';

// App
const app = express();

// Middlewares
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(rateLimiter);

// Routes
app.use('/api/v1/hospitals', hospitalRoutes);
app.use('/api/v1/doctors', doctorRoutes);
app.use('/api/v1/patients', patientRoutes);
app.use('/api/v1/reports', reportRoutes);

// Error Middleware
app.use(notFound);
app.use(errorHandler);

export default app;
