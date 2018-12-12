import * as Router from "koa-router";

export default (options: any = {}) => {
  const router = new Router(options);

  router.post("/core/initialize", (ctx, next) => {
    console.log(ctx.request.body);
    ctx.body = {
      validation: true,
      data: {
        controller: "core",
        connection: "connection token",
      },
    };

    next();
  });

  return router;
};
