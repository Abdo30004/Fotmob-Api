import { Team } from './Team';
import { EventEmitter } from 'events';

class Match extends EventEmitter {
    public teams: Team[];

    constructor(teams: Team[]) {
        super();
        this.teams = teams;
        
    }
}

export default Match;
export { Match };