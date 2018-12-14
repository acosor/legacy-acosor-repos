import { IRouting } from "../irouting";
import initialize from "./initialize";

export default ((router) => {
  initialize(router);

  return router;
}) as IRouting;
