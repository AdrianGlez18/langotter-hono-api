import { createRoute, z } from "@hono/zod-openapi";

import { createRouter } from "@/lib/initialize-app";
import jsonContent from "@/utils/json-content";
import { OK_STATUS_CODE } from "@/constants/http-status";

const router = createRouter()
    .openapi(createRoute({
        tags: ["index"],
        method: "get",
        path: "/",
        responses: {
            [OK_STATUS_CODE]: jsonContent(
                z.object({
                    message: z.string(),
                }),
                "Hono index route"
            )
        },
    }), (c) => {
        return c.json({ message: "Hello world" }, OK_STATUS_CODE);
    });

export default router;
