/// <reference types="node" />
import { Team } from './Team';
import { EventEmitter } from 'events';
declare class Match extends EventEmitter {
    teams: Team[];
    constructor(teams: Team[]);
}
export default Match;
export { Match };
//# sourceMappingURL=Match.d.ts.map