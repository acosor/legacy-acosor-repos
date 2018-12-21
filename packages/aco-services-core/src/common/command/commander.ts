import * as uuidv1 from "uuid/v1";
import * as uuidv5 from "uuid/v5";
import { ICommand } from "./defined";

export default (module: string) => (() => ({
  newGUID: () => uuidv5(module, uuidv1()),
  createCommand: <P>(type: string, payloads: P, id?: string): ICommand<P> => ({
    id: id || uuidv5(module, uuidv1()),
    module,
    type,
    payloads,
  }),
}))();
