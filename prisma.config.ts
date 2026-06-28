//@/prisma.config.ts


import { defineConfig } from 'prisma/config';
import 'dotenv/config'; // Load environment variables

export default defineConfig({
  schema: 'prisma/schema.prisma', // Path to your schema file
  datasource: {
    url: process.env.DATABASE_URL,
  },
  migrations: {
    path: 'prisma/migrations', // Migration directory
  },
});