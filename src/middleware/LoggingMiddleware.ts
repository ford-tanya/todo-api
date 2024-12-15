import { NextFunction, Request, Response } from "express";
import { Middleware, ExpressMiddlewareInterface } from "routing-controllers";

@Middleware({ type: "after" })
export class LoggingMiddleware implements ExpressMiddlewareInterface {
    use(req: Request, res: Response, next: NextFunction): void {
        console.log(`[${new Date().toISOString()}] ${req.method} ${res.statusCode} ${req.url}`);
        next();
    }
}
