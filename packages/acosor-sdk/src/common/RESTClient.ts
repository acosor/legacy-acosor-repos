import { IAppServeConfig } from "acosor-common";
import AppServeUtility from "./AppServeUtility";

const RESTClient = {
  async initialize(appServeConfig?: IAppServeConfig) {
    if (appServeConfig === undefined) {
      appServeConfig = await AppServeUtility.resolveConfig();
    }

    return ((config: IAppServeConfig) => {
      const uri = AppServeUtility.resolveAppServeURI(config);

      return {
        uri,
      };
    })(appServeConfig);
  },
};

Object.freeze(RESTClient);

export default RESTClient;
