import { NextFunction, Request, Response } from "express";
import { Middleware } from "presentation/protocols";

export const adaptMiddleware =
  (middleware: Middleware) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const { headers } = req;
    const { statusCode, body } = await middleware.handle({ headers });
    if (statusCode === 200) {
      Object.assign(req, body);
      return next();
    }
    return res.status(statusCode).json({
      error: body.message,
    });
  };
