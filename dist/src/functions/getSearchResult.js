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
exports.getSearchResult = void 0;
const axios_1 = __importDefault(require("axios"));
const getSearchResult = (keyword, options) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0;
    let url = `https://www.fotmob.com/api/searchData?term=${keyword}`;
    if (options === null || options === void 0 ? void 0 : options.filter) {
        url += `&fetchMore=${options.filter.toString()}`;
    }
    if (options === null || options === void 0 ? void 0 : options.language) {
        url += `&userLanguage=${options.language}`;
    }
    let { data } = (yield axios_1.default.get(url));
    if (!data)
        throw new Error("Data not found");
    return {
        matches: {
            count: (_b = (_a = data === null || data === void 0 ? void 0 : data.matches) === null || _a === void 0 ? void 0 : _a.datasetLength) !== null && _b !== void 0 ? _b : 0,
            data: (_e = (_d = (_c = data === null || data === void 0 ? void 0 : data.matches) === null || _c === void 0 ? void 0 : _c.dataset) === null || _d === void 0 ? void 0 : _d.map((match) => match)) !== null && _e !== void 0 ? _e : [],
        },
        teams: {
            count: (_g = (_f = data === null || data === void 0 ? void 0 : data.teams) === null || _f === void 0 ? void 0 : _f.datasetLength) !== null && _g !== void 0 ? _g : 0,
            data: (_k = (_j = (_h = data === null || data === void 0 ? void 0 : data.teams) === null || _h === void 0 ? void 0 : _h.dataset) === null || _j === void 0 ? void 0 : _j.map((team) => team)) !== null && _k !== void 0 ? _k : [],
        },
        news: {
            count: (_m = (_l = data === null || data === void 0 ? void 0 : data.news) === null || _l === void 0 ? void 0 : _l.datasetLength) !== null && _m !== void 0 ? _m : 0,
            data: (_q = (_p = (_o = data === null || data === void 0 ? void 0 : data.news) === null || _o === void 0 ? void 0 : _o.dataset) === null || _p === void 0 ? void 0 : _p.map((news) => news)) !== null && _q !== void 0 ? _q : [],
        },
        squad: {
            count: (_s = (_r = data === null || data === void 0 ? void 0 : data.squad) === null || _r === void 0 ? void 0 : _r.datasetLength) !== null && _s !== void 0 ? _s : 0,
            data: (_v = (_u = (_t = data === null || data === void 0 ? void 0 : data.squad) === null || _t === void 0 ? void 0 : _t.dataset) === null || _u === void 0 ? void 0 : _u.map((squad) => squad)) !== null && _v !== void 0 ? _v : [],
        },
        leagues: {
            count: (_x = (_w = data === null || data === void 0 ? void 0 : data.leagues) === null || _w === void 0 ? void 0 : _w.datasetLength) !== null && _x !== void 0 ? _x : 0,
            data: (_0 = (_z = (_y = data === null || data === void 0 ? void 0 : data.leagues) === null || _y === void 0 ? void 0 : _y.dataset) === null || _z === void 0 ? void 0 : _z.map((league) => league)) !== null && _0 !== void 0 ? _0 : [],
        },
    };
});
exports.getSearchResult = getSearchResult;
exports.default = getSearchResult;
//# sourceMappingURL=getSearchResult.js.map