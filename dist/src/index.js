"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSearchResult = exports.getPlayer = exports.getTeam = void 0;
const getTeam_1 = require("./functions/getTeam");
Object.defineProperty(exports, "getTeam", { enumerable: true, get: function () { return getTeam_1.getTeam; } });
const getPlayer_1 = require("./functions/getPlayer");
Object.defineProperty(exports, "getPlayer", { enumerable: true, get: function () { return getPlayer_1.getPlayer; } });
const getSearchResult_1 = require("./functions/getSearchResult");
Object.defineProperty(exports, "getSearchResult", { enumerable: true, get: function () { return getSearchResult_1.getSearchResult; } });
exports.default = { getTeam: getTeam_1.getTeam, getPlayer: getPlayer_1.getPlayer, getSearchResult: getSearchResult_1.getSearchResult };
//# sourceMappingURL=index.js.map