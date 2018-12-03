import IAction from "./IAction";

const Action: IAction = {
  core: {
    initialize: (modular, channel, payload, meta) => ({
      modular,
      channel,
      payload,
      meta,
    }),
  },
};

export default Action;
