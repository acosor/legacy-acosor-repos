export interface IChannel {
  topic: string;
  type: string;
}

export interface ICommand<P> {
  id: string;
  module: string;
  type: string;
  payloads: P;
}

export interface IAnyCommand extends ICommand<any> { }

export interface IDefinedCommandHandler {
  type: string;
  handle: <P = any, A = any>(payloads: P, aggregate: A) => Promise<any>;
}

export interface ICommandContext {
  registerHandler: (handlers: IDefinedCommandHandler[]) => void;
  dispatch: (command: IAnyCommand) => Promise<any>;
}
