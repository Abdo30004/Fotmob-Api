"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const CacheManager_1 = __importDefault(require("./CacheManager"));
class Player extends CacheManager_1.default {
    constructor(ApiPlayer) {
        super();
        this.name = ApiPlayer.name;
        this.id = ApiPlayer.id;
        this.country = ApiPlayer.country;
    }
}
exports.Player = Player;
exports.default = Player;
//# sourceMappingURL=Player.js.map