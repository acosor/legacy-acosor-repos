import * as uuidv1 from "uuid/v1";
import * as uuidv5 from "uuid/v5";
import IChannel from "./ichannel";

export default (module: string, repository?: any) => (() => ({
  newGUID: () => uuidv5(module, uuidv1()),
  createCommand: <P>(channel: IChannel, payloads: P) => ({
    commandID: uuidv5(module, uuidv1()),
    module,
    channel,
    payloads,
  }),
}))();
