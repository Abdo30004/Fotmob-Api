"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkDate = void 0;
class Util {
    static checkDate(date) {
        const dateRegex = /^\d{4}\d{2}\d{2}$/;
        return dateRegex.test(date);
    }
}
const checkDate = Util.checkDate;
exports.checkDate = checkDate;
exports.default = Util;
//# sourceMappingURL=Util.js.map