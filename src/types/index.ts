export interface CardData {
  id: number;
  color: string;
  subText: string;
  type: number;
  text: string;
  textColor?: string;
}

export type Turn = -1 | 0 | 1 | 2 | 3;

export interface Status {
  type: number;
  values?: string;
}
