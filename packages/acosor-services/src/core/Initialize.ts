import { IActionService, ModularNames } from "acosor-common";
import IInitializePayload from "acosor-common/typings/payloads/IInitializePayload";

export const Initialize: IActionService<IInitializePayload> = {
  modular: ModularNames.Core,
  on: { topic: "INITIALIZE", type: "" },
  operate: (action) => {
    return {};
  },
};
