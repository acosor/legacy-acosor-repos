import { expect } from "chai";
import connect from "./connect";

describe("connect.ts tests", () => {
  describe("#connect()", () => {
    it("expect connect() not to return null or undefined", () => {
      // arranges
      const appID = "appID";
      const appSecret = "appSecret";

      // acts
      const session = connect(appID, appSecret);

      // asserts
      expect(session).not.to.equal(null);
      expect(session).not.to.equal(undefined);
    });
  });
});
