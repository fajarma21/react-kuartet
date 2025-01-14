import { Turn } from "@/types";

export interface DrawPileProps {
  count: number;
  disabled: boolean;
  drawTurn: Turn;
  onClickDraw: () => void;
}
