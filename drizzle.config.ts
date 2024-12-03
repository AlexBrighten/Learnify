import 'dotenv/config';
import type { Config } from 'drizzle-kit';

export default {
  schema: './db/schema.tsx',
  out: './db/drizzle.tsx',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
} satisfies Config;
