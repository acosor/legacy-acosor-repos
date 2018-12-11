import { resolve } from "url";
import config from "../config";

const resolveAPIPath = (path: string = "", options: { port?: number; } = {}) =>
  resolve(`http://localhost:${options.port || config().port}`, path);

export default resolveAPIPath;
