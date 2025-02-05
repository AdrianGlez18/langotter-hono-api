import type { ErrorHandler } from "hono";
import type { ContentfulStatusCode, StatusCode } from "hono/utils/http-status";

import { OK_STATUS_CODE, INTERNAL_ERROR_STATUS_CODE} from "@/constants/http-status";

const onError: ErrorHandler = (err, c) => {
  const currentStatus = "status" in err
    ? err.status
    : c.newResponse(null).status;
  const statusCode = currentStatus !== OK_STATUS_CODE
    ? (currentStatus as StatusCode)
    : INTERNAL_ERROR_STATUS_CODE;
  // eslint-disable-next-line node/prefer-global/process
  const env = c.env?.NODE_ENV || process.env?.NODE_ENV;
  return c.json(
    {
      message: err.message,

      stack: env === "production"
        ? undefined
        : err.stack,
    },
    statusCode as unknown as ContentfulStatusCode,
  );
};

export default onError;