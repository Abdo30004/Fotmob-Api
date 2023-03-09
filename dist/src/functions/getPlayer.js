"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlayer = void 0;
const axios_1 = __importDefault(require("axios"));
const getPlayer = (playerId, full = false) => __awaiter(void 0, void 0, void 0, function* () {
    let { data } = yield axios_1.default.get(`https://www.fotmob.com/api/playerData?id=${playerId}`);
    if (full) {
        return data;
    }
    return {
        id: data.id.t,
        name: data.name,
    };
});
exports.getPlayer = getPlayer;
exports.default = getPlayer;
//# sourceMappingURL=getPlayer.js.map