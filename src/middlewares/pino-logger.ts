import { pinoLogger } from "hono-pino";
import pino from "pino";
import pretty from 'pino-pretty'

export function logger() {
    return pinoLogger({
        pino: pino(process.env.NODE_ENV !== 'production' ? pretty() : undefined),
        http: {
            reqId: () => crypto.randomUUID(),
        }
    });
}