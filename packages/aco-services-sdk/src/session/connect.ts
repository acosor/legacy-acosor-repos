import ISession from "./ISession";

const connect = (appID: string, appSecret: string): Promise<ISession> => (() => {
  return Promise.resolve({});
})();

export default connect;
