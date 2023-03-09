"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = void 0;
const CacheManager_1 = __importDefault(require("./CacheManager"));
const Player_1 = require("./Player");
class Team extends CacheManager_1.default {
    constructor(ApiTeam) {
        super();
        this.name = ApiTeam.name;
        this.id = ApiTeam.id;
        this.country = ApiTeam.country;
        this.players = ApiTeam.squad.map((player) => new Player_1.Player(player));
    }
}
exports.Team = Team;
exports.default = Team;
//# sourceMappingURL=Team.js.map