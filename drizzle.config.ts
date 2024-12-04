import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "db/schema.ts",
  dbCredentials: {
    url: "postgresql://neondb_owner:KDMJcru0lg4S@ep-hidden-snowflake-a57w3s9j.us-east-2.aws.neon.tech/learnify?sslmode=require",
  },
});
