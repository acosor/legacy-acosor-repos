import { resolve } from "url";
import config from "../../../config";

export type IResolveAPIPath = (path?: string, options?: { port?: number; }) => string;

const resolveAPIPath: IResolveAPIPath = (path: string = "", options: { port?: number; } = {}) =>
  resolve(`http://localhost:${options.port || config().port}`, path);

export default resolveAPIPath;
