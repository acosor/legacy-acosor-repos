

const resolveAppServeConfig = async (): Promise<IAppServeConfig> => ({
  protocol: "http",
  server: "localhost",
  port: 8081,
});

const resolveAppServeURI = (config: IAppServeConfig) => `${config.protocol}://${config.server}:${config.port}`;

const createRESTClient = (config: IAppServeConfig) => {
  const uri = resolveAppServeURI(config);
};

export const initialize = async (appID: string, appSecret: string) => {
  const config = await resolveAppServeConfig();
  const uri = resolveAppServeURI(config);

};
