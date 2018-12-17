import { expect } from "chai";
import Commands from "./commands";

describe("Authentication", () => {
  describe("#Commands", () => {
    describe("#createAccount()", () => {
      it("expect to get a command", () => {
        // arranges
        const expected = {
          taskID: "",
          module: "authentication",
          channel: {
            topic: "account",
            type: "create",
          },
          payloads: {
            uid: "",
            user: "user",
            password: "password",
          },
        };

        // acts
        const command = Commands.createAccount("user", "password");

        // asserts
        expected.taskID = ""; // command.commandID;
        expected.payloads.uid = command.payloads.uid;
        expect(command).to.deep.equal(expected);
      });
    });
  });
});
