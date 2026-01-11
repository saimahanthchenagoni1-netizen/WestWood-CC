
export interface Player {
  id: number;
  name: string;
  role?: string;
  isCaptain?: boolean;
  isViceCaptain?: boolean;
  specialty?: string;
}

export interface MatchStrategy {
  title: string;
  advice: string;
}
