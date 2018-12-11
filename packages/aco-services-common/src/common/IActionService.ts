import IAction from "./IAction";
import IChannel from "./IChannel";

interface IActionService<P = any, M = any> {
  modular: string;
  on: IChannel;
  operate: (action: IAction<P, M>) => any;
}

export default IActionService;
