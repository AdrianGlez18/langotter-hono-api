import type { NotFoundHandler } from "hono";
import { NOT_FOUND_STATUS_CODE } from "@/constants/http-status";

const notFound: NotFoundHandler = (c) => {
    return c.json({
        message: `Not Found - ${c.req.path}`
    }, NOT_FOUND_STATUS_CODE);
};

export default notFound;