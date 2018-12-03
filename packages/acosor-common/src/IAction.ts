import IActionCreator from "./common/IActionCreator";
import IInitializePayload from "./payloads/IInitializePayload";

interface IAction {
  core: {
    initialize: IActionCreator<IInitializePayload>;
  };
}

export default IAction;
