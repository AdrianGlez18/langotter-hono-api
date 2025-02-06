import type { ZodError } from "zod";

import { config } from "dotenv";
import { expand } from "dotenv-expand";
import { z } from "zod";

expand(config());
const EnvSchema = z.object({
  NODE_ENV: z.string().default("development"),
  PORT: z.coerce.number().default(3000),
  LOG_LEVEL: z.enum(["fatal", "error", "warn", "info", "debug", "trace"]),
  DATABASE_URL: z.string().default("sqlite://:memory:"),
});

export type envType = z.infer<typeof EnvSchema>;
// eslint-disable-next-line import/no-mutable-exports
let env: envType;

try {
  env = EnvSchema.parse(process.env);
}
catch (e) {
  const error = e as ZodError;
  console.error(error.flatten().fieldErrors);
  process.exit(1);
}

export default env;
