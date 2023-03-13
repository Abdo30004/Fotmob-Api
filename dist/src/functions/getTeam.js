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
exports.getTeam = void 0;
const axios_1 = __importDefault(require("axios"));
/**
 *
 * @typeParam ApiTeam
 */
const getTeam = (teamId, full = false) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    let { data } = yield axios_1.default
        .get(`https://www.fotmob.com/api/teams?id=${teamId}`)
        .catch((err) => err.response);
    if (!(data === null || data === void 0 ? void 0 : data.details))
        throw new Error("Team not found");
    if (full) {
        return data;
    }
    return {
        id: (_a = data.details) === null || _a === void 0 ? void 0 : _a.id,
        name: ((_b = data.details) === null || _b === void 0 ? void 0 : _b.name) || null,
        shortName: ((_c = data.details) === null || _c === void 0 ? void 0 : _c.shortName) || null,
        country: ((_d = data.details) === null || _d === void 0 ? void 0 : _d.country) || null,
        logo: ((_f = (_e = data.details) === null || _e === void 0 ? void 0 : _e.sportsTeamJSONLD) === null || _f === void 0 ? void 0 : _f.logo) || null,
        coach: ((_j = (_h = (_g = data.details) === null || _g === void 0 ? void 0 : _g.sportsTeamJSONLD) === null || _h === void 0 ? void 0 : _h.coach) === null || _j === void 0 ? void 0 : _j.name) || null,
        stadium: ((_m = (_l = (_k = data.details) === null || _k === void 0 ? void 0 : _k.sportsTeamJSONLD) === null || _l === void 0 ? void 0 : _l.location) === null || _m === void 0 ? void 0 : _m.name) || null,
        squad: ((_o = data === null || data === void 0 ? void 0 : data.squad) === null || _o === void 0 ? void 0 : _o.map((type, i) => {
            let role = type[0];
            let players = type[1].map((player) => {
                return {
                    id: player.id,
                    name: player.name,
                    country: player.cname,
                    role: role,
                };
            });
            return players;
        }).flat()) || null,
    };
});
exports.getTeam = getTeam;
exports.default = getTeam;
//# sourceMappingURL=getTeam.js.map