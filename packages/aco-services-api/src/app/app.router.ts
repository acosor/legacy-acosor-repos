import { AppEnv } from "archappenv";
import * as Router from "koa-router";

export const appRouter = (options: any = {}) => {
  const router = new Router(options);

  router.get("/healthcheck", (ctx, next) => {
    const { version: APIversion } = require(AppEnv.Util.packageJSON());

    ctx.body = {
      version: {
        services: {
          api: APIversion,
        },
      },
    };

    next();
  });

  router.post("/es/initialize", (ctx, next) => {
    console.log("Event Sourcing Initialized");
    ctx.body = {
      validation: true,
      data: {
        connection: "connection token",
      },
    };

    next();
  });

  router.post("/es/dispatch", (ctx, next) => {
    console.log(ctx.request.body);
    ctx.body = "dispatcher here!!";
    next();
  });

  return router;
};
