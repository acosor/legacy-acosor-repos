import fetch from "node-fetch";
import resolveAPIPath from "./common/resolveAPIPath";
import config from "./config";

const checkup = async () => {
  const url = resolveAPIPath(config().checkupURL);
  console.log(url);
  return fetch(url).then((res) => res.json());
};

export default checkup;
