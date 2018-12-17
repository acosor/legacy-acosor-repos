import CommandFactory from "../common/command.factory";

const Command = CommandFactory("authentication");

export default {
  createAccount: (user: string, password: string) => {
    const channel = { topic: "account", type: "create" };

    return Command.createCommand(channel, { uid: Command.newGUID(), user, password });
  },
};
