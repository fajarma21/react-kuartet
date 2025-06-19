import type { Status } from '@/types';
import { ReactNode } from 'react';

export interface HandProps {
  children: ReactNode;
  currentTurn: boolean;
  index: number;
  isWinner: boolean;
  status?: Status;
  total: number;
}
