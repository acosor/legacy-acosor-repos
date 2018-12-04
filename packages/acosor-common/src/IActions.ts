import IActionCreator from "./common/IActionCreator";
import IInitializePayload from "./payloads/IInitializePayload";

interface IActions {
  core: {
    initialize: IActionCreator<IInitializePayload>;
  };
}

export default IActions;
