"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkDate = void 0;
const checkDate = (date) => {
    const dateRegex = /^\d{4}\d{2}\d{2}$/;
    return dateRegex.test(date);
};
exports.checkDate = checkDate;
class Util {
    static checkDate(date) {
        return checkDate(date);
    }
}
exports.default = Util;
//# sourceMappingURL=Util.js.map