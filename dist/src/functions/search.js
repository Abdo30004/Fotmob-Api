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
const getSearchResult = (search, options) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
    let url = `https://www.fotmob.com/api/searchData?term=${search}`;
    if (options === null || options === void 0 ? void 0 : options.filter) {
        url += `&fetchMore=${options.filter.toString()}`;
    }
    if (options === null || options === void 0 ? void 0 : options.language) {
        url += `&userLanguage=${options.language}`;
    }
    let { data } = (yield axios_1.default.get(url));
    return {
        matches: {
            count: (_a = data.matches) === null || _a === void 0 ? void 0 : _a.datasetLength,
            data: (_c = (_b = data.matches) === null || _b === void 0 ? void 0 : _b.dataset) === null || _c === void 0 ? void 0 : _c.map((match) => match),
        },
        teams: {
            count: (_d = data.teams) === null || _d === void 0 ? void 0 : _d.datasetLength,
            data: (_f = (_e = data.teams) === null || _e === void 0 ? void 0 : _e.dataset) === null || _f === void 0 ? void 0 : _f.map((team) => team),
        },
        news: {
            count: (_g = data.news) === null || _g === void 0 ? void 0 : _g.datasetLength,
            data: (_j = (_h = data.news) === null || _h === void 0 ? void 0 : _h.dataset) === null || _j === void 0 ? void 0 : _j.map((news) => news),
        },
        squad: {
            count: (_k = data.squad) === null || _k === void 0 ? void 0 : _k.datasetLength,
            data: (_m = (_l = data.squad) === null || _l === void 0 ? void 0 : _l.dataset) === null || _m === void 0 ? void 0 : _m.map((squad) => squad),
        },
        leagues: {
            count: (_o = data.leagues) === null || _o === void 0 ? void 0 : _o.datasetLength,
            data: (_q = (_p = data.leagues) === null || _p === void 0 ? void 0 : _p.dataset) === null || _q === void 0 ? void 0 : _q.map((league) => league),
        },
    };
});
exports.getSearchResult = getSearchResult;
exports.default = getSearchResult;
//# sourceMappingURL=search.js.map