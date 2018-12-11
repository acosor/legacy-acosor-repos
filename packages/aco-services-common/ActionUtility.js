"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ActionUtility = {
    equal: (channels, others) => {
        if (channels.topic === others.topic && channels.type === others.type) {
            return true;
        }
        else {
            return false;
        }
    },
};
exports.default = ActionUtility;
//# sourceMappingURL=ActionUtility.js.map