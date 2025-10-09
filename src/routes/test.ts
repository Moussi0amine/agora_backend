/**
 * Test Route
 * ----------
 * A simple route to verify that both the API
 * and the PostgreSQL connection work properly.
 */

import { Router } from "express";
import prisma from "../db/prisma";

const router = Router();

router.get('/', async (_req,res) => {
    // Run a raw SQL query to check DB connection
    const result = await prisma.$queryRaw`SELECT NOW()`;
    res.json({ serverTime: result });
});

export default router;