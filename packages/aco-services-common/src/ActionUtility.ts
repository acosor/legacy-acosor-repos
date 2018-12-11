import IChannel from "./common/IChannel";

const ActionUtility = {
  equal: (channels: IChannel, others: IChannel) => {
    if (channels.topic === others.topic && channels.type === others.type) {
      return true;
    } else {
      return false;
    }
  },
};

export default ActionUtility;
