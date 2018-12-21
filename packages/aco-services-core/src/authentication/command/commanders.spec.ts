import { expect } from "chai";
import Commands from "./commanders";

describe("Authentication", () => {
  describe("#Commands", () => {
    describe("#createAccount()", () => {
      it("expect to get a command", () => {
        // arranges
        const expected = {
          id: "",
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
        expected.id = command.id;
        expected.payloads.uid = command.payloads.uid;
        expect(command).to.deep.equal(expected);
      });
    });
  });
});
