import { IActionService, ModularNames } from "acosor-common";
import IInitializePayload from "acosor-common/typings/payloads/IInitializePayload";
import { AccessUtility, AppUtility } from "./utils";

export const Initialize: IActionService<IInitializePayload> = {
  modular: ModularNames.Core,
  on: { topic: "INITIALIZE", type: "ISSUE" },
  operate: async (action) => {
    const { appID, appSecret } = action.payload;
    const verifiedAppSecret = await AppUtility.verifyAppSecret(appID, appSecret);

    if (verifiedAppSecret.verified) {
      const { access } = await AccessUtility.generateAccess(appID);

      return {
        verified: true,
        appID,
        access,
      };
    } else {
      return {
        verified: false,
        appID,
      };
    }
  },
};
