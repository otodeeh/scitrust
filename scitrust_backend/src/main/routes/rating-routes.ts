import { Router } from "express";
import { adaptRoute } from "main/adapters/express-route-adapter";
import { makeAddRatingController } from "../factories/controllers/periodicals/add-rating-controller-factory";

export default (router: Router): void => {
  router.post("/periodicals/rating/:periodicalId", adaptRoute(makeAddRatingController()));
};
