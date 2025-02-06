import { OpenAPIHono } from "@hono/zod-openapi";

import type { AppBindings } from "@/constants/interfaces";

import { logger } from "@/middlewares/pino-logger";
import serveEmojiFavicon from "@/middlewares/serve-emoji-favicon";
import notFound from "@/utils/not-found";
import onError from "@/utils/on-error";

export function createRouter() {
  return new OpenAPIHono<AppBindings>({
    strict: false,
  });
}
export default function initializeApp() {
  const app = createRouter();

  app.use(logger());
  app.use(serveEmojiFavicon("🦦"));

  app.notFound(notFound);
  app.onError(onError);

  return app;
}
