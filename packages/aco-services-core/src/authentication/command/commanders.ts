import Commander from "../../common/command/commander";

const commander = Commander("authentication");

export default {
  createAccount: (user: string, password: string) => {
    const channel = { topic: "account", type: "create" };

    return commander.createCommand(channel, { uid: commander.newGUID(), user, password });
  },
};
