import * as CORS from "@koa/cors";
import { AppEnv } from "archappenv";
import * as KOA from "koa";
import * as BodyParser from "koa-bodyparser";
import { appRouter } from "./app.router";

export const App = {
  init: () => {
    const app = new KOA();
    const router = appRouter();
    const appenv: any = AppEnv.load();
    const { port } = appenv;

    app
      .use(CORS())
      .use(BodyParser())
      .use(router.routes())
      .use(router.allowedMethods());

    app.listen(port);

    console.log(`app running at port: ${port}`);
  },
};
