import { createRoute, z } from "@hono/zod-openapi";

import { createRouter } from "@/lib/initialize-app";

const router = createRouter()
  .openapi(createRoute({
    method: "get",
    path: "/",
    responses: {
      200: {
        content: {
          "application/json": {
            schema: z.object({
              message: z.string(),
            }),
          },
        },
        description: "Hono index route",
      },
    },
  }), (c) => {
    return c.json({ message: "Hello world" });
  });

export default router;
