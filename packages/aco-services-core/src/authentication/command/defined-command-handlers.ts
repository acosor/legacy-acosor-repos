import { IDefinedCommandHandler } from "../../common/command/defined";

const DefinedCommanderHandlers: IDefinedCommandHandler[] = [
  {
    channel: { topic: "account", type: "create" },
    handle: async (payloads: any, aggregate: any) => {
      return {};
    },
  },
];

export default DefinedCommanderHandlers;
