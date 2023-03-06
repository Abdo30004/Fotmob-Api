export interface MatchesReuslt {
  leagues?: League[];
  date?: string;
}

interface League {
  ccode?: string;
  id?: number;
  primaryId?: number;
  name?: string;
  matches?: Match[];
  parentLeagueId?: number;
  internalRank?: number;
  liveRank?: number;
  simpleLeague?: boolean;
  isGroup?: boolean;
  groupName?: string;
  parentLeagueName?: string;
}

interface Match {
  id?: number;
  leagueId?: number;
  time?: string;
  home?: Team;
  away?: Team;
  eliminatedTeamId?: number | null;
  statusId?: number;
  tournamentStage?: string;
  status?: Status;
  timeTS?: number;
}

interface Team {
  id?: number;
  score?: number;
  name?: string;
  longName?: string;
  penScore?: number;
}

interface Status {
  utcTime?: Date;
  finished?: boolean;
  started?: boolean;
  cancelled?: boolean;
  scoreStr?: string;
  reason?: Reason;
  aggregatedStr?: string;
}

interface Reason {
  short?: Short;
  long?: Long;
}

type Long = "Full-Time" | "Postponed" | "Cancelled" | "After penalties";

type Short = "FT" | "PP" | "Can" | "Pen";
