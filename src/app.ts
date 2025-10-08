/**
 * Express App Configuration
 * -------------------------
 * This file sets up the Express application 
 * with middleware and routes.
 */

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import testRoutes from './routes/test';

// Create Express instance
const app = express();

// Middleware route
app.use(cors());                // Enable Cross-origin requests
app.use(helmet());              // Add security for headers
app.use(express.json());        // Parse incoming JSON payloads
app.use(morgan('dev'));         // Log HTTP requests to console

// Health check route
app.get('/', (_req,res) => {
    res.json({ message: 'Factory API running 🚀' });
});

// Register routes
app.use('api/test', testRoutes);

export default app;