import { IResolveAPIPath } from "./common/resolveAPIPath";

export interface IRESTClientOptions {
  headers?: object;
}

export interface IRESTClient {
  resolveAPIPath: IResolveAPIPath;
  get: (url: string, options?: IRESTClientOptions) => Promise<any>;
  post: (url: string, json?: object, options?: IRESTClientOptions) => Promise<any>;
}
