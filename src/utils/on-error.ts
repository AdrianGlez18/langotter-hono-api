import type { ErrorHandler } from "hono";
import type { ContentfulStatusCode, StatusCode } from "hono/utils/http-status";

import { INTERNAL_ERROR_STATUS_CODE, OK_STATUS_CODE } from "@/constants/http-status";
import env from "@/utils/env";

const onError: ErrorHandler = (err, c) => {
  const currentStatus = "status" in err
    ? err.status
    : c.newResponse(null).status;
  const statusCode = currentStatus !== OK_STATUS_CODE
    ? (currentStatus as StatusCode)
    : INTERNAL_ERROR_STATUS_CODE;

  return c.json(
    {
      message: err.message,

      stack: env.NODE_ENV === "production"
        ? undefined
        : err.stack,
    },
    statusCode as unknown as ContentfulStatusCode,
  );
};

export default onError;
