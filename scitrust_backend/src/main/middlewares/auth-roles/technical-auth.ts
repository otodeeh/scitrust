import { adaptMiddleware } from "main/adapters/express-middleware-adapter";
import { makeAuthMiddleware } from "main/factories/middlewares/auth-middleware-factory";

export const technicalAuthRoles = [ "comex_user", "digital_administrator"]

export const technicalAuth = adaptMiddleware(
  makeAuthMiddleware(technicalAuthRoles)
);
