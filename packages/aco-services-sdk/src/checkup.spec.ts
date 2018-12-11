import { expect } from "chai";
import * as nock from "nock";
import checkup from "./checkup";
import RESTClient from "./common/RESTClient";
import config from "./config";

const api = RESTClient.resolveAPIPath();
const checkupURL = config().checkupURL;

describe("checkup.ts tests", () => {
  describe("#checkup()", () => {
    const checkupMock = {
      checkup: "test",
    };

    beforeEach(() => {
      nock(api)
        .get(checkupURL)
        .reply(200, checkupMock);
    });

    it("expect checkup() to call for checkup server", async () => {
      // arranges

      // acts
      const result = await checkup();

      // asserts
      expect(result).to.deep.equal(checkupMock);
    });
  });
});
