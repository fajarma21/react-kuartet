import { ReactNode } from "react";

export interface HandProps {
  children: ReactNode;
  currentTurn: boolean;
  index: number;
  isWinner: boolean;
  text: string;
  total: number;
}
