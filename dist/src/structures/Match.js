"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Match = void 0;
const events_1 = require("events");
class Match extends events_1.EventEmitter {
    constructor(teams) {
        super();
        this.teams = teams;
    }
}
exports.Match = Match;
exports.default = Match;
//# sourceMappingURL=Match.js.map