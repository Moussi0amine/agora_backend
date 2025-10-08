/**
 * Prisma Database Connection
 * --------------------------
 * This file exports a single PrismaClient instance.
 * PrismaClient is used to interact with the PostgreSQL database.
 */

import { PrismaClient } from "@prisma/client";

// create and export a single shared instance of PrismaClient
const prisma = new PrismaClient();

// Optional: connect to DB on startup (helpful for debugging)
prisma.$connect()
    .then(() => console.log('✅ Connected to PostgreSQL via Prisma'))
    .catch((err) => console.error('❌ Prisma connection error:', err));

export default prisma;