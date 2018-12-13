import { RESTClient } from "./common/RESTClient";

export default async (user: string, password: string) => {
  const url = RESTClient.resolveAPIPath("_/initialize");
  const json = { user, password };

  return RESTClient.post(url, json);
};
