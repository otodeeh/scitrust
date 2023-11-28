import { adaptMiddleware } from "main/adapters/express-middleware-adapter";
import { makeAuthMiddleware } from "main/factories/middlewares/auth-middleware-factory";

export const thirdLevelAuthRoles = ["digital_administrator"]

export const thirdLevelAuth = adaptMiddleware(
  makeAuthMiddleware(thirdLevelAuthRoles)
);
