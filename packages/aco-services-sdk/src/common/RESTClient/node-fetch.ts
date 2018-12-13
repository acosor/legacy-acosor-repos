import fetch, { RequestInit } from "node-fetch";
import resolveAPIPath from "./common/resolveAPIPath";
import { IRESTClient } from "./IRESTClient";

const client: IRESTClient = {
  resolveAPIPath,
  get: (url, options) => {
    return fetch(url);
  },
  post: (url, json, options) => {
    const init: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(json),
    };
    return fetch(url, init);
  },
};

export default client;
