/**
 * Server Entry point 
 * ------------------
 * Starts the Express server and connects to PostgreSQL using prisma
 */

import 'dotenv/config';   // Load environment variables
import app from './app'; // Express app
import prisma from './db/prisma'; // Database client

const PORT = process.env.PORT || 4000;

async function startServer() {
    try {
        // Test DB connection before starting the server
        await prisma.$connect();

        app.listen(PORT, () => {
            console.log(`✅ Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('❌ Failed to start server:', error);
        process.exit(1);
    }
}

startServer();
