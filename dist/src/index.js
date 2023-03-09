"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlayer = exports.getTeam = exports.Match = exports.Player = exports.Team = void 0;
const Team_1 = __importDefault(require("./structures/Team"));
exports.Team = Team_1.default;
const Player_1 = __importDefault(require("./structures/Player"));
exports.Player = Player_1.default;
const Match_1 = __importDefault(require("./structures/Match"));
exports.Match = Match_1.default;
const getTeam_1 = require("./functions/getTeam");
Object.defineProperty(exports, "getTeam", { enumerable: true, get: function () { return getTeam_1.getTeam; } });
const getPlayer_1 = require("./functions/getPlayer");
Object.defineProperty(exports, "getPlayer", { enumerable: true, get: function () { return getPlayer_1.getPlayer; } });
//# sourceMappingURL=index.js.map