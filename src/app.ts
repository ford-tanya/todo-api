import "reflect-metadata";
import { createExpressServer } from "routing-controllers";
import { HttpErrorMiddleware, LoggingMiddleware } from "./middleware";
import { UserController } from "./controller";

const app = createExpressServer({
    defaultErrorHandler: false,
    middlewares: [LoggingMiddleware, HttpErrorMiddleware],
    controllers: [UserController],
});

app.listen(3000, ()=> console.log("application running at 3000."));
