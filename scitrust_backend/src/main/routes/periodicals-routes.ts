import { Router } from "express";
import { adaptRoute } from "main/adapters/express-route-adapter";
import { makeGetPeriodicalsController } from "../factories/controllers/periodicals/get-accounts-controller-factory";

export default (router: Router): void => {
  router.get("/periodicals", adaptRoute(makeGetPeriodicalsController()));
};
