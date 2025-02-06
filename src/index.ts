import { serve } from "@hono/node-server";

import env from "@/utils/env";

import app from "./app";

const port = env.PORT;

serve({
  fetch: app.fetch,
  port,
});
