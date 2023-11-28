import { adaptMiddleware } from "main/adapters/express-middleware-adapter";
import { makeAuthMiddleware } from "main/factories/middlewares/auth-middleware-factory";

export const financialAuthRoles = [ "financial_user", "digital_administrator"]

export const financialAuth = adaptMiddleware(
  makeAuthMiddleware(financialAuthRoles)
);
