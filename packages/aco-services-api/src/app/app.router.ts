import * as Router from "koa-router";

export default (options: any = {}) => {
  const router = new Router(options);

  router.post("/_/initialize", (ctx, next) => {
    console.log(ctx.request.body);
    ctx.body = {
      validation: true,
      data: {
        connection: "connection token",
      },
    };

    next();
  });

  return router;
};
