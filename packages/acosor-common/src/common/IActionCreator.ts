import IAction from "./IAction";
import IChannel from "./IChannel";

type IActionCreator<P = any, M = any> = (modular: string, channel: IChannel, payload: P, meta: M) => IAction<P, M>;

export default IActionCreator;
