import IChannel from "./IChannel";

interface IAction<P = any, M = any> {
  modular: string;
  channel: IChannel;
  payload: P;
  meta: M;
}

export default IAction;
