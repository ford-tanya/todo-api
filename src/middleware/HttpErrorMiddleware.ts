import { Request, Response } from "express";
import { ExpressErrorMiddlewareInterface, HttpError, Middleware } from "routing-controllers";

@Middleware({ type: "after"})
export class HttpErrorMiddleware implements ExpressErrorMiddlewareInterface {
    error(error: Error, req: Request, res: Response): void {
        if (error instanceof HttpError) {
            res.status(error.httpCode).json(error.message);
        } else {
            res.status(500).json("Error something in server, please contact T.Jiayus");
        }
        console.error(`[${new Date().toISOString()}] ${req.method} ${res.statusCode} ${req.url} Error: ${error.message}`);
    }
}
