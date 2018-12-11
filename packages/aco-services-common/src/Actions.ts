import IActions from "./IActions";

const Actions: IActions = {
  core: {
    initialize: (modular, channel, payload, meta) => ({
      modular,
      channel,
      payload,
      meta,
    }),
  },
};

export default Actions;
