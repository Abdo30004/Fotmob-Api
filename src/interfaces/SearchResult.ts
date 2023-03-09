interface ApiSearchMatch {
  pageUrl?: string;
  home?: {
    name?: string;
    id?: string;
  };
  away?: {
    name?: string;
    id?: string;
  };
  status?: {
    utcTime?: Date;
    started?: boolean;
    cancelled?: boolean;
    finished?: boolean;
  };
}
interface ApiSearchNews {
  imageUrl?: string;
  title?: string;
  sourceStr?: string;
  lead?: string;
  page?: {
    url?: string;
  };
}
interface ApiSearchSequad{
  id?: string;
  name?: string;
  teamName?: string;
}
interface ApiSearchResult {
  matches: ApiSearchMatch[];
  squad: ApiSearchSequad[];
  news: ApiSearchNews[];
 // leagues: ApiSearchLeague[];
}
