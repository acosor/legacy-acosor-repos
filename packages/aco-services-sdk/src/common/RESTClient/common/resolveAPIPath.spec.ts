import { expect } from "chai";
import config from "../../../config";
import resolveAPIPath from "./resolveAPIPath";

describe("resolveAPIPath.ts tests", () => {
  describe("#resolveAPIPath()", () => {
    it("expect to resolve the default API path", () => {
      // arranges
      const expected = `http://localhost:${config().port}/`;

      // acts
      const apiPath = resolveAPIPath();

      // asserts
      expect(apiPath).to.equal(expected);
    });

    it("expect to resolve the API path with specified path", () => {
      // arranges
      const path = "test/sample";
      const expected = `http://localhost:${config().port}/test/sample`;

      // acts
      const apiPath = resolveAPIPath(path);

      // asserts
      expect(apiPath).to.equal(expected);
    });

    it("expect to resolve the API path with specified path and port", () => {
      // arranges
      const path = "/test/sample";
      const expected = `http://localhost:80/test/sample`;

      // acts
      const apiPath = resolveAPIPath(path, { port: 80 });

      // asserts
      expect(apiPath).to.equal(expected);
    });
  });
});
