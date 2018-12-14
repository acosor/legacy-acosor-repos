import { Authentication } from "aco-services-core";
import { IRouting } from "../irouting";

export default ((router) => {
  router.post("/core/initialize", async (ctx, next) => {
    const { user, password } = ctx.request.body;

    ctx.body = await Authentication.authenticate(user, password);

    next();
  });

  return router;
}) as IRouting;
