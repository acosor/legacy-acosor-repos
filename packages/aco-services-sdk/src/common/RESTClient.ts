import { resolve } from "url";
import config from "../config";

const RESTClient = {
  resolveAPIPath: (path: string = "", options: { port?: number } = {}) =>
    resolve(`http://localhost:${options.port || config().port}`, path),
};

export default RESTClient;
