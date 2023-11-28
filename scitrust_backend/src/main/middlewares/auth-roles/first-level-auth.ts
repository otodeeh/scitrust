import { adaptMiddleware } from "main/adapters/express-middleware-adapter";
import { makeAuthMiddleware } from "main/factories/middlewares/auth-middleware-factory";

export const firstLevelAuthRoles = ["distributor_user", "comex_user", "financial_user", "digital_administrator"]

export const firstLevelAuth = adaptMiddleware(
  makeAuthMiddleware(firstLevelAuthRoles)
);
