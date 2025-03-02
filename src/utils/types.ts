export type TPlayer = {
  username: string;
  kills: number;
};

export type TTeam = {
  name: string;
  players: TPlayer[];
  points: number;
  place: number;
  total_kills: number;
};

export enum MatchStatus {
  Scheduled = 'Scheduled',
  Ongoing = 'Ongoing',
  Finished = 'Finished'
}

export type TMatch = {
  time: string;
  title: string;
  homeTeam: TTeam;
  awayTeam: TTeam;
  homeScore: number;
  awayScore: number;
  status: MatchStatus;
};
