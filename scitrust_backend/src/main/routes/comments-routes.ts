import { Router } from "express";
import { adaptRoute } from "main/adapters/express-route-adapter";
import { makeAddCommentController } from "../factories/controllers/periodicals/add-comment-controller-factory";

export default (router: Router): void => {
  router.post("/periodicals/comments/:periodicalId", adaptRoute(makeAddCommentController()));
};
