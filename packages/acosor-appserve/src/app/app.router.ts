import * as Router from "koa-router";

export const appRouter = (options: any = {}) => {
  const router = new Router(options);

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
