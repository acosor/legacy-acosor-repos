import { IAppServeConfig } from "acosor-common";

const protocol = "http";
const server = "localhost";
const port = 8081;

const AppServeUtility = {
  async resolveConfig(): Promise<IAppServeConfig> {
    return {
      protocol,
      server,
      port,
    };
  },
  async resolveAppServeURI(config: IAppServeConfig): Promise<string> {
    return `${config.protocol}://${config.server}:${config.port}`;
  },
};

Object.freeze(AppServeUtility);

export default AppServeUtility;
