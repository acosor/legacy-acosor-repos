interface IAction<T = any, M = object> {
  modular: string;
  topic: string;
  type: string;
  nature: string;
  payload: T;
  meta?: M;
}
