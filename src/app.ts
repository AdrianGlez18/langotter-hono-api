import { OpenAPIHono } from "@hono/zod-openapi";
import notFound from "@/utils/not-found";
import onError from "@/utils/on-error";
import { logger } from "@/middlewares/pino-logger";
import type { AppBindings } from "@/constants/interfaces";

const app = new OpenAPIHono<AppBindings>();

app.use(logger())

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.notFound(notFound);
app.onError(onError)

export default app;
