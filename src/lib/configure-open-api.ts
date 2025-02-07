import type { AppOpenApi } from "@/constants/interfaces";

import packageJSON from "@/../package.json";
import { apiReference } from "@scalar/hono-api-reference";

export default function configureOpenApi(app: AppOpenApi) {
    app.doc("/doc", {
        openapi: "3.0.0",
        info: {
            version: packageJSON.version,
            title: "Hono API template",
        },
        servers: [{ url: "http://localhost:3000" }],
    });

    app.get("/reference",
        apiReference({
            theme: "deepSpace",
            defaultHttpClient: {
                targetKey: "javascript",
                clientKey: "fetch",
            },
            spec: {
                url: "/doc",
            },
        }),
    )
}
