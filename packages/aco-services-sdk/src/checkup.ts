import fetch from "node-fetch";
import RESTClient from "./common/RESTClient";
import config from "./config";

const checkup = async () => {
  const url = RESTClient.resolveAPIPath(config().checkupURL);
  console.log(url);
  return fetch(url).then((res) => res.json());
};

export default checkup;
