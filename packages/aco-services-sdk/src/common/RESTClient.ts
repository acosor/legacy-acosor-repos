import IRESTClient from "./IRESTClient";
import * as request from "superagent";

const RESTClient: IRESTClient = {
  get: (url, options) => {
    return request
      .get(url);
  },
  post: (url, body, options) => {
    return request.post(url);
  },
};

export default RESTClient;
