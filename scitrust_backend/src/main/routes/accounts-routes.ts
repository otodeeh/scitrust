import { Router } from "express";
import { adaptRoute } from "main/adapters/express-route-adapter";
import {
  makeGetAccountsController, makeLoginController, makeRecoverAccountPasswordController, makeUpdateAccountByIdController
} from "main/factories/controllers";
import { firstLevelAuth, thirdLevelAuth } from "../middlewares";

export default (router: Router): void => {
  router.get("/accounts", thirdLevelAuth, adaptRoute(makeGetAccountsController()));
  router.put(
    "/accounts/:id", firstLevelAuth,
    adaptRoute(makeUpdateAccountByIdController())
  );
  router.post("/login", adaptRoute(makeLoginController()));
  router.post(
    "/recover-account-password",
    adaptRoute(makeRecoverAccountPasswordController())
  );
};
