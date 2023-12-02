import { Router } from "express";
import { adaptRoute } from "main/adapters/express-route-adapter";
import {
  makeGetAccountsController, makeLoginController, makeRecoverAccountPasswordController
} from "main/factories/controllers";
import { thirdLevelAuth } from "../middlewares";

export default (router: Router): void => {
  router.get("/accounts", thirdLevelAuth, adaptRoute(makeGetAccountsController()));
  router.post("/login", adaptRoute(makeLoginController()));
  router.post(
    "/recover-account-password",
    adaptRoute(makeRecoverAccountPasswordController())
  );
};
