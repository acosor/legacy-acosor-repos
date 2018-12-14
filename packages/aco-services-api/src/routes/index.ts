import Core from "./core";
import { IRouting } from "./irouting";

export default ((router) => {
  Core(router);

  return router;
}) as IRouting;
